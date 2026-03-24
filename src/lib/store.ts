import { create } from 'zustand'

interface CartItem {
  id: string
  name: string
  slug: string
  price: number
  image: string
  quantity: number
  category: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id)
    
    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }))
    } else {
      set((state) => ({
        items: [...state.items, { ...item, quantity: 1 }],
      }))
    }
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id)
      return
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }))
  },
  
  clearCart: () => {
    set({ items: [] })
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
}))

interface User {
  id: string
  name: string
  email: string
  phone?: string
}

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

interface WishlistItem {
  id: string
  name: string
  slug: string
  price: number
  image: string
  category: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id)
    
    if (!existingItem) {
      set((state) => ({
        items: [...state.items, item],
      }))
    }
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },
  
  isInWishlist: (id) => {
    return get().items.some((item) => item.id === id)
  },
}))

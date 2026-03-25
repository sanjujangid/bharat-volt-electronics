import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only initialize Prisma if we have a DATABASE_URL and we're not in build time
const shouldInitPrisma = process.env.DATABASE_URL && 
  process.env.NEXT_PHASE !== 'phase-production-build' && 
  process.env.NODE_ENV !== 'test'

export const prisma = shouldInitPrisma 
  ? (globalForPrisma.prisma ?? new PrismaClient())
  : null as any

if (shouldInitPrisma && process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

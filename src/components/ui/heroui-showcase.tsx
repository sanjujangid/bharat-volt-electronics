'use client'

import { useState } from 'react'
import { 
  // Layout & Structure
  Card,
  // Form Controls
  Button, Input, Textarea, Select, SelectItem,
  Checkbox, Radio, RadioGroup, Switch, Slider,
  // Navigation
  Tabs, Tab, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  // Indicators & Badges
  Chip, Badge, Progress, ProgressCircle,
  // Feedback & Modals
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  // Lists & Tables
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  // Advanced Components
  Avatar, Pagination, Breadcrumbs, BreadcrumbItem,
  // Loading States
  Spinner, Skeleton,
  // Alerts & Messages
  Alert
} from '@heroui/react'

export function HeroUIShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("profile")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    rating: 3,
    category: ''
  })

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            HeroUI Component Showcase
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            Complete demonstration of HeroUI components with proper usage
          </p>
        </div>

        {/* Buttons Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button color="primary">Primary Button</Button>
            <Button color="danger">Danger Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button isLoading>Loading Button</Button>
            <Button isDisabled>Disabled Button</Button>
          </div>
        </Card>

        {/* Form Controls Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Form Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Textarea
                label="Message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <Select
                label="Category"
                placeholder="Select a category"
                selectedKeys={formData.category ? [formData.category] : []}
                onSelectionChange={(keys) => setFormData({...formData, category: Array.from(keys)[0] as string})}
              >
                <SelectItem key="electronics" value="electronics">Electronics</SelectItem>
                <SelectItem key="clothing" value="clothing">Clothing</SelectItem>
                <SelectItem key="books" value="books">Books</SelectItem>
                <SelectItem key="home" value="home">Home & Garden</SelectItem>
              </Select>
              <Slider
                label="Rating"
                step={1}
                maxValue={5}
                minValue={1}
                value={formData.rating}
                onChange={(value) => setFormData({...formData, rating: value as number})}
                className="max-w-md"
              />
              <div className="space-y-2">
                <Checkbox
                  isSelected={formData.subscribe}
                  onValueChange={(checked) => setFormData({...formData, subscribe: checked as boolean})}
                >
                  Subscribe to newsletter
                </Checkbox>
                <Switch
                  isSelected={formData.subscribe}
                  onValueChange={(checked) => setFormData({...formData, subscribe: checked as boolean})}
                >
                  Email notifications
                </Switch>
              </div>
            </div>
          </div>
        </Card>

        {/* Chips & Badges Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Chips & Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Chip>Default Chip</Chip>
            <Chip variant="outline">Outline Chip</Chip>
            <Chip variant="secondary">Secondary Chip</Chip>
            <Chip color="primary">Primary Chip</Chip>
            <Chip color="success">Success Chip</Chip>
            <Chip color="warning">Warning Chip</Chip>
            <Chip color="danger">Danger Chip</Chip>
            <Badge content="5" color="danger">
              <Button>Notifications</Button>
            </Badge>
            <Badge content="New" color="primary">
              <Button>Inbox</Button>
            </Badge>
          </div>
        </Card>

        {/* Tabs Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Tabs</h2>
          <Tabs selectedKey={selectedTab} onSelectionChange={(key) => setSelectedTab(key as string)}>
            <Tab key="profile" title="Profile">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
                <p className="text-[var(--muted-foreground)]">Manage your profile information and preferences.</p>
              </div>
            </Tab>
            <Tab key="security" title="Security">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
                <p className="text-[var(--muted-foreground)]">Configure your password and security options.</p>
              </div>
            </Tab>
            <Tab key="notifications" title="Notifications">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
                <p className="text-[var(--muted-foreground)]">Choose how you want to receive notifications.</p>
              </div>
            </Tab>
          </Tabs>
        </Card>

        {/* Progress Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Progress Indicators</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Download Progress</span>
                <span className="text-sm text-[var(--muted-foreground)]">75%</span>
              </div>
              <Progress value={75} color="primary" className="max-w-md" />
            </div>
            <div className="flex items-center gap-4">
              <ProgressCircle value={60} color="success" className="w-16 h-16" />
              <ProgressCircle value={30} color="warning" className="w-16 h-16" />
              <ProgressCircle value={90} color="danger" className="w-16 h-16" />
              <div className="space-y-1">
                <div className="text-sm font-medium">Task Completion</div>
                <div className="text-xs text-[var(--muted-foreground)]">60% Complete</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Table Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Table</h2>
          <Table aria-label="Example table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>
                  <Chip color="success" size="sm">Active</Chip>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <Chip color="warning" size="sm">Pending</Chip>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        {/* Modal & Dropdown Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Modal & Dropdown</h2>
          <div className="flex gap-4">
            <Button onPress={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="outline">
                  Dropdown Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Card>

        {/* Loading States */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Loading States</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <Spinner color="primary" />
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="warning" />
            <Spinner color="danger" />
            <div className="space-y-2">
              <Skeleton className="w-40 h-4 rounded-lg" />
              <Skeleton className="w-32 h-4 rounded-lg" />
              <Skeleton className="w-36 h-4 rounded-lg" />
            </div>
          </div>
        </Card>

        {/* Avatar & Pagination */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Avatar & Pagination</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" />
              <Avatar name="John Doe" />
              <Avatar name="Jane Smith" color="primary" />
            </div>
            <Pagination total={10} initialPage={1} />
            <Breadcrumbs>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Electronics</BreadcrumbItem>
              <BreadcrumbItem>Current Item</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </Card>

        {/* Alert */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Alerts</h2>
          <div className="space-y-4">
            <Alert color="primary" title="Information">
              This is an informational alert message.
            </Alert>
            <Alert color="success" title="Success">
              Your changes have been saved successfully!
            </Alert>
            <Alert color="warning" title="Warning">
              Please review your input before proceeding.
            </Alert>
            <Alert color="danger" title="Error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </Card>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  This is a modal dialog. You can add any content here including forms, 
                  images, or any other components.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

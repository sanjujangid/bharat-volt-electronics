'use client'

import { useState } from 'react'
import { 
  // Layout & Structure
  Card,
  // Form Controls
  Button, Input,
  // Navigation
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  // Indicators & Badges
  Chip,
  // Lists & Tables
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  // Loading States
  Spinner, Skeleton
} from '@heroui/react'

export function HeroUIShowcase() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
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
            Working demonstration of HeroUI components
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
            <Button variant="danger">Danger Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </Card>

        {/* Form Controls Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Form Controls</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
        </Card>

        {/* Chips Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Chips</h2>
          <div className="flex flex-wrap gap-3">
            <Chip>Default Chip</Chip>
            <Chip variant="secondary">Secondary Chip</Chip>
            <Chip variant="primary">Primary Chip</Chip>
            <Chip variant="soft">Soft Chip</Chip>
            <Chip variant="tertiary">Tertiary Chip</Chip>
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
                  <Chip variant="secondary" size="sm">Active</Chip>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <Chip variant="secondary" size="sm">Pending</Chip>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        {/* Dropdown Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Dropdown Menu</h2>
          <div className="flex gap-4">
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
                <DropdownItem key="delete" className="text-danger">
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
            <Spinner />
            <div className="space-y-2">
              <Skeleton className="w-40 h-4 rounded-lg" />
              <Skeleton className="w-32 h-4 rounded-lg" />
              <Skeleton className="w-36 h-4 rounded-lg" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

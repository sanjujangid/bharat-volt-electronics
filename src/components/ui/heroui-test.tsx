'use client'

import { Button, Card, Switch } from '@heroui/react'

export function HeroUITest() {
  return (
    <Card className="max-w-md mx-auto m-4">
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold">HeroUI Components Test</h3>
        
        <div className="flex gap-2">
          <Button>
            Primary Button
          </Button>
          <Button variant="outline">
            Secondary Button
          </Button>
        </div>
        
        <Switch defaultSelected>
          Toggle Switch
        </Switch>
      </div>
    </Card>
  )
}

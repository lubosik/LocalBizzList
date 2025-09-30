'use client'

import { ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

interface TabsTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

interface TabsContentProps {
  children: ReactNode
  value: string
  className?: string
}

export function Tabs({ children, defaultValue, value, onValueChange }: TabsProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  )
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex border-b border-neutral-200 ${className}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ children, value, className = '' }: TabsTriggerProps) {
  return (
    <button
      className={`px-4 py-2 font-semibold transition-colors border-b-2 border-transparent text-neutral-600 hover:text-neutral-800 ${className}`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, className = '' }: TabsContentProps) {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  )
}

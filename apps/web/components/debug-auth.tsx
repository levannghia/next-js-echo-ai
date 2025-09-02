'use client'

import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@workspace/backend/_generated/api'
import { useEffect } from 'react'

export function DebugAuth() {
  const { user, isLoaded: clerkLoaded } = useUser()
  const userId = useQuery(api.user.getCurrentUser)
  
  useEffect(() => {
    console.log('Clerk User:', user?.id)
    console.log('Convex User:', userId)
  }, [user, userId])

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-xs">
      <h3 className="font-bold mb-2">Auth Debug</h3>
      <div>
        {JSON.stringify({ userId })}
      </div>
    </div>
  )
}
'use client'

import { useMutation, useQuery } from 'convex/react'
import { api } from '@workspace/backend/_generated/api'
import { Button } from '@workspace/ui/components/button'
import { Authenticated, Unauthenticated } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Page() {
  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add)

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World</h1>
            <UserButton />
            <p>App/Web</p>
            <Button onClick={() => addUser()}>Add User</Button>
            {users?.map(user => (
              <ul key={user._id}>
                <li>{user.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Vui lòng đăng nhập</p>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}

'use client'

import { useUser } from '@/hooks/use-user'
import Home from '@/views/Home'
import { redirect } from 'next/navigation'

export default function Index({}) {
  const { user } = useUser()

  if (!user._id) {
    return redirect('/auth')
  }

  return <Home user={user} />
}

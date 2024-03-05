'use client'

import { useUser } from '@/hooks/use-user'
import Profile from '@/views/Profile'
import { redirect } from 'next/navigation'

export default function Index() {
  const { user } = useUser()

  if (!user._id) {
    return redirect('/auth')
  }

  return <Profile user={user} />
}

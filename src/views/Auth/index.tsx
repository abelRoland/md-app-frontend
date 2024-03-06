'use client'

import Loading from '@/components/Loading'
import styles from './auth.module.css'
import { useUser } from '@/hooks/use-user'
import { fetchUsers } from '@/lib/actions'
import { Users } from '@/lib/global'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Suspense } from 'react'
import { LoadTop } from '@/lib/constants'

export default function Auth() {
  const [users, setUsers] = useState<Users[]>()
  const [loading, setLoading] = useState(true)

  const { setUser, logout } = useUser()
  const router = useRouter()

  const handleAuth = useCallback(
    (user: Users) => {
      setUser(user)
      router.push(`/`)
    },
    [setUser, router]
  )

  useEffect(() => {
    async function fetchAllUsers() {
      const users: Users[] = await fetchUsers()
      setUsers(users)
      setLoading(false)
    }
    fetchAllUsers()
  }, [])

  useEffect(() => {
    logout()
  }, [logout])

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>To start, choose a user</h1>
      {loading ? (
        <div>
          <Loading loadTop={LoadTop.TOP30} loadPosition="relative" />
        </div>
      ) : (
        users?.map((user, key) => (
          <div
            className={styles.userCard}
            key={key}
            onClick={() => handleAuth(user)}
          >
            <p>{user.name}</p>
            <p>{`(${user.gender}, ${user.age} years, ${user.email})`}</p>
          </div>
        ))
      )}
    </div>
  )
}

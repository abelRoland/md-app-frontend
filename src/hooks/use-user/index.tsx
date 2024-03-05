import { Users } from '@/lib/global'
import { Gender } from '@/lib/constants'

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

const initialValue = {
  user: {
    name: '',
    age: 0,
    email: '',
    gender: Gender.NOT_DECLARED,
    _id: '',
  },
  setUser: () => {},
  logout: () => {},
}

type ContextProps = {
  user: Users
  setUser: Dispatch<SetStateAction<Users>>
  logout: () => void
}

const UserContext = createContext<ContextProps>(initialValue)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Users>(initialValue.user)

  const logout = useCallback(() => {
    setUser(initialValue.user)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

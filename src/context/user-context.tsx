'use client'

import React from 'react'

export interface IUser {
  id: number
  nome: string
  username: string
  email: string
}

interface IUserContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const UserContext = React.createContext<IUserContext | null>(null)

export const useUser = () => {
  const context = React.useContext(UserContext)

  if (!context) {
    throw new Error('UserContextProvider not found')
  }

  return context
}

export function UserContextProvider({
  children,
  user,
}: {
  user: IUser | null
  children: React.ReactNode
}) {
  const [userState, setUserState] = React.useState<IUser | null>(user)

  const setUser = (user: IUser | null) => {
    setUserState(user)
  }

  const value = {
    user: userState,
    setUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

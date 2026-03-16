'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AuthContext = createContext()
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')
    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password })
    if (res.data.success) {
      setUser(res.data.user)
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
      return res.data
    }
    throw new Error(res.data.message)
  }

  const register = async (name, email, password, role) => {
    const res = await axios.post(`${API_URL}/auth/register`, { name, email, password, role })
    if (res.data.success) {
      setUser(res.data.user)
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
      return res.data
    }
    throw new Error(res.data.message)
  }

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    delete axios.defaults.headers.common['Authorization']
    router.push('/login')
  }, [router])

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

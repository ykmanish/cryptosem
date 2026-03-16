// components/Header.js
'use client'

import { useState, useEffect } from 'react'
import { Menu, Bell, Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { io } from 'socket.io-client'
import toast from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    const socket = io(API_URL.replace('/api', ''), {
      auth: { token }
    })

    socket.on('connect', () => {
      console.log('Connected to notifications')
    })

    socket.on('notification', (data) => {
      setNotifications(prev => [data, ...prev])
      setUnreadCount(prev => prev + 1)
      
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Bell className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {data.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {data.message}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ), { duration: 5000 })
    })

    socket.on('announcement', (data) => {
      setNotifications(prev => [data, ...prev])
      setUnreadCount(prev => prev + 1)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${API_URL}/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (response.data.success) {
        setNotifications(response.data.notifications)
        setUnreadCount(response.data.unreadCount)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${API_URL}/notifications/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      setNotifications(prev =>
        prev.map(n => n._id === id ? { ...n, read: true } : n)
      )
      setUnreadCount(prev => Math.max(0, prev - 1))
    } catch (error) {
      console.error('Error marking as read:', error)
    }
  }

  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${API_URL}/notifications/read-all`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      setNotifications(prev => prev.map(n => ({ ...n, read: true })))
      setUnreadCount(0)
      toast.success('All notifications marked as read')
    } catch (error) {
      console.error('Error marking all as read:', error)
    }
  }

  const handleSearch = async (query) => {
    setSearchQuery(query)
    if (query.length < 2) {
      setSearchResults([])
      return
    }

    setSearching(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${API_URL}/search?q=${query}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (response.data.success) {
        setSearchResults(response.data.results)
      }
    } catch (error) {
      console.error('Error searching:', error)
    } finally {
      setSearching(false)
    }
  }

  const getPageTitle = () => {
    const path = pathname.split('/').pop()
    if (!path || path === 'dashboard') return 'Dashboard'
    return path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <header className="bg-white/80 dark:bg-[#1A1B1F]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-[#202227]/50 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#25262B] transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {getPageTitle()}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowSearch(true)}
                  className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-[#25262B] border-0 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {showSearch && searchQuery.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white dark:bg-[#1A1B1F] rounded-2xl shadow-xl border border-gray-200/50 dark:border-[#202227]/50 overflow-hidden z-50">
                  {searching ? (
                    <div className="p-4 text-center text-gray-500">
                      Searching...
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          onClick={() => setShowSearch(false)}
                          className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#25262B] transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {result.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {result.type}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#25262B] transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-[#1A1B1F]"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#1A1B1F] rounded-2xl shadow-xl border border-gray-200/50 dark:border-[#202227]/50 overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-200/50 dark:border-[#202227]/50 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification._id}
                          onClick={() => markAsRead(notification._id)}
                          className={`p-4 border-b border-gray-200/50 dark:border-[#202227]/50 last:border-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#25262B] transition-colors ${
                            !notification.read ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''
                          }`}
                        >
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                            {new Date(notification.createdAt).toLocaleTimeString()}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <Bell className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          No notifications
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
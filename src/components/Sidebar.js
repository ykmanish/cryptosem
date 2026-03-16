// components/Sidebar.js
'use client'

import { useState, useEffect, useRef } from 'react'
import {
  LayoutGrid, Home, User, Shield, Settings, BookOpen, Users, 
  GraduationCap, Calendar, Clock, FileText, FolderOpen, BookMarked,
  Presentation, MessageSquare, Bell, BarChart2, Activity, LogOut,
  ChevronDown, PanelLeft, Book, ClipboardList, CheckSquare,
  Mail, Target, Award, CreditCard, Library, School, Building2,
  PenTool, Video, Headphones, Globe, Lock, UserCheck, UserPlus,
  PieChart, TrendingUp, Download, Upload, Share2, Copy, Eye,
  EyeOff, Plus, Edit, Trash2, Search, Filter, X, CheckCircle,
  AlertCircle, Info, HelpCircle, Moon, Sun, Menu
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// School/College specific modules
const ALL_MODULES = [
  {
    id: 'home',
    icon: Home,
    label: 'Home',
    hasSubMenu: false,
    path: '/dashboard/home',
    roles: ['student', 'faculty', 'admin', 'parent']
  },
  {
    id: 'profile',
    icon: User,
    label: 'Profile',
    hasSubMenu: false,
    path: '/dashboard/profile',
    roles: ['student', 'faculty', 'admin', 'parent']
  },
  {
    id: 'subjects',
    icon: BookOpen,
    label: 'My Subjects',
    hasSubMenu: true,
    path: '/dashboard/subjects',
    subMenus: [
      { id: 'subjects_enrolled', label: 'Enrolled Subjects', path: '/dashboard/subjects/enrolled', roles: ['student'] },
      { id: 'subjects_teaching', label: 'Teaching Subjects', path: '/dashboard/subjects/teaching', roles: ['faculty'] },
      { id: 'subjects_all', label: 'All Subjects', path: '/dashboard/subjects/all', roles: ['admin'] },
      { id: 'subjects_join', label: 'Join with Code', path: '/dashboard/subjects/join', roles: ['student'] }
    ],
    permission: 'subjects_view'
  },
  {
    id: 'attendance',
    icon: Calendar,
    label: 'Attendance',
    hasSubMenu: true,
    path: '/dashboard/attendance',
    subMenus: [
      { id: 'attendance_mark', label: 'Mark Attendance', path: '/dashboard/attendance/mark', roles: ['faculty'] },
      { id: 'attendance_view', label: 'View Attendance', path: '/dashboard/attendance/view', roles: ['student', 'faculty', 'parent'] },
      { id: 'attendance_reports', label: 'Attendance Reports', path: '/dashboard/attendance/reports', roles: ['faculty', 'admin'] },
      { id: 'attendance_summary', label: 'Summary', path: '/dashboard/attendance/summary', roles: ['student', 'parent'] }
    ],
    permission: 'attendance_view'
  },
  {
    id: 'assignments',
    icon: ClipboardList,
    label: 'Assignments',
    hasSubMenu: true,
    path: '/dashboard/assignments',
    subMenus: [
      { id: 'assignments_create', label: 'Create Assignment', path: '/dashboard/assignments/create', roles: ['faculty'] },
      { id: 'assignments_submit', label: 'Submit Assignment', path: '/dashboard/assignments/submit', roles: ['student'] },
      { id: 'assignments_grade', label: 'Grade Assignments', path: '/dashboard/assignments/grade', roles: ['faculty'] },
      { id: 'assignments_view', label: 'View Assignments', path: '/dashboard/assignments/view', roles: ['student', 'faculty', 'parent'] },
      { id: 'assignments_results', label: 'Results', path: '/dashboard/assignments/results', roles: ['student', 'parent'] }
    ],
    permission: 'assignments_view'
  },
  {
    id: 'materials',
    icon: FolderOpen,
    label: 'Study Materials',
    hasSubMenu: true,
    path: '/dashboard/materials',
    subMenus: [
      { id: 'materials_upload', label: 'Upload Materials', path: '/dashboard/materials/upload', roles: ['faculty'] },
      { id: 'materials_my', label: 'My Materials', path: '/dashboard/materials/my', roles: ['faculty'] },
      { id: 'materials_access', label: 'Access Materials', path: '/dashboard/materials/access', roles: ['student'] },
      { id: 'materials_folders', label: 'Manage Folders', path: '/dashboard/materials/folders', roles: ['faculty'] }
    ],
    permission: 'materials_view'
  },
  {
    id: 'announcements',
    icon: Bell,
    label: 'Announcements',
    hasSubMenu: true,
    path: '/dashboard/announcements',
    subMenus: [
      { id: 'announcements_create', label: 'Create', path: '/dashboard/announcements/create', roles: ['faculty', 'admin'] },
      { id: 'announcements_view', label: 'View All', path: '/dashboard/announcements/view', roles: ['student', 'faculty', 'admin', 'parent'] },
      { id: 'announcements_subject', label: 'Subject Updates', path: '/dashboard/announcements/subject', roles: ['student', 'faculty'] }
    ],
    permission: 'announcements_view'
  },
  {
    id: 'discussions',
    icon: MessageSquare,
    label: 'Discussions',
    hasSubMenu: true,
    path: '/dashboard/discussions',
    subMenus: [
      { id: 'discussions_rooms', label: 'Discussion Rooms', path: '/dashboard/discussions/rooms', roles: ['student', 'faculty'] },
      { id: 'discussions_polls', label: 'Create Poll', path: '/dashboard/discussions/polls', roles: ['student', 'faculty'] },
      { id: 'discussions_my', label: 'My Discussions', path: '/dashboard/discussions/my', roles: ['student', 'faculty'] }
    ],
    permission: 'discussions_view'
  },
  {
    id: 'timetable',
    icon: Clock,
    label: 'Timetable',
    hasSubMenu: true,
    path: '/dashboard/timetable',
    subMenus: [
      { id: 'timetable_view', label: 'View Timetable', path: '/dashboard/timetable/view', roles: ['student', 'faculty', 'parent'] },
      { id: 'timetable_create', label: 'Create Timetable', path: '/dashboard/timetable/create', roles: ['admin'] },
      { id: 'timetable_manage', label: 'Manage Timetable', path: '/dashboard/timetable/manage', roles: ['admin'] }
    ],
    permission: 'timetable_view'
  },
  {
    id: 'grades',
    icon: Award,
    label: 'Grades & Results',
    hasSubMenu: true,
    path: '/dashboard/grades',
    subMenus: [
      { id: 'grades_view', label: 'My Grades', path: '/dashboard/grades/view', roles: ['student', 'parent'] },
      { id: 'grades_enter', label: 'Enter Grades', path: '/dashboard/grades/enter', roles: ['faculty'] },
      { id: 'grades_reports', label: 'Grade Reports', path: '/dashboard/grades/reports', roles: ['faculty', 'admin'] }
    ],
    permission: 'grades_view'
  },
  {
    id: 'fees',
    icon: CreditCard,
    label: 'Fees & Payments',
    hasSubMenu: true,
    path: '/dashboard/fees',
    subMenus: [
      { id: 'fees_view', label: 'Fee Structure', path: '/dashboard/fees/view', roles: ['student', 'parent'] },
      { id: 'fees_pay', label: 'Pay Fees', path: '/dashboard/fees/pay', roles: ['student', 'parent'] },
      { id: 'fees_history', label: 'Payment History', path: '/dashboard/fees/history', roles: ['student', 'parent', 'admin'] },
      { id: 'fees_manage', label: 'Manage Fees', path: '/dashboard/fees/manage', roles: ['admin'] }
    ],
    permission: 'fees_view'
  },
  {
    id: 'library',
    icon: Library,
    label: 'Library',
    hasSubMenu: true,
    path: '/dashboard/library',
    subMenus: [
      { id: 'library_catalog', label: 'Catalog', path: '/dashboard/library/catalog', roles: ['student', 'faculty'] },
      { id: 'library_borrowed', label: 'Borrowed Books', path: '/dashboard/library/borrowed', roles: ['student', 'faculty'] },
      { id: 'library_requests', label: 'Requests', path: '/dashboard/library/requests', roles: ['student', 'faculty'] },
      { id: 'library_manage', label: 'Manage Library', path: '/dashboard/library/manage', roles: ['admin'] }
    ],
    permission: 'library_view'
  },
  {
    id: 'events',
    icon: Calendar,
    label: 'Events',
    hasSubMenu: true,
    path: '/dashboard/events',
    subMenus: [
      { id: 'events_calendar', label: 'Calendar', path: '/dashboard/events/calendar', roles: ['student', 'faculty', 'admin'] },
      { id: 'events_create', label: 'Create Event', path: '/dashboard/events/create', roles: ['faculty', 'admin'] },
      { id: 'events_my', label: 'My Events', path: '/dashboard/events/my', roles: ['student', 'faculty'] }
    ],
    permission: 'events_view'
  },
  {
    id: 'communication',
    icon: Mail,
    label: 'Communication',
    hasSubMenu: true,
    path: '/dashboard/communication',
    subMenus: [
      { id: 'communication_messages', label: 'Messages', path: '/dashboard/communication/messages', roles: ['student', 'faculty', 'admin'] },
      { id: 'communication_notifications', label: 'Notifications', path: '/dashboard/communication/notifications', roles: ['student', 'faculty', 'admin'] },
      { id: 'communication_broadcast', label: 'Broadcast', path: '/dashboard/communication/broadcast', roles: ['admin'] }
    ],
    permission: 'communication_view'
  },
  {
    id: 'reports',
    icon: BarChart2,
    label: 'Reports & Analytics',
    hasSubMenu: true,
    path: '/dashboard/reports',
    subMenus: [
      { id: 'reports_attendance', label: 'Attendance Reports', path: '/dashboard/reports/attendance', roles: ['faculty', 'admin'] },
      { id: 'reports_academic', label: 'Academic Reports', path: '/dashboard/reports/academic', roles: ['faculty', 'admin'] },
      { id: 'reports_performance', label: 'Performance Analytics', path: '/dashboard/reports/performance', roles: ['faculty', 'admin'] },
      { id: 'reports_my', label: 'My Reports', path: '/dashboard/reports/my', roles: ['student', 'parent'] }
    ],
    permission: 'reports_view'
  },
  {
    id: 'users',
    icon: Users,
    label: 'User Management',
    hasSubMenu: true,
    path: '/dashboard/users',
    subMenus: [
      { id: 'users_students', label: 'Students', path: '/dashboard/users/students', roles: ['admin'] },
      { id: 'users_faculty', label: 'Faculty', path: '/dashboard/users/faculty', roles: ['admin'] },
      { id: 'users_parents', label: 'Parents', path: '/dashboard/users/parents', roles: ['admin'] },
      { id: 'users_roles', label: 'Roles & Permissions', path: '/dashboard/users/roles', roles: ['admin'] }
    ],
    permission: 'users_view'
  },
  {
    id: 'activity_logs',
    icon: Activity,
    label: 'Activity Logs',
    hasSubMenu: false,
    path: '/dashboard/activity-logs',
    roles: ['admin']
  }
]

// Menu groups for organization
const MENU_GROUPS = [
  {
    label: 'Main',
    moduleIds: ['home', 'profile', 'subjects', 'attendance', 'assignments', 'materials']
  },
  {
    label: 'Academic',
    moduleIds: ['timetable', 'grades', 'announcements', 'discussions', 'library']
  },
  {
    label: 'Administration',
    moduleIds: ['fees', 'events', 'communication', 'reports', 'users', 'activity_logs']
  }
]

function ProfileDrawer({ isOpen, onClose, userData, userRole, onLogout }) {
  const router = useRouter()
  const drawerRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
    } else {
      setIsAnimating(false)
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose()
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!shouldRender) return null

  const handleNavigation = (path) => {
    router.push(path)
    onClose()
  }

  const getInitials = () => {
    if (!userData?.name) return 'U'
    return userData.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <>
      <div 
        className={`
          fixed inset-0 z-[60] transition-all duration-300 ease-out
          ${isAnimating ? 'bg-black/40 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'}
        `}
        onClick={onClose}
      />
      
      <div
        ref={drawerRef}
        className={`
          fixed bottom-0 left-0 right-0 md:left-[12px] md:right-auto md:bottom-16 md:w-80
          bg-white/90 dark:bg-[#1A1B1F]/90 backdrop-blur-xl
          rounded-t-3xl md:rounded-3xl
          shadow-2xl border border-gray-200/50 dark:border-[#202227]/50
          z-[70] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full md:translate-y-4 opacity-0 md:opacity-0'}
        `}
      >
        <div className="md:hidden w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1 bg-gray-300/80 dark:bg-gray-600/80 rounded-full" />
        </div>

        <div className="p-6 border-b border-gray-200/50 dark:border-[#202227]/50">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className={`
                relative w-16 h-16 rounded-full 
                bg-gradient-to-br from-blue-500 to-indigo-600
                flex items-center justify-center 
                overflow-hidden ring-2 ring-white/80 dark:ring-[#0E0F11]/80
                transition-transform duration-300 ease-out
                ${isAnimating ? 'scale-100' : 'scale-90'}
              `}>
                {userData?.avatar ? (
                  <img 
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=3B82F6&color=fff`;
                    }}
                  />
                ) : (
                  <span className="text-white font-bold text-xl">
                    {getInitials()}
                  </span>
                )}
              </div>
            </div>
            
            <div className={`
              flex-1 min-w-0 transition-all duration-300 delay-100
              ${isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
            `}>
              <p className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                {userData?.name || 'User'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {userData?.email || 'No email'}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-100/80 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full backdrop-blur-sm capitalize">
                  {userRole || 'Member'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <button
            onClick={() => handleNavigation('/dashboard/profile')}
            className={`
              flex items-center gap-3 w-full px-4 py-3 
              text-sm text-gray-700 dark:text-gray-300 
              hover:bg-gray-100/80 dark:hover:bg-[#25262B]/80 
              rounded-xl transition-all duration-200 
              group active:scale-[0.98]
              ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
            style={{ transitionDelay: isAnimating ? '150ms' : '0ms' }}
          >
            <User className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            <span>Profile</span>
          </button>

          <button
            onClick={() => handleNavigation('/dashboard/settings')}
            className={`
              flex items-center gap-3 w-full px-4 py-3 
              text-sm text-gray-700 dark:text-gray-300 
              hover:bg-gray-100/80 dark:hover:bg-[#25262B]/80 
              rounded-xl transition-all duration-200 
              group active:scale-[0.98]
              ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
            style={{ transitionDelay: isAnimating ? '200ms' : '0ms' }}
          >
            <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            <span>Settings</span>
          </button>
        </div>

        <div className="p-2 border-t border-gray-200/50 dark:border-[#202227]/50">
          <button
            onClick={onLogout}
            className={`
              flex items-center gap-3 w-full px-4 py-3 
              text-sm text-red-600 dark:text-red-400 
              hover:bg-red-50/80 dark:hover:bg-red-500/10 
              rounded-xl transition-all duration-200 
              group active:scale-[0.98]
              ${isAnimating ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: isAnimating ? '250ms' : '0ms' }}
          >
            <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname()
  const router = useRouter()
  const [expandedMenus, setExpandedMenus] = useState([])
  const [userRole, setUserRole] = useState(null)
  const [userData, setUserData] = useState({ name: '', email: '', avatar: null })
  const [loading, setLoading] = useState(true)
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0 })
  const dragStartX = useRef(0)
  const navRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('sidebarCollapsed')
    if (saved !== null) setIsCollapsed(saved === 'true')
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token')
        const userStr = localStorage.getItem('user')
        
        if (userStr) {
          const user = JSON.parse(userStr)
          setUserData({
            name: user.name || 'User',
            email: user.email || '',
            avatar: user.avatar || null
          })
          setUserRole(user.role || 'student')
        }

        if (token) {
          const response = await axios.get(`${API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          
          if (response.data.success) {
            const user = response.data.user
            setUserData({
              name: user.name,
              email: user.email,
              avatar: user.avatar
            })
            setUserRole(user.role)
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  useEffect(() => {
    if (!loading && !isCollapsed) {
      const activeMenu = ALL_MODULES.find(item => {
        if (item.hasSubMenu && item.subMenus) {
          return item.subMenus.some(sub => pathname === sub.path)
        }
        return pathname === item.path
      })
      if (activeMenu?.hasSubMenu && !expandedMenus.includes(activeMenu.id)) {
        setExpandedMenus([activeMenu.id])
      }
    }
  }, [pathname, loading, isCollapsed])

  const handleDragStart = (e) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    const delta = e.clientX - dragStartX.current
    if (delta < -50 && !isCollapsed) {
      setIsCollapsed(true)
      localStorage.setItem('sidebarCollapsed', 'true')
      setExpandedMenus([])
      setIsDragging(false)
    } else if (delta > 50 && isCollapsed) {
      setIsCollapsed(false)
      localStorage.setItem('sidebarCollapsed', 'false')
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => setIsDragging(false)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove)
      window.addEventListener('mouseup', handleDragEnd)
      document.body.style.cursor = 'ew-resize'
      document.body.style.userSelect = 'none'
    } else {
      window.removeEventListener('mousemove', handleDragMove)
      window.removeEventListener('mouseup', handleDragEnd)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove)
      window.removeEventListener('mouseup', handleDragEnd)
    }
  }, [isDragging, isCollapsed])

  const toggleCollapse = () => {
    const next = !isCollapsed
    setIsCollapsed(next)
    localStorage.setItem('sidebarCollapsed', String(next))
    if (next) setExpandedMenus([])
  }

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setProfileDrawerOpen(false)
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const toggleSubMenu = async (menuId) => {
    if (isCollapsed) return
    if (expandedMenus.includes(menuId)) {
      setExpandedMenus([])
    } else {
      setExpandedMenus([menuId])
    }
  }

  const isMenuActive = (item) => {
    if (item.hasSubMenu && item.subMenus) {
      return item.subMenus.some(sub => pathname === sub.path)
    }
    return pathname === item.path
  }

  const isSubMenuActive = (sub) => pathname === sub.path

  const handleMouseEnter = (e, item) => {
    if (!isCollapsed) return
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltipPosition({ top: rect.top })
    setHoveredItem(item)
  }

  const handleMouseLeave = () => setHoveredItem(null)

  const getFilteredModules = () => {
    return ALL_MODULES.filter(module => {
      if (!module.roles) return true
      return module.roles.includes(userRole)
    })
  }

  const filteredModules = getFilteredModules()

  const sidebarClass = [
    sidebarOpen ? 'translate-x-0' : '-translate-x-full',
    'md:translate-x-0 fixed md:static inset-y-0 left-0 z-50',
    'bg-white dark:bg-[#121212]',
    'border-r border-gray-200/50 dark:border-white/[0.06]',
    'flex flex-col transition-all duration-300 ease-in-out',
    isCollapsed ? 'w-[72px]' : 'w-64'
  ].join(' ')

  if (loading) {
    return (
      <>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div className={sidebarClass}>
          <div className="flex items-center justify-center h-16 border-b border-gray-200/50 dark:border-white/[0.06]">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          </div>
          <div className="flex-1 p-4 space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={sidebarClass}>
        <div className={[
          'flex items-center border-b border-gray-200/50 dark:border-white/[0.06]',
          isCollapsed ? 'flex-col gap-3 py-6 px-3' : 'justify-between px-5 py-[20px]'
        ].join(' ')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <School className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
                EduERP
              </span>
            )}
          </div>
          <button
            onClick={toggleCollapse}
            className="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
          >
            <PanelLeft className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav
          ref={navRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 space-y-5
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-black/10 dark:[&::-webkit-scrollbar-thumb]:bg-white/10
            [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {MENU_GROUPS.map(group => {
            const groupModules = filteredModules.filter(m => group.moduleIds.includes(m.id))
            if (groupModules.length === 0) return null

            return (
              <div key={group.label}>
                {!isCollapsed ? (
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] px-3 mb-1.5">
                    {group.label}
                  </p>
                ) : (
                  <div className="h-px bg-gray-200/50 dark:bg-white/10 mx-1 mb-2" />
                )}

                <div className="space-y-0.5">
                  {groupModules.map(item => {
                    const Icon = item.icon
                    const isExpanded = expandedMenus.includes(item.id)
                    const isActive = isMenuActive(item)

                    return (
                      <div key={item.id} className="relative">
                        <Link
                          href={item.hasSubMenu ? '#' : item.path}
                          onClick={(e) => {
                            if (item.hasSubMenu) {
                              e.preventDefault()
                              toggleSubMenu(item.id)
                            } else {
                              setSidebarOpen(false)
                            }
                          }}
                          onMouseEnter={(e) => handleMouseEnter(e, item)}
                          onMouseLeave={handleMouseLeave}
                          className={[
                            'w-full flex items-center py-2.5 rounded-xl',
                            'transition-all duration-200 text-sm font-medium',
                            isCollapsed ? 'justify-center px-2' : 'justify-between px-3',
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200'
                          ].join(' ')}
                        >
                          <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
                            <Icon className={`w-[18px] h-[18px] flex-shrink-0 ${
                              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                            }`} />
                            {!isCollapsed && (
                              <span className="whitespace-nowrap">{item.label}</span>
                            )}
                          </div>

                          {!isCollapsed && item.hasSubMenu && item.subMenus && (
                            <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`} />
                          )}
                        </Link>

                        {!isCollapsed && item.hasSubMenu && item.subMenus && (
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? 'max-h-96 opacity-100 mt-0.5' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="ml-[13px] pl-3.5 border-l border-gray-200 dark:border-gray-700/60 space-y-0.5 py-1">
                              {item.subMenus
                                .filter(sub => !sub.roles || sub.roles.includes(userRole))
                                .map(subItem => {
                                  const isSubActive = isSubMenuActive(subItem)
                                  return (
                                    <Link
                                      key={subItem.id}
                                      href={subItem.path}
                                      onClick={() => setSidebarOpen(false)}
                                      className={[
                                        'w-full flex items-center gap-2.5 px-3 py-2 rounded-lg',
                                        'transition-all duration-200 text-[13px]',
                                        isSubActive
                                          ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-gray-200'
                                      ].join(' ')}
                                    >
                                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                                        isSubActive
                                          ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                                          : 'bg-gray-300 dark:bg-gray-600'
                                      }`} />
                                      <span className="whitespace-nowrap">{subItem.label}</span>
                                    </Link>
                                  )
                                })}
                            </div>
                          </div>
                        )}

                        {isCollapsed && hoveredItem?.id === item.id && (
                          <div
                            className="fixed left-[72px] ml-2.5 z-[60] bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-xl text-sm whitespace-nowrap pointer-events-none"
                            style={{ top: tooltipPosition.top }}
                          >
                            <div className="font-semibold">{item.label}</div>
                            {item.hasSubMenu && item.subMenus && (
                              <div className="mt-1.5 pt-1.5 border-t border-gray-700/50 dark:border-gray-300/50 space-y-1">
                                {item.subMenus
                                  .filter(sub => !sub.roles || sub.roles.includes(userRole))
                                  .map(subItem => (
                                    <div key={subItem.id} className="text-xs text-gray-300 dark:text-gray-600 flex items-center gap-1.5">
                                      <span className="w-1 h-1 rounded-full bg-gray-500 dark:bg-gray-400 inline-block" />
                                      {subItem.label}
                                    </div>
                                  ))}
                              </div>
                            )}
                            <div className="absolute left-0 top-1/2 -translate-x-[3px] -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-gray-900 dark:bg-gray-100 rounded-sm" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>

        <div className={`${isCollapsed ? 'px-2 py-3' : 'px-3 py-3'} border-t border-gray-200/50 dark:border-white/[0.06]`}>
          {!isCollapsed && (
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] px-3 mb-1.5">
              Account
            </p>
          )}
          <button
            onClick={() => {
              setProfileDrawerOpen(true)
              setSidebarOpen(false)
            }}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2 py-2' : 'gap-3 px-3 py-2'} rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200`}
          >
            <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              {userData.avatar ? (
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=3B82F6&color=fff`;
                  }}
                />
              ) : (
                <span className="text-[13px] font-bold text-white">
                  {userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                </span>
              )}
            </div>

            {!isCollapsed && (
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {userData.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate capitalize">
                  {userRole || 'Member'}
                </p>
              </div>
            )}
          </button>
        </div>

        <div
          className="absolute top-0 right-0 w-1 h-full cursor-ew-resize group hidden md:block"
          onMouseDown={handleDragStart}
        >
          <div className="absolute inset-y-0 -right-0.5 w-2 flex items-center justify-center">
            <div className="w-0.5 h-10 bg-gray-300 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <ProfileDrawer
        isOpen={profileDrawerOpen}
        onClose={() => setProfileDrawerOpen(false)}
        userData={userData}
        userRole={userRole}
        onLogout={handleLogout}
      />
    </>
  )
}
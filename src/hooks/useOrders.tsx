import { useState, useMemo } from 'react'

type OrderStatus = 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected'

interface Order {
  id: string
  user: {
    name: string
    avatar: string
  }
  project: string
  address: string
  date: string
  status: OrderStatus
}

export const useOrders = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOrders, setSelectedOrders] = useState<Set<string>>(new Set())
  const [showFilters, setShowFilters] = useState(false)

  const orders = generateOrders()
  const itemsPerPage = 10

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch = order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.id.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus
      
      return matchesSearch && matchesStatus
    })
  }, [orders, searchTerm, selectedStatus])

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage)

  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders(prev => {
      const newSelected = new Set(prev)
      if (newSelected.has(orderId)) {
        newSelected.delete(orderId)
      } else {
        newSelected.add(orderId)
      }
      return newSelected
    })
  }

  const toggleAllOrders = () => {
    if (selectedOrders.size === paginatedOrders.length) {
      setSelectedOrders(new Set())
    } else {
      const newSelected = new Set(paginatedOrders.map(order => order.id))
      setSelectedOrders(newSelected)
    }
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    currentPage,
    setCurrentPage,
    selectedOrders,
    showFilters,
    setShowFilters,
    filteredOrders,
    totalPages,
    paginatedOrders,
    toggleOrderSelection,
    toggleAllOrders,
    itemsPerPage
  }
}

const generateOrders = (): Order[] => {
  const names = [
    'Natali Craig', 'Kate Morrison', 'Drew Cano', 'Orlando Diggs', 'Andi Lane',
    'John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emily Davis', 'David Brown',
    'Lisa Garcia', 'James Miller', 'Maria Rodriguez', 'Robert Jones', 'Jennifer Taylor',
    'Michael Anderson', 'Jessica Thomas', 'Christopher Jackson', 'Amanda White', 'Daniel Harris',
    'Ashley Martin', 'Joshua Thompson', 'Samantha Garcia', 'Andrew Martinez', 'Nicole Robinson',
    'Ryan Clark', 'Stephanie Rodriguez', 'Brandon Lewis', 'Rachel Lee', 'Justin Walker',
    'Melissa Hall', 'Kevin Allen', 'Kimberly Young', 'Eric King', 'Laura Wright',
    'Jason Lopez', 'Amy Hill', 'Mark Scott', 'Michelle Green', 'Steven Adams'
  ]
  
  const projects = [
    'Landing Page', 'CRM Admin pages', 'Client Project', 'Admin Dashboard', 'App Landing Page',
    'E-commerce Site', 'Portfolio Website', 'Mobile App UI', 'Blog Platform', 'Social Media App',
    'Marketing Website', 'SaaS Dashboard', 'Corporate Site', 'News Portal', 'Travel App',
    'Food Delivery App', 'Educational Platform', 'Healthcare Portal', 'Finance Dashboard', 'Real Estate Site'
  ]
  
  const addresses = [
    'Meadow Lane Oakland', 'Larry San Francisco', 'Bagwell Avenue Ocala', 'Washburn Baton Rouge',
    'Nest Lane Olivette', 'Madison Street Seattle', 'Oak Avenue Portland', 'Pine Road Denver',
    'Elm Street Boston', 'Maple Drive Chicago', 'Cedar Lane Miami', 'Birch Road Austin',
    'Willow Street Phoenix', 'Cherry Avenue Nashville', 'Ash Lane Atlanta', 'Poplar Drive Dallas'
  ]
  
  const statuses: OrderStatus[] = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected']
  const timeOptions = ['Just now', 'A minute ago', '1 hour ago', 'Yesterday', 'Feb 2, 2023', '2 days ago', '1 week ago']

  return Array.from({ length: 40 }, (_, i) => ({
    id: `CM${(9801 + i).toString()}`,
    user: {
      name: names[i % names.length],
      avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?w=32&h=32&fit=crop&crop=face`
    },
    project: projects[i % projects.length],
    address: addresses[i % addresses.length],
    date: timeOptions[i % timeOptions.length],
    status: statuses[i % statuses.length]
  }))
}

type OrderStatus = 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected'

export const names = [
  'Natali Craig', 'Kate Morrison', 'Drew Cano', 'Orlando Diggs', 'Andi Lane',
  'John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emily Davis', 'David Brown',
  'Lisa Garcia', 'James Miller', 'Maria Rodriguez', 'Robert Jones', 'Jennifer Taylor',
  'Michael Anderson', 'Jessica Thomas', 'Christopher Jackson', 'Amanda White', 'Daniel Harris',
  'Ashley Martin', 'Joshua Thompson', 'Samantha Garcia', 'Andrew Martinez', 'Nicole Robinson',
  'Ryan Clark', 'Stephanie Rodriguez', 'Brandon Lewis', 'Rachel Lee', 'Justin Walker',
  'Melissa Hall', 'Kevin Allen', 'Kimberly Young', 'Eric King', 'Laura Wright',
  'Jason Lopez', 'Amy Hill', 'Mark Scott', 'Michelle Green', 'Steven Adams'
]

export const projects = [
  'Landing Page', 'CRM Admin pages', 'Client Project', 'Admin Dashboard', 'App Landing Page',
  'E-commerce Site', 'Portfolio Website', 'Mobile App UI', 'Blog Platform', 'Social Media App',
  'Marketing Website', 'SaaS Dashboard', 'Corporate Site', 'News Portal', 'Travel App',
  'Food Delivery App', 'Educational Platform', 'Healthcare Portal', 'Finance Dashboard', 'Real Estate Site'
]

export const addresses = [
  'Meadow Lane Oakland', 'Larry San Francisco', 'Bagwell Avenue Ocala', 'Washburn Baton Rouge',
  'Nest Lane Olivette', 'Madison Street Seattle', 'Oak Avenue Portland', 'Pine Road Denver',
  'Elm Street Boston', 'Maple Drive Chicago', 'Cedar Lane Miami', 'Birch Road Austin',
  'Willow Street Phoenix', 'Cherry Avenue Nashville', 'Ash Lane Atlanta', 'Poplar Drive Dallas'
]

export const generateOrders = () => {
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

export const getStatusDot = (status: OrderStatus) => {
  const colors = {
    'In Progress': 'bg-[#8A8CD9]',
    'Complete': 'bg-[#4AA785]',
    'Pending': 'bg-[#59A8D4]',
    'Approved': 'bg-[#FFC555]',
    'Rejected': 'bg-[#1C1C1C66]'
  }
  return colors[status]
}
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

import { Orders } from '@/pages/orders/Orders'
import { Dashboard } from './pages/dashboard/Dashboard'
import { LayoutProvider } from './context/LayoutProvider'
import { useLayout } from './hooks/useLayout'



function App() {
  return (
    <LayoutProvider>
      <Router>
        <AppContent />
      </Router>
    </LayoutProvider>
  )
}

function AppContent() {
  const { isDarkMode } = useLayout();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { motion } from 'framer-motion'
import {  ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { cn } from '@/utils/cn'

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
    period: string
  }
  icon: React.ComponentType<{ className?: string }>
  color?: 'primary' | 'success' | 'warning' | 'error'
  loading?: boolean
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color = 'primary',
  loading = false,
}) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-600',
    error: 'bg-error-50 text-error-600',
  }

  const changeColorClasses = {
    increase: 'text-success-600',
    decrease: 'text-error-600',
  }

  const ChangeIcon = change?.type === 'increase' ? ArrowUpRight : ArrowDownRight

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-secondary-600 mb-1">
                {title}
              </p>
              
              <motion.div
                className="text-2xl font-bold text-secondary-900 mb-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {loading ? (
                  <div className="h-8 w-20 bg-secondary-200 rounded animate-pulse" />
                ) : (
                  value
                )}
              </motion.div>

              {change && !loading && (
                <motion.div
                  className={cn(
                    'flex items-center space-x-1 text-sm font-medium',
                    changeColorClasses[change.type]
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <ChangeIcon className="h-4 w-4" />
                  <span>{Math.abs(change.value)}%</span>
                  <span className="text-secondary-500">vs {change.period}</span>
                </motion.div>
              )}
            </div>

            <motion.div
              className={cn(
                'h-12 w-12 rounded-lg flex items-center justify-center',
                colorClasses[color]
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

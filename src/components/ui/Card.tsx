import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { BaseComponentProps } from '@/types'

interface CardProps extends BaseComponentProps {
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}


export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  clickable = false,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'card',
        hover && 'hover:shadow-medium transition-shadow duration-200',
        clickable && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface CardHeaderProps extends BaseComponentProps {}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('card-header', className)} {...props}>
      {children}
    </div>
  )
}

interface CardContentProps extends BaseComponentProps {}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('card-content', className)} {...props}>
      {children}
    </div>
  )
}

interface CardFooterProps extends BaseComponentProps {}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('card-footer', className)} {...props}>
      {children}
    </div>
  )
}

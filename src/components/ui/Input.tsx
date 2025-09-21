import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { InputProps } from '@/types'


export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      required = false,
      error,
      label,
      helperText,
      prefix,
      suffix,
      className,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      onFocus?.()
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      onBlur?.()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-secondary-700">
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        <motion.div
          className={cn(
            'relative flex items-center',
            focused && 'ring-2 ring-primary-500 ring-offset-2 rounded-lg'
          )}
          animate={{ scale: focused ? 1.01 : 1 }}
          transition={{ duration: 0.1 }}
        >
          {prefix && (
            <div className="absolute left-3 text-secondary-500 pointer-events-none">
              {prefix}
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            className={cn(
              'input',
              prefix && 'pl-10',
              suffix && 'pr-10',
              error && 'input-error',
              className
            )}
            {...props}
          />
          
          {suffix && (
            <div className="absolute right-3 text-secondary-500 pointer-events-none">
              {suffix}
            </div>
          )}
        </motion.div>
        
        {(error || helperText) && (
          <motion.p
            className={cn(
              'text-sm',
              error ? 'text-error-600' : 'text-secondary-500'
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Handles conditional classes and removes duplicates
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to create responsive class strings
 */
export function responsive(classes: {
  base?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
}) {
  const { base, sm, md, lg, xl, '2xl': xl2 } = classes
  return cn(base, sm && `sm:${sm}`, md && `md:${md}`, lg && `lg:${lg}`, xl && `xl:${xl}`, xl2 && `2xl:${xl2}`)
}

/**
 * Utility function to create conditional classes
 */
export function conditional(condition: boolean, trueClass: string, falseClass?: string) {
  return condition ? trueClass : falseClass || ''
}


import React from 'react';
import { useLayout } from '@/hooks/useLayout';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  height?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max = 100, 
  className = "",
  height = "h-6"
}) => {
  const { isDarkMode } = useLayout();
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`w-full ${height} rounded-full overflow-hidden ${className}`}
         style={{ backgroundColor: isDarkMode ? '#40404080' : '#A8C5DA80' }}>
      <div 
        className={`${height} rounded-full transition-all duration-300 ease-out`}
        style={{ 
          width: `${percentage}%`,
          backgroundColor: isDarkMode ? '#60A5FA' : '#A8C5DA'
        }}
      />
    </div>
  );
};
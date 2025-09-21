import { MetricCardProps } from "@/types";
import { motion } from 'framer-motion';
import { TrendingUp } from "lucide-react";
import { useLayout } from "@/hooks/useLayout";
export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, className}) => {
  const { isDarkMode } = useLayout();
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-6 rounded-2xl shadow-sm gap-2 flex-col items-center   ${className}  `}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{title}</p>
       
      </div>
     
    </div>
    <div className="flex justify-between w-full  items-center mt-2 gap-x-[28px]">
       <p className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{value}</p>
      <div className="flex ">
        <span className={`text-sm font-medium text-primary-black`}>
        {change}
      </span>
      <TrendingUp
        className={`w-4 h-4 ml-1 text-primary-black ${isPositive ? '' : 'rotate-180'}`}
      /></div>
    </div>
  </motion.div>
  );
};
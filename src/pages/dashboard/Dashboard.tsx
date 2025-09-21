import React from "react";
import { motion } from "framer-motion";
import { useLayout } from "@/hooks/useLayout";

import { CardsAndChart } from "./components/CardsAndChart";
import { LineChartAndRevenueMap } from "./components/LineChartAndRevenueMap";
import { SellingDetails } from "./components/SellingDetails";



export const Dashboard: React.FC = () => {
  const { isDarkMode } = useLayout();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={`text-xs font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>eCommerce</h1>
      <CardsAndChart/>
      <LineChartAndRevenueMap/>
      <SellingDetails/>
    </motion.div>
  );
};

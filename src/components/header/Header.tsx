import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLayout } from "@/hooks/useLayout";
import { SearchBar } from "../ui/SearchInput";

export const Header: React.FC = () => {
  const { isNotificationsOpen, setIsNotificationsOpen, setIsSidebarOpen, isDarkMode, setIsDarkMode } =
    useLayout();
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${isDarkMode ? 'bg-[#1C1C1C] border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        </button>
        {/* Page breadcrumbs */}
        <img
          src="/images/header.svg"
          height={28}
          width={28}
          className="h-7 w-7"
        />
        <img
          src="/images/star.svg"
          height={28}
          width={28}
          className="h-7 w-7 hidden md:block"
        />
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {isDashboard ? "Default" : "Orders"}
        </span>
        /
        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          {isDashboard ? "Dashboards" : "Management"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <img
          src="/images/mode.svg"
          height={28}
          width={28}
          className="h-7 w-7 hover:cursor-pointer"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
        <img
          src="/images/refresh.svg"
          height={28}
          width={28}
          className="h-7 w-7 hover:cursor-pointer hidden md:block"
        />

        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className={`relative ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} rounded-lg`}
          aria-expanded={isNotificationsOpen}
          aria-label="Toggle notifications"
        >
          <img
            src="/images/notification.svg"
            height={28}
            width={28}
            className="h-7 w-7 hover:cursor-pointer"
          />
        </button>

        <img
          src="/images/header.svg"
          height={28}
          width={28}
          className="h-7 w-7  hidden md:block hover:cursor-pointer"
        />
      </div>
    </motion.header>
  );
};

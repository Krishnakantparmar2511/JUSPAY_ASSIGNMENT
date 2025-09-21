import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Notifications } from "../notification/Notifications";
import { SideBar } from "../sidebar/SideBar";

import { useLayout } from "@/hooks/useLayout";
import { Header } from "../header/Header";


export const Layout: React.FC = () => {
  const { isNotificationsOpen, setIsNotificationsOpen, isDarkMode } = useLayout();

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white'}`}>
      <SideBar />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen transition-all duration-300">
        <Header />

        <div className="flex relative">
          <main className={`flex-1 p-6 ${isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white'}`}>
            <Outlet />
          </main>
          <Notifications />
        </div>
      </div>

      <AnimatePresence>
        {isNotificationsOpen && (
          <motion.div
            role="button"
            aria-label="Close notifications"
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsNotificationsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

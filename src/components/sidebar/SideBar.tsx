import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ShoppingCart,
  User,
  Monitor,
  BookOpen,
  Building,
  Globe,
  X,
} from "lucide-react";

import { NavLink } from "../menus/NavLink";
import { DropdownNavItem } from "../menus/DropdownNavItem";
import { useLayout } from "@/hooks/useLayout";

export const SideBar: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen, isDarkMode } = useLayout();

  return (
    <>
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className={`hidden md:flex fixed left-0 top-0 h-full w-64 ${isDarkMode ? 'bg-[#1C1C1C] border-gray-700' : 'bg-white border-gray-200'} border-r z-30`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <img
              src="/images/user_icon.svg"
              height={24}
              width={24}
              alt="user"
            />
            <span className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>ByeWind</span>
          </div>

          <div className="space-y-6 w-52">
            <div>
           <div className="flex items-center gap-2 text-sm mb-3">
  <span className={`${
    isDarkMode ? 'text-gray-300' : 'text-[#1C1C1C66]'
  }`}>
    Favorites
  </span>
  <span className={`ml-auto ${
    isDarkMode ? 'text-gray-500' : 'text-[#1C1C1C33]'
  }`}>
    Recently
  </span>
</div>


             <a
  href="#"
  className={`items-center gap-x-2 flex rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
    isDarkMode 
      ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
      : 'text-[#1C1C1C] hover:bg-gray-100 hover:text-gray-900'
  }`}
>
  <div className={`w-[6px] h-[6px] rounded-full ${
    isDarkMode ? 'bg-gray-500' : 'bg-[#1C1C1C33]'
  }`}></div>
  <span>Overview</span>
</a>

<a
  href="#"
  className={`items-center gap-x-2 flex rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
    isDarkMode 
      ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
      : 'text-[#1C1C1C] hover:bg-gray-100 hover:text-gray-900'
  }`}
>
  <div className={`w-[6px] h-[6px] rounded-full ${
    isDarkMode ? 'bg-gray-500' : 'bg-[#1C1C1C33]'
  }`}></div>
  <span>Projects</span>
</a>
            </div>
            <nav className="space-y-1"></nav>
            {/* Dashboards */}
            <div>
              <div className="text-sm text-gray-500 mb-3">Dashboards</div>
              <nav className="space-y-1">
                <NavLink
                  to="/dashboard"
                  icon={"/images/default.svg"}
                  label="Default"
                />
                <NavLink
                  to="/orders"
                  icon={"/images/ecommerce.svg"}
                  label="Orders"
                />
                <NavLink
                  to="#"
                  icon={"/images/projects.svg"}
                  label="Projects"
                />
                <NavLink
                  to="#"
                  icon={"/images/onlinecourse.svg"}
                  label="  Online Courses"
                />
              </nav>
            </div>

            {/* Pages */}
            <div>
              <div className="text-sm text-gray-500 mb-3">Pages</div>
              <nav className="space-y-1">
                <DropdownNavItem
                  icon="/images/userprofile.svg"
                  label="User Profile"
                  defaultOpen={true}
                  activeChild={null}
                >
                  <NavLink to="#" showArrow={false} label="Overview" />
                  <NavLink to="#" showArrow={false} label="Projects" />
                  <NavLink to="#" showArrow={false} label="Campaigns" />
                  <NavLink to="#" showArrow={false} label="Documents" />
                  <NavLink to="#    " showArrow={false} label="Followers" />
                </DropdownNavItem>
                 <NavLink
                  to="#"
                  icon={"/images/account.svg"}
                  label="Account"
                />
                 <NavLink
                  to="#"
                  icon={"/images/corporate.svg"}
                  label="Corporate"
                />
                 <NavLink
                  to="#"
                  icon={"/images/blog.svg"}
                  label="Blog"
                />
                 <NavLink
                  to="#"
                  icon={"/images/social.svg"}
                  label="Social"
                />
              </nav>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
    {/* Mobile Sidebar */}
<AnimatePresence>
  {isSidebarOpen && (
    <>
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        exit={{ x: -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-40 md:hidden overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/user_icon.svg"
                height={24}
                width={24}
                alt="user"
              />
              <span className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>ByeWind</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-6 w-52">
            {/* Favorites Section */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span className="text-[#1C1C1C66]">Favorites</span>
                <span className="ml-auto text-[#1C1C1C33]">Recently</span>
              </div>
              <a
                href="#"
                className="items-center gap-x-2 flex rounded-lg px-3 py-2 text-sm text-[#1C1C1C] hover:bg-gray-100"
              >
                <div className="w-[6px] h-[6px] bg-[#1C1C1C33] rounded-full"></div>
                <span>Overview</span>
              </a>
              <a
                href="#"
                className="items-center gap-x-2 flex rounded-lg px-3 py-2 text-sm text-[#1C1C1C] hover:bg-gray-100"
              >
                <div className="w-[6px] h-[6px] bg-[#1C1C1C33] rounded-full"></div>
                <span>Projects</span>
              </a>
            </div>

            {/* Dashboards */}
            <div>
              <div className="text-sm text-gray-500 mb-3">Dashboards</div>
              <nav className="space-y-1">
                <NavLink
                  to="/dashboard"
                  icon={"/images/default.svg"}
                  label="Default"
                />
                <NavLink
                  to="/orders"
                  icon={"/images/ecommerce.svg"}
                  label="Orders"
                />
                <NavLink
                  to="#"
                  icon={"/images/projects.svg"}
                  label="Projects"
                />
                <NavLink
                  to="#"
                  icon={"/images/onlinecourse.svg"}
                  label="Online Courses"
                />
              </nav>
            </div>

            {/* Pages */}
            <div>
              <div className="text-sm text-gray-500 mb-3">Pages</div>
              <nav className="space-y-1">
                <DropdownNavItem
                  icon="/images/userprofile.svg"
                  label="User Profile"
                  defaultOpen={false}
                  activeChild={null}
                >
                  <NavLink to="#" showArrow={false} label="Overview" />
                  <NavLink to="#" showArrow={false} label="Projects" />
                  <NavLink to="#" showArrow={false} label="Campaigns" />
                  <NavLink to="#" showArrow={false} label="Documents" />
                  <NavLink to="#" showArrow={false} label="Followers" />
                </DropdownNavItem>
                <NavLink
                  to="#"
                  icon={"/images/account.svg"}
                  label="Account"
                />
                <NavLink
                  to="#"
                  icon={"/images/corporate.svg"}
                  label="Corporate"
                />
                <NavLink
                  to="#"
                  icon={"/images/blog.svg"}
                  label="Blog"
                />
                <NavLink
                  to="#"
                  icon={"/images/social.svg"}
                  label="Social"
                />
              </nav>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-30 md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    </>
  )}
</AnimatePresence>
    </>
  );
};

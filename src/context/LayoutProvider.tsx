import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <LayoutContext.Provider
      value={{ 
        isSidebarOpen, 
        setIsSidebarOpen, 
        isNotificationsOpen, 
        setIsNotificationsOpen,
        isDarkMode,
        setIsDarkMode
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

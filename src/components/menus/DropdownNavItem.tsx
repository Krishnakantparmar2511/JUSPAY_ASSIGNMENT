import { useState } from "react";
import { useLayout } from "@/hooks/useLayout";

export const DropdownNavItem = ({
  icon,
  label,
  children,
  defaultOpen = false,
  activeChild = null,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  activeChild?: string | null;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { isDarkMode } = useLayout();

  const hasActiveChild = activeChild !== null;

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg relative transition-colors w-full text-left ${
          hasActiveChild
            ? isDarkMode 
              ? "bg-gray-700 text-gray-100" 
              : "bg-gray-100 text-gray-900"
            : isDarkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {hasActiveChild && (
          <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full`}></div>
        )}
        <div className="w-4 flex justify-center items-center flex-shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          >
            <path 
              d="M6 4L10 8L6 12" 
              stroke={hasActiveChild ? (isDarkMode ? "#F3F4F6" : "#111827") : (isDarkMode ? "#D1D5DB" : "#9CA3AF")} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {icon ?   <img className="w-5 h-5" src={icon} height={20} width={20} />:<div className="w-5 h-5"></div>}
        {label}
      </button>
      
      {isOpen && (
        <div className="mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};
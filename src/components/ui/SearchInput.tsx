import React from "react";
import { Search } from "lucide-react";
import { useLayout } from "@/hooks/useLayout";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
  width?: string;
  showShortcut?: boolean;
  shortcutText?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  onSubmit,
  icon,
  className = "",
  width = "w-40",
  showShortcut = true,
  shortcutText = "⌘"
}) => {
  const { isDarkMode } = useLayout();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit?.(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative hidden md:block ${width} ${className}`}>
      <div className="relative">

        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon || (
            <Search className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          )}
        </div>
        
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`w-full pl-10 pr-8 py-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 transition-colors duration-200 ${
            isDarkMode 
              ? 'text-gray-100 placeholder-gray-500 bg-gray-800 border-gray-600 focus:ring-gray-500 focus:border-gray-500 focus:bg-gray-700' 
              : 'text-gray-900 placeholder-gray-400 bg-gray-50 border-gray-200 focus:ring-gray-300 focus:border-gray-300 focus:bg-white'
          }`}
        />
        

        {showShortcut && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} rounded px-1.5 py-0.5 font-mono`}>
              {shortcutText}
            </span>
          </div>
        )}
      </div>
    </form>
  );
};
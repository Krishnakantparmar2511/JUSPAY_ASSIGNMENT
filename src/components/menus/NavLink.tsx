import { Link, useLocation } from "react-router-dom";
import { useLayout } from "@/hooks/useLayout";

export const NavLink = ({
  to,
  icon,
  label,showArrow=true
}: {
  to: string;
  icon?:string;
  label: string;
  showArrow?: boolean;
}) => {
  const location = useLocation();
  const { isDarkMode } = useLayout();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg relative transition-colors ${
        isActive
          ? isDarkMode 
            ? "bg-gray-700 text-gray-100" 
            : "bg-gray-100 text-gray-900"
          : isDarkMode
            ? "text-gray-300 hover:bg-gray-700"
            : "text-gray-700 hover:bg-gray-100"
      }`}
    >
         {isActive && (
        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full`}></div>
      )}

      <div className="w-4 flex justify-center items-center flex-shrink-0">
        {isActive ? (
          <div></div>
        ) : (
          showArrow && <img src="/images/right_arrow.svg" height={16} width={16} alt="arrow" />
        )}
      </div>
    {icon ?   <img className="w-5 h-5" src={icon} height={20} width={20} />:<div className="w-5 h-5"></div>}
      {label}
    </Link>
  );
};
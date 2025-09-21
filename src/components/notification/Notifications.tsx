
import { useLayout } from "@/hooks/useLayout";
import { motion } from "framer-motion";
import { X, Bug, User, Users } from "lucide-react";
import { activitiesData, contactsData, notificationsData } from "./mockData";



export const Notifications: React.FC = () => {
  const { isNotificationsOpen, setIsNotificationsOpen, isDarkMode } = useLayout();

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: isNotificationsOpen ? 0 : 400 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed right-0 top-0 h-full w-80 ${isDarkMode ? 'bg-[#1C1C1C] border-gray-700' : 'bg-white border-gray-200'} border-l z-40 overflow-y-auto`}
      aria-hidden={!isNotificationsOpen}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Notifications</h2>
          <button
            onClick={() => setIsNotificationsOpen(false)}
            className={`p-1 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded`}
            aria-label="Close notifications"
          >
            <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Notifications Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Notifications</h3>
          <div className="space-y-3">
            {notificationsData.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Activities</h3>
          <div className="space-y-3">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
              >
                <img
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">
                    {activity.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Contacts</h3>
          <div className="space-y-3">
            {contactsData.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                {contact.avatar ? (
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                ) : (
                  <div
                    className={`w-8 h-8 ${contact.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-xs font-medium text-white">
                      {contact.initials}
                    </span>
                  </div>
                )}
                <span className="text-sm text-gray-900">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

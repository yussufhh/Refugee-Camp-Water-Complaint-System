
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  LogOut,
  ChevronLeft,
  Menu,
  X,
  Shield,
  Database,
  Calendar,
  HelpCircle,
  Archive
} from 'lucide-react';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Admin navigation items
  const adminNavItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      notification: 0
    },
    {
      id: 'users',
      label: 'User Management',
      icon: Users,
      notification: 3
    },
    {
      id: 'complaints',
      label: 'Complaints',
      icon: FileText,
      notification: 12
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      notification: 0
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: Database,
      notification: 0
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: Calendar,
      notification: 2
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: MessageSquare,
      notification: 5
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      notification: 7
    }
  ];

  // Admin settings items
  const adminSettingsItems = [
    {
      id: 'settings',
      label: 'System Settings',
      icon: Settings,
      notification: 0
    },
    {
      id: 'admin',
      label: 'Admin Controls',
      icon: Shield,
      notification: 0
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle,
      notification: 0
    },
    {
      id: 'archive',
      label: 'Archive',
      icon: Archive,
      notification: 0
    }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (isMobile) {
      toggleSidebar();
    }
  };

  // Animation variants
  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: { 
      x: -320,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const itemVariants = {
    open: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    closed: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : "closed"}
        className="fixed lg:relative h-screen w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-3"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="font-bold text-blue-900 dark:text-white">Admin Portal</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Water Complaint System</p>
            </div>
          </motion.div>
          
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Admin Profile */}
        <motion.div 
          variants={itemVariants}
          className="p-4 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                alt="Admin Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Admin User</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">System Administrator</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Main Navigation
            </h3>
            <ul className="space-y-1">
              {adminNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeItem === item.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </div>
                      {item.notification > 0 && (
                        <span className="bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                          {item.notification}
                        </span>
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              System
            </h3>
            <ul className="space-y-1">
              {adminSettingsItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeItem === item.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </div>
                      {item.notification > 0 && (
                        <span className="bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                          {item.notification}
                        </span>
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="p-4 border-t border-gray-200 dark:border-gray-700"
        >
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile toggle button - only shows when sidebar is closed on mobile */}
      {!isOpen && isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleSidebar}
          className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-40 lg:hidden"
        >
          <Menu size={24} />
        </motion.button>
      )}
    </>
  );
};

// Main Admin Layout component that uses the sidebar
const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Admin header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white mr-4 lg:hidden"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                  alt="Admin Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
export { AdminSidebar };
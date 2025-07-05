import { createContext, useState, useContext, useEffect } from 'react';
import { setupNotificationPolling } from '../utils/notificationUtils';

// Create the context
const NotificationContext = createContext();

// Custom hook to use the notification context
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

// Provider component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);

  // Check for unread notifications whenever the notifications array changes
  useEffect(() => {
    const unreadExists = notifications.some(notification => !notification.read);
    setHasUnreadNotifications(unreadExists);
  }, [notifications]);

  // Load initial notifications
  useEffect(() => {
    // In a real app, you would fetch these from an API
    const sampleNotifications = [
      {
        id: 1,
        type: 'tutorial',
        title: 'New JavaScript Tutorial',
        message: 'Learn about ES2023 features in our latest tutorial',
        date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        read: false,
        link: '/tutorials/javascript'
      },
      {
        id: 2,
        type: 'course',
        title: 'React Advanced Course',
        message: 'New module on React Server Components is now available',
        date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        read: false,
        link: '/courses'
      },
      {
        id: 3,
        type: 'note',
        title: 'CSS Grid Cheatsheet',
        message: 'Download our new CSS Grid reference guide',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        read: false,
        link: '/notes'
      }
    ];
    
    setNotifications(sampleNotifications);
  }, []);

  // Add a new notification
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(), // Simple ID generation
      date: new Date(),
      read: false,
      ...notification
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };

  // Set up notification polling
  useEffect(() => {
    // In a real app, this would connect to a real-time notification system
    // For demo purposes, we're polling every minute with a 20% chance of a new notification
    const cleanup = setupNotificationPolling(addNotification, 1);
    
    return cleanup;
  }, []);

  // Mark a specific notification as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Value object to be provided to consumers
  const value = {
    notifications,
    hasUnreadNotifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAllNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext; 
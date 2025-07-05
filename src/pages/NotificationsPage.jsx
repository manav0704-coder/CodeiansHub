import { useState } from 'react';
import { BookOpen, Book, FileText, Bell, Trash2, CheckCircle, RefreshCw } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import { simulateNotificationPush } from '../utils/notificationUtils';

const NotificationsPage = () => {
  const { 
    notifications, 
    markAllAsRead, 
    clearAllNotifications, 
    markAsRead,
    removeNotification,
    addNotification
  } = useNotifications();
  
  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'tutorial':
        return <BookOpen className="h-5 w-5 text-secondary-500" />;
      case 'course':
        return <Book className="h-5 w-5 text-blue-500" />;
      case 'note':
        return <FileText className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    
    return Math.floor(seconds) + " seconds ago";
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
      ? notifications.filter(n => !n.read)
      : notifications.filter(n => n.type === filter);

  const handleGenerateNotification = () => {
    simulateNotificationPush(addNotification);
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
            Notifications
          </h1>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={markAllAsRead}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-secondary-600 bg-secondary-50 hover:bg-secondary-100 dark:bg-gray-700 dark:text-secondary-400 dark:hover:bg-gray-600"
            >
              <CheckCircle className="h-4 w-4 mr-1.5" />
              Mark all as read
            </button>
            <button 
              onClick={clearAllNotifications}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100 dark:bg-gray-700 dark:text-red-400 dark:hover:bg-gray-600"
            >
              <Trash2 className="h-4 w-4 mr-1.5" />
              Clear all
            </button>
            <button 
              onClick={handleGenerateNotification}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
            >
              <RefreshCw className="h-4 w-4 mr-1.5" />
              Generate notification
            </button>
          </div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium ${filter === 'all' 
              ? 'text-secondary-600 border-b-2 border-secondary-600 dark:text-secondary-400 dark:border-secondary-400' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 text-sm font-medium ${filter === 'unread' 
              ? 'text-secondary-600 border-b-2 border-secondary-600 dark:text-secondary-400 dark:border-secondary-400' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            Unread
          </button>
          <button 
            onClick={() => setFilter('tutorial')}
            className={`px-4 py-2 text-sm font-medium ${filter === 'tutorial' 
              ? 'text-secondary-600 border-b-2 border-secondary-600 dark:text-secondary-400 dark:border-secondary-400' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            Tutorials
          </button>
          <button 
            onClick={() => setFilter('course')}
            className={`px-4 py-2 text-sm font-medium ${filter === 'course' 
              ? 'text-secondary-600 border-b-2 border-secondary-600 dark:text-secondary-400 dark:border-secondary-400' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            Courses
          </button>
          <button 
            onClick={() => setFilter('note')}
            className={`px-4 py-2 text-sm font-medium ${filter === 'note' 
              ? 'text-secondary-600 border-b-2 border-secondary-600 dark:text-secondary-400 dark:border-secondary-400' 
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            Notes
          </button>
        </div>
        
        {/* Notifications list */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 border-b border-gray-200 dark:border-gray-700 last:border-0 ${!notification.read ? 'bg-secondary-50 dark:bg-gray-700/50' : ''}`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {notification.title}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {getTimeAgo(notification.date)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {notification.message}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      {!notification.read && (
                        <button 
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                        >
                          Mark as read
                        </button>
                      )}
                      <button 
                        onClick={() => removeNotification(notification.id)}
                        className="text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No notifications</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {filter === 'all' 
                  ? "You don't have any notifications yet." 
                  : `You don't have any ${filter === 'unread' ? 'unread' : filter} notifications.`}
              </p>
              {filter !== 'all' && (
                <button 
                  onClick={() => setFilter('all')}
                  className="mt-4 text-sm text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                >
                  View all notifications
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage; 
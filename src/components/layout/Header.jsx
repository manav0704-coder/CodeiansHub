import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Code, 
  BookOpen, 
  Book, 
  FileText, 
  MessageSquare, 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Clock, 
  Filter 
} from 'lucide-react';
import { useNotifications } from '../../context/NotificationContext';
import { Button } from '../../components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchCategory, setActiveSearchCategory] = useState('all');
  const [recentSearches, setRecentSearches] = useState(['React Hooks', 'CSS Grid', 'JavaScript Arrays']);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const notificationRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  
  // Use the notification context
  const { 
    notifications, 
    hasUnreadNotifications, 
    markAsRead, 
    markAllAsRead 
  } = useNotifications();

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
    
    // Load recent searches from localStorage
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open search with Ctrl+K or CMD+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      
      // Close search with Escape
      if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);
  
  // Focus search input when search overlay opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setActiveSearchCategory('all');
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const saveRecentSearch = (query) => {
    if (query.trim() && !recentSearches.includes(query)) {
      const updatedSearches = [query, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    }
  };
  
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      navigate(`/tutorials?search=${encodeURIComponent(searchQuery)}&category=${activeSearchCategory}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };
  
  const handleQuickSearch = (query) => {
    saveRecentSearch(query);
    navigate(`/tutorials?search=${encodeURIComponent(query)}&category=${activeSearchCategory}`);
    setIsSearchOpen(false);
  };

  const handleNotificationClick = (notification) => {
    // Mark this notification as read
    markAsRead(notification.id);
    
    // Navigate to the relevant page
    navigate(notification.link);
    setIsNotificationsOpen(false);
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

  const navItems = [
    { name: 'Home', path: '/', icon: <Code size={18} /> },
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen size={18} /> },
    { name: 'Courses', path: '/courses', icon: <Book size={18} /> },
    { name: 'Notes', path: '/notes', icon: <FileText size={18} /> },
    { name: 'Contact', path: '/contact', icon: <MessageSquare size={18} /> },
  ];

  // Popular search categories
  const searchCategories = [
    { id: 'all', label: 'All', icon: <Star size={16} /> },
    { id: 'tutorials', label: 'Tutorials', icon: <BookOpen size={16} /> },
    { id: 'courses', label: 'Courses', icon: <Book size={16} /> },
    { id: 'notes', label: 'Notes', icon: <FileText size={16} /> }
  ];

  // Trending search terms
  const trendingSearches = [
    'JavaScript Basics', 'React Hooks', 'CSS Grid', 'Responsive Design', 'TypeScript'
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm dark:bg-gray-800/90 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center gap-2 font-bold">
            <Code className="h-7 w-7 text-secondary-600 dark:text-secondary-400" />
            <span className="text-xl gradient-text">CodeiansHub</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 font-medium transition-all duration-200 hover:text-secondary-600 dark:hover:text-secondary-400 relative py-1 ${
                      isActive ? 'text-secondary-600 dark:text-secondary-400' : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.icon}
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-600 dark:bg-secondary-400 rounded-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 relative group"
            aria-label="Search (Ctrl+K)"
          >
            <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-1 -right-1 text-xs bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              ⌘K
            </span>
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full notification-dot"></span>
              )}
            </button>
            
            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50 animate-fade-in-down">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <button 
                    onClick={markAllAsRead}
                    className="text-xs text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                  >
                    Mark all as read
                  </button>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.id}
                        className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${!notification.read ? 'bg-secondary-50 dark:bg-gray-700/50' : ''}`}
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3 mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              {getTimeAgo(notification.date)}
                            </p>
                          </div>
                          <div className="ml-2 flex-shrink-0 self-center">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                      <p>No notifications yet</p>
                    </div>
                  )}
                </div>
                
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => {
                      navigate('/notifications');
                      setIsNotificationsOpen(false);
                    }}
                    className="w-full text-center text-sm text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full notification-dot"></span>
              )}
            </button>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-start justify-center pt-16 px-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-slide-down">
              {/* Search Header */}
              <div className="relative">
                <form onSubmit={handleSearch} className="relative">
                  <div className={`flex items-center transition-all duration-300 ${searchFocused ? 'bg-secondary-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}`}>
                    <Search className="absolute left-4 top-5 h-6 w-6 text-gray-400" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search tutorials, courses, and more..."
                      className="w-full pl-14 pr-12 py-5 bg-transparent text-lg text-gray-900 dark:text-white focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                    {searchQuery && (
                      <button 
                        type="button"
                        className="absolute right-12 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        onClick={() => setSearchQuery('')}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                    <button 
                      type="button" 
                      className="absolute right-4 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      onClick={toggleSearch}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Search Categories */}
                  <div className="flex items-center space-x-2 px-4 py-3 border-t border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 overflow-x-auto scrollbar-hide">
                    {searchCategories.map(category => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveSearchCategory(category.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                          activeSearchCategory === category.id 
                            ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 shadow-sm' 
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category.icon}
                        {category.label}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
              
              {/* Search Content */}
              <div className="p-4 max-h-[calc(80vh-180px)] overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-4 w-4 text-secondary-500 mr-2" />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Trending Searches</h3>
                    </div>
                    <div className="space-y-2">
                      {trendingSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSearch(term)}
                          className="flex items-center w-full p-2 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <span className="w-6 h-6 flex items-center justify-center bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 rounded-full text-xs font-medium mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-800 dark:text-gray-200">{term}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Searches */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-secondary-500 mr-2" />
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Recent Searches</h3>
                      </div>
                      {recentSearches.length > 0 && (
                        <button 
                          onClick={clearRecentSearches}
                          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    
                    {recentSearches.length > 0 ? (
                      <div className="space-y-2">
                        {recentSearches.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickSearch(term)}
                            className="flex items-center w-full p-2 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <span className="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full mr-3">
                              <Clock className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">{term}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        No recent searches
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Search Tips */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                    <Star className="h-4 w-4 text-secondary-500 mr-2" />
                    Search Tips
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Use quotes for exact phrases: "JavaScript basics"</li>
                    <li>• Filter by type: tutorial:react, course:python</li>
                    <li>• Exclude words with minus: javascript -jquery</li>
                    <li>• Press ESC to close the search</li>
                  </ul>
                </div>
              </div>
              
              {/* Search Footer */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <Filter className="h-3.5 w-3.5 mr-1" />
                  <span>Filtering by: <span className="font-medium text-secondary-600 dark:text-secondary-400">{activeSearchCategory.charAt(0).toUpperCase() + activeSearchCategory.slice(1)}</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Press Enter to search</span>
                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={!searchQuery.trim()}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      searchQuery.trim() 
                        ? 'bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                    }`}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Notifications Dropdown - Positioned differently on mobile */}
        {isNotificationsOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm animate-fade-in-down border border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                <button 
                  onClick={() => setIsNotificationsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="max-h-[70vh] overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id}
                      className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${!notification.read ? 'bg-secondary-50 dark:bg-gray-700/50' : ''}`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {getTimeAgo(notification.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                    <p>No notifications yet</p>
                  </div>
                )}
              </div>
              
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <button 
                  onClick={markAllAsRead}
                  className="text-sm text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                >
                  Mark all as read
                </button>
                <button 
                  onClick={() => {
                    navigate('/notifications');
                    setIsNotificationsOpen(false);
                  }}
                  className="text-sm text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-300"
                >
                  View all
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-white/95 backdrop-blur-md pb-6 pt-2 shadow-lg md:hidden dark:bg-gray-800/95">
            <nav className="container">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2 font-medium transition-colors p-2 rounded-lg ${
                          isActive ? 'bg-secondary-50 text-secondary-600 dark:bg-gray-700 dark:text-secondary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={toggleDarkMode}
                    className="flex w-full items-center gap-2 p-2 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                  >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <Button
          to="/courses"
          className="hidden md:inline-flex bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-500 dark:hover:bg-secondary-600 shadow-sm border border-secondary-600 dark:border-secondary-500 font-medium font-semibold"
          size="md"
        >
          <ArrowRight className="mr-2 h-5 w-5" />
          Get Started Now
        </Button>
      </div>
    </header>
  );
};

export default Header; 
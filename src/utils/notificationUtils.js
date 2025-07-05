/**
 * Utility functions for handling content notifications
 */

/**
 * Creates a notification object for a new tutorial
 * @param {string} title - The title of the tutorial
 * @param {string} id - The tutorial ID
 * @returns {Object} - Notification object
 */
export const createTutorialNotification = (title, id) => {
  return {
    type: 'tutorial',
    title: `New Tutorial: ${title}`,
    message: `We've just published a new tutorial on ${title}. Check it out!`,
    link: `/tutorials/${id}`
  };
};

/**
 * Creates a notification object for a tutorial update
 * @param {string} title - The title of the tutorial
 * @param {string} id - The tutorial ID
 * @returns {Object} - Notification object
 */
export const createTutorialUpdateNotification = (title, id) => {
  return {
    type: 'tutorial',
    title: `Tutorial Updated: ${title}`,
    message: `We've updated our tutorial on ${title} with new content and examples.`,
    link: `/tutorials/${id}`
  };
};

/**
 * Creates a notification object for a new course
 * @param {string} title - The title of the course
 * @param {string} id - The course ID
 * @returns {Object} - Notification object
 */
export const createCourseNotification = (title, id) => {
  return {
    type: 'course',
    title: `New Course: ${title}`,
    message: `Our new course on ${title} is now available. Start learning today!`,
    link: `/courses/${id}`
  };
};

/**
 * Creates a notification object for a course update
 * @param {string} title - The title of the course
 * @param {string} id - The course ID
 * @returns {Object} - Notification object
 */
export const createCourseUpdateNotification = (title, id) => {
  return {
    type: 'course',
    title: `Course Updated: ${title}`,
    message: `We've added new modules to our ${title} course.`,
    link: `/courses/${id}`
  };
};

/**
 * Creates a notification object for a new note
 * @param {string} title - The title of the note
 * @returns {Object} - Notification object
 */
export const createNoteNotification = (title) => {
  return {
    type: 'note',
    title: `New Resource: ${title}`,
    message: `A new ${title} resource is now available in the notes section.`,
    link: '/notes'
  };
};

/**
 * Simulates receiving a push notification from a server
 * @param {Function} addNotification - The function to add a notification
 */
export const simulateNotificationPush = (addNotification) => {
  // Sample notifications that could be pushed from a server
  const possibleNotifications = [
    createTutorialNotification('Advanced TypeScript Patterns', 'typescript'),
    createCourseNotification('Full Stack Development with MERN', 'mern-stack'),
    createNoteNotification('CSS Grid Layout Cheatsheet'),
    createTutorialUpdateNotification('React Hooks', 'react'),
    createCourseUpdateNotification('JavaScript Fundamentals', 'javascript')
  ];
  
  // Randomly select a notification
  const randomIndex = Math.floor(Math.random() * possibleNotifications.length);
  const notification = possibleNotifications[randomIndex];
  
  // Add the notification
  addNotification(notification);
};

/**
 * Sets up a periodic check for new notifications
 * @param {Function} addNotification - The function to add a notification
 * @param {number} intervalMinutes - Minutes between checks
 * @returns {Function} - Function to clear the interval
 */
export const setupNotificationPolling = (addNotification, intervalMinutes = 5) => {
  // Convert minutes to milliseconds
  const interval = intervalMinutes * 60 * 1000;
  
  // Set up polling
  const intervalId = setInterval(() => {
    // Simulate a 20% chance of receiving a notification on each poll
    if (Math.random() < 0.2) {
      simulateNotificationPush(addNotification);
    }
  }, interval);
  
  // Return function to clear interval
  return () => clearInterval(intervalId);
};
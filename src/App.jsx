import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import TutorialDetailPage from './pages/TutorialDetailPage';
import CoursesPage from './pages/CoursesPage';
import NotesPage from './pages/NotesPage';
import ContactPage from './pages/ContactPage';
import NotificationsPage from './pages/NotificationsPage';
import { NotificationProvider } from './context/NotificationContext';

// Page transition component
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('page-transition-enter-active');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('page-transition-exit-active');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'page-transition-exit-active') {
      setTransitionStage('page-transition-enter');
      setDisplayLocation(location);
      
      // Scroll to top on page change
      window.scrollTo(0, 0);
      
      // Add the active class after a short delay
      setTimeout(() => {
        setTransitionStage('page-transition-enter-active');
      }, 10);
    }
  };

  return (
    <div
      className={transitionStage}
      onTransitionEnd={handleAnimationEnd}
      style={{ display: 'contents' }}
    >
      {children}
    </div>
  );
};

// App wrapper with transitions
const AppWrapper = () => {
  const location = useLocation();
  
  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="tutorials" element={
          <PageTransition>
            <TutorialsPage />
          </PageTransition>
        } />
        <Route path="tutorials/:tutorialId" element={
          <PageTransition>
            <TutorialDetailPage />
          </PageTransition>
        } />
        <Route path="tutorials/:tutorialId/:sectionId" element={
          <PageTransition>
            <TutorialDetailPage />
          </PageTransition>
        } />
        <Route path="tutorials/:tutorialId/:sectionId/:chapterId" element={
          <PageTransition>
            <TutorialDetailPage />
          </PageTransition>
        } />
        <Route path="courses" element={
          <PageTransition>
            <CoursesPage />
          </PageTransition>
        } />
        <Route path="notes" element={
          <PageTransition>
            <NotesPage />
          </PageTransition>
        } />
        <Route path="contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
        <Route path="notifications" element={
          <PageTransition>
            <NotificationsPage />
          </PageTransition>
        } />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <NotificationProvider>
        <AppWrapper />
      </NotificationProvider>
    </Router>
  );
}

export default App;

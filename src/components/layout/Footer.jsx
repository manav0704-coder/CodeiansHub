import { NavLink } from 'react-router-dom';
import { Code, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 font-bold text-secondary-600 dark:text-secondary-400">
              <Code className="h-6 w-6" />
              <span className="text-xl">CodeiansHub</span>
            </NavLink>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering students to master web development through modern, accessible education.
            </p>
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Created by Manav Pardeshi
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/tutorials" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Tutorials
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/notes" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Notes
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Free PDF Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-secondary-600 dark:text-gray-400 dark:hover:text-secondary-400">
                  Live Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-secondary-100 hover:text-secondary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-secondary-400"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-secondary-100 hover:text-secondary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-secondary-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-secondary-100 hover:text-secondary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-secondary-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manavpardeshi@codeianshub.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-secondary-100 hover:text-secondary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-secondary-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} CodeiansHub by Manav Pardeshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
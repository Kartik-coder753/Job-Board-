import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Menu, X, LogIn, UserRound } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient-x'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={closeMenu}
            >
              <BriefcaseBusiness
                className={`h-8 w-8 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}
              />
              <span
                className={`font-heading font-bold text-xl md:text-2xl tracking-tight ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}
              >
                WORKNEST
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              } ${location.pathname === '/' ? (isScrolled ? 'text-primary-600' : 'text-white') : ''}`}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              } ${location.pathname === '/jobs' ? (isScrolled ? 'text-primary-600' : 'text-white') : ''}`}
            >
              Find Jobs
            </Link>
            {currentUser?.userType === 'employer' && (
              <Link
                to="/employer/dashboard"
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                } ${location.pathname.includes('/employer') ? (isScrolled ? 'text-primary-600' : 'text-white') : ''}`}
              >
                Employer Dashboard
              </Link>
            )}
            {currentUser?.userType === 'admin' && (
              <Link
                to="/admin/dashboard"
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                } ${location.pathname.includes('/admin') ? (isScrolled ? 'text-primary-600' : 'text-white') : ''}`}
              >
                Admin Dashboard
              </Link>
            )}
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!currentUser ? (
              <>
                <Link
                  to="/login"
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isScrolled
                      ? 'text-primary-600 hover:bg-primary-50'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span>Log in</span>
                </Link>
                <Link
                  to="/register"
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isScrolled
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-white text-primary-600 hover:bg-white/90'
                  }`}
                >
                  <UserRound className="h-4 w-4 mr-2" />
                  <span>Register</span>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span
                  className={`font-medium ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Hi, {currentUser.name}
                </span>
                <button
                  onClick={logout}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isScrolled
                      ? 'border border-primary-600 text-primary-600 hover:bg-primary-50'
                      : 'border border-white text-white hover:bg-white/10'
                  }`}
                >
                  Log out
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/jobs'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
              onClick={closeMenu}
            >
              Find Jobs
            </Link>
            {currentUser?.userType === 'employer' && (
              <Link
                to="/employer/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname.includes('/employer')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
                onClick={closeMenu}
              >
                Employer Dashboard
              </Link>
            )}
            {currentUser?.userType === 'admin' && (
              <Link
                to="/admin/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname.includes('/admin')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
                onClick={closeMenu}
              >
                Admin Dashboard
              </Link>
            )}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            {!currentUser ? (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50"
                  onClick={closeMenu}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span>Log in</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                  onClick={closeMenu}
                >
                  <UserRound className="h-4 w-4 mr-2" />
                  <span>Register</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-700 font-medium">
                  Hi, {currentUser.name}
                </p>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
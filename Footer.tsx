import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness className="h-7 w-7 text-primary-400" />
              <span className="font-heading font-bold text-xl text-white">
                WORKNEST
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for finding the perfect job match or the ideal candidate.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/employer/post-job" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-300">
                  VIT Bhopal, Madhya Pradesh - 466144
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-300">+919502588216</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-300">kartikks1205@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Founder */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Founder</h3>
            <div className="text-gray-300">
              <p className="font-medium mb-2">Kartik Kumar Singh</p>
              <p className="text-sm mb-4">Age: 21<br/>Student at VIT BHOPAL</p>
              <div className="space-y-2">
                <a 
                  href="https://github.com/Kartik-coder753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://leetcode.com/u/Hn88yNlDmZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <span className="w-4 h-4 mr-2 flex items-center justify-center text-xs">LC</span>
                  LeetCode
                </a>
                <a 
                  href="https://www.hackerrank.com/profile/kartikks1205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <span className="w-4 h-4 mr-2 flex items-center justify-center text-xs">HR</span>
                  HackerRank
                </a>
                <a 
                  href="https://www.geeksforkartikk0vcvgeeks.org/user/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <span className="w-4 h-4 mr-2 flex items-center justify-center text-xs">GFG</span>
                  GeeksforGeeks
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} WorkNest by Kartik and Co. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
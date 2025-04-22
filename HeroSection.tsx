import { Search, Briefcase, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient-x">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
        <div className="w-80 h-80 rounded-full bg-white opacity-5"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden lg:block">
        <div className="w-80 h-80 rounded-full bg-white opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Find Your Perfect Career Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Connect with top employers and discover your next career move with WorkNest, your trusted job hunting platform.
          </p>

          {/* Search box */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-3 mb-12 mx-auto max-w-3xl">
            <form className="flex flex-col md:flex-row gap-2">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keyword or company"
                  className="w-full pl-10 pr-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Link to="/jobs" className="bg-primary-600 text-white font-medium px-6 py-3 rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Search Jobs
              </Link>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white flex flex-col items-center">
              <Briefcase className="h-10 w-10 mb-3 text-white" />
              <div className="text-3xl font-bold mb-1">10,000+</div>
              <div className="text-white/80">Job Opportunities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white flex flex-col items-center">
              <Building className="h-10 w-10 mb-3 text-white" />
              <div className="text-3xl font-bold mb-1">1,200+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white flex flex-col items-center">
              <Users className="h-10 w-10 mb-3 text-white" />
              <div className="text-3xl font-bold mb-1">50,000+</div>
              <div className="text-white/80">Job Seekers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
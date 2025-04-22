import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Briefcase, 
  HeartPulse, 
  BarChart3, 
  Building, 
  Wrench, 
  PenTool, 
  Truck 
} from 'lucide-react';

const categories = [
  { name: 'Technology', icon: <Code />, count: 1245, color: 'bg-primary-500' },
  { name: 'Business', icon: <Briefcase />, count: 873, color: 'bg-secondary-500' },
  { name: 'Healthcare', icon: <HeartPulse />, count: 642, color: 'bg-accent-500' },
  { name: 'Marketing', icon: <BarChart3 />, count: 534, color: 'bg-success-500' },
  { name: 'Construction', icon: <Building />, count: 412, color: 'bg-warning-500' },
  { name: 'Engineering', icon: <Wrench />, count: 365, color: 'bg-error-500' },
  { name: 'Design', icon: <PenTool />, count: 297, color: 'bg-primary-700' },
  { name: 'Logistics', icon: <Truck />, count: 186, color: 'bg-secondary-700' },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Explore Job Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse jobs by category and find the perfect opportunity in your field of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/jobs?category=${category.name}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="p-6">
                <div className={`w-14 h-14 ${category.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(category.icon, { className: 'h-7 w-7' })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500">
                  {category.count} jobs available
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/jobs"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
          >
            View all categories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
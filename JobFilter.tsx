import { useState, useEffect } from 'react';
import { Search, X, ArrowDownUp } from 'lucide-react';
import { categories, locations, employmentTypes } from '../../data/filterOptions';

interface FilterProps {
  onFilterChange: (filters: Filters) => void;
}

export interface Filters {
  search: string;
  category: string;
  location: string;
  employmentType: string;
}

const JobFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: '',
    location: '',
    employmentType: '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onFilterChange(filters);
    }, 300);

    return () => clearTimeout(timerId);
  }, [filters, onFilterChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      location: '',
      employmentType: '',
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Search input */}
        <div className="w-full">
          <div className="relative">
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleInputChange}
              placeholder="Search job title or keyword..."
              className="w-full py-2.5 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <button
          type="button"
          onClick={toggleExpand}
          className="md:hidden flex items-center text-gray-700 font-medium"
        >
          <ArrowDownUp className="h-4 w-4 mr-2" />
          {isExpanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className={`mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ${isExpanded ? 'block' : 'hidden md:grid'}`}>
        {/* Category filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleInputChange}
            className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        {/* Location filter */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        {/* Employment Type filter */}
        <div>
          <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">
            Job Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            value={filters.employmentType}
            onChange={handleInputChange}
            className="w-full py-2.5 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Types</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className={`mt-4 flex justify-end ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
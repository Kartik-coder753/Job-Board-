import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import JobFilter, { Filters } from '../components/jobs/JobFilter';
import JobList from '../components/jobs/JobList';
import { mockJobs } from '../data/mockJobs';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';
import { Job } from '../types/job';

const Jobs = () => {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  
  const initialCategory = queryParams.get('category') || '';
  
  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: initialCategory,
    location: '',
    employmentType: '',
  });
  
  const [loading, setLoading] = useState(false);

  const filteredJobs = useMemo(() => {
    const filtered = mockJobs.filter((job) => {
      // Search filter (title, company, description)
      if (
        filters.search &&
        !job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !job.company.toLowerCase().includes(filters.search.toLowerCase()) &&
        !job.description.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }
      
      // Category filter
      if (filters.category && job.category !== filters.category) {
        return false;
      }
      
      // Location filter
      if (filters.location && job.location !== filters.location) {
        return false;
      }
      
      // Employment type filter
      if (filters.employmentType && job.employmentType !== filters.employmentType) {
        return false;
      }
      
      return true;
    });
    
    // Sort by most recent
    return filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
  }, [filters]);

  const handleFilterChange = (newFilters: Filters) => {
    setLoading(true);
    
    // Simulate loading state
    setTimeout(() => {
      setFilters(newFilters);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2 flex items-center justify-center">
            <BriefcaseBusiness className="w-8 h-8 mr-3 text-primary-600" />
            Job Listings
          </h1>
          <p className="text-lg text-gray-600">
            Find your next career opportunity from {mockJobs.length} available jobs
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <JobFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Job Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-700 font-medium">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
          </p>
          <div className="text-sm text-gray-500">
            Sorted by: <span className="font-medium">Most Recent</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-10">
          <JobList jobs={filteredJobs} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
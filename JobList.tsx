import { useState } from 'react';
import JobCard from './JobCard';
import { Job } from '../../types/job';
import { Briefcase } from 'lucide-react';

interface JobListProps {
  jobs: Job[];
  loading?: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading = false }) => {
  const [visibleJobs, setVisibleJobs] = useState(6);

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 6);
  };

  if (loading) {
    return (
      <div className="flex flex-col space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-28"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
            </div>
            <div className="mt-5 flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No jobs found</h3>
        <p className="mt-2 text-gray-500">
          We couldn't find any jobs matching your search criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {jobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleJobs < jobs.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white rounded-md font-medium hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
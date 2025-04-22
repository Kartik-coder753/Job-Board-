import { CalendarClock, MapPin, Building2, Briefcase as BriefcaseBusiness, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../../types/job';
import { formatDistanceToNow } from '../../utils/dateUtils';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow p-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-md mr-4">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="w-8 h-8 object-contain"
              />
            ) : (
              <Building2 className="w-7 h-7 text-primary-600" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {job.title}
            </h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <span 
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            job.employmentType === 'Full-time' 
              ? 'bg-primary-100 text-primary-800' 
              : job.employmentType === 'Part-time'
              ? 'bg-secondary-100 text-secondary-800'
              : job.employmentType === 'Contract'
              ? 'bg-accent-100 text-accent-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {job.employmentType}
        </span>
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
            <span>{job.location}</span>
          </div>
          
          <div className="flex items-center">
            <BriefcaseBusiness className="w-4 h-4 mr-1.5 text-gray-400" />
            <span>{job.category}</span>
          </div>
          
          <div className="flex items-center">
            <CalendarClock className="w-4 h-4 mr-1.5 text-gray-400" />
            <span>Posted {formatDistanceToNow(new Date(job.postedDate))}</span>
          </div>
          
          {job.salary && (
            <div className="flex items-center font-medium text-gray-700">
              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
              {job.salary.period === 'yearly' ? '/year' : '/month'}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 line-clamp-2">{job.description}</p>
      </div>
      
      <div className="mt-5 flex flex-wrap justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1.5" />
          <span>Apply before {new Date(job.deadline).toLocaleDateString()}</span>
        </div>
        
        <Link 
          to={`/jobs/${job.id}`}
          className="mt-2 md:mt-0 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
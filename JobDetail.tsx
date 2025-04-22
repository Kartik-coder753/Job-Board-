import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Clock, 
  Briefcase, 
  DollarSign, 
  Users,
  BarChart,
  Share2,
  Bookmark,
  FileText,
  Upload
} from 'lucide-react';
import { mockJobs } from '../data/mockJobs';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';
import { formatDistanceToNow } from '../utils/dateUtils';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isJobSaved, setIsJobSaved] = useState(false);
  
  const job = mockJobs.find((job) => job.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs" className="text-primary-600 hover:text-primary-800 font-medium">
            Return to job listings
          </Link>
        </div>
      </div>
    );
  }
  
  const handleApply = () => {
    // In a real app, this would submit an application
    setShowSuccessMessage(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };
  
  const handleSaveJob = () => {
    setIsJobSaved(!isJobSaved);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success message */}
        {showSuccessMessage && (
          <div className="mb-6 bg-success-100 border border-success-200 text-success-800 px-4 py-3 rounded relative animate-fade-in">
            <span className="block sm:inline">Your application has been submitted successfully!</span>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Job header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-lg mr-4">
                    {job.companyLogo ? (
                      <img 
                        src={job.companyLogo} 
                        alt={`${job.company} logo`} 
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <Building2 className="w-10 h-10 text-primary-600" />
                    )}
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Link to={`/company/${job.company.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary-600">
                        {job.company}
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        job.employmentType === 'Full-time' 
                          ? 'bg-primary-100 text-primary-800' 
                          : job.employmentType === 'Part-time'
                          ? 'bg-secondary-100 text-secondary-800'
                          : job.employmentType === 'Contract'
                          ? 'bg-accent-100 text-accent-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.employmentType}
                      </span>
                      <span className="flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                        <Briefcase className="w-3.5 h-3.5 mr-1" />
                        {job.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <button 
                    onClick={handleSaveJob}
                    className={`p-2 rounded-full ${
                      isJobSaved ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-label="Save job"
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                    aria-label="Share job"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Job details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h2>
                <p className="text-gray-700 mb-6">
                  Please submit your resume and cover letter through our online application system. 
                  Make sure to include any relevant experience and qualifications that match the job requirements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply now card */}
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Posted</p>
                    <p className="text-gray-800">{formatDistanceToNow(new Date(job.postedDate))} ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Apply Before</p>
                    <p className="text-gray-800">{new Date(job.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Salary</p>
                    <p className="text-gray-800">
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} 
                      {job.salary.period === 'yearly' ? '/year' : '/month'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Applicants</p>
                    <p className="text-gray-800">{job.applicationCount} people applied</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BarChart className="w-5 h-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Competition</p>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          job.applicationCount > 50 
                            ? 'bg-error-500' 
                            : job.applicationCount > 20 
                            ? 'bg-warning-500' 
                            : 'bg-success-500'
                        }`} 
                        style={{ width: `${Math.min(job.applicationCount, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {job.applicationCount > 50 
                        ? 'High competition' 
                        : job.applicationCount > 20 
                        ? 'Medium competition' 
                        : 'Low competition'}
                    </p>
                  </div>
                </div>
              </div>
              
              {currentUser ? (
                <>
                  <Button 
                    onClick={handleApply}
                    type="button"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<FileText className="h-5 w-5" />}
                  >
                    Apply Now
                  </Button>
                  
                  <div className="mt-4">
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume (Optional)
                    </label>
                    <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-primary-600 focus-within:border-primary-600">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Choose file or drag & drop</span>
                        <Upload className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="file" 
                        id="resume" 
                        name="resume" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <Button 
                    to="/login"
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    Login to Apply
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary-600 hover:text-primary-800 font-medium">
                      Register
                    </Link>
                  </p>
                </div>
              )}
            </div>
            
            {/* Company info card */}
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About the Company</h2>
              
              <div className="flex items-center mb-4">
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
                  <h3 className="font-medium text-gray-900">{job.company}</h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                {job.company} is a leading company in the {job.category.toLowerCase()} industry, 
                dedicated to innovation and excellence in our field.
              </p>
              
              <Link 
                to={`/company/${job.company.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
              >
                View Company Profile
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Similar jobs */}
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h2>
              
              <div className="space-y-4">
                {mockJobs
                  .filter(j => j.id !== job.id && j.category === job.category)
                  .slice(0, 3)
                  .map(similarJob => (
                    <Link 
                      key={similarJob.id} 
                      to={`/jobs/${similarJob.id}`}
                      className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 mb-1">{similarJob.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{similarJob.company}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{similarJob.location}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Briefcase as BriefcaseBusiness, Users, MessageSquare, BarChart3, FileText, Plus, Eye, Pencil, Trash, Filter } from 'lucide-react';
import { mockJobs } from '../data/mockJobs';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/common/Button';

const EmployerDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('posted');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);
  
  // Mock data
  const employerJobs = mockJobs.slice(0, 5); // First 5 jobs for demo
  const applications = [
    { id: '1', jobId: '1', candidate: 'John Smith', status: 'Pending Review', date: '2025-03-20' },
    { id: '2', jobId: '2', candidate: 'Emma Johnson', status: 'Interviewing', date: '2025-03-19' },
    { id: '3', jobId: '1', candidate: 'Michael Brown', status: 'Rejected', date: '2025-03-18' },
    { id: '4', jobId: '3', candidate: 'Sarah Wilson', status: 'Hired', date: '2025-03-17' },
    { id: '5', jobId: '5', candidate: 'David Lee', status: 'Pending Review', date: '2025-03-16' },
  ];
  
  const handleDeleteJob = (jobId: string) => {
    setJobToDelete(jobId);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    // In a real app, this would make an API call to delete the job
    console.log(`Deleting job with ID: ${jobToDelete}`);
    setShowDeleteModal(false);
    setJobToDelete(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Dashboard Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Employer Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {currentUser?.name}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                to="/employer/post-job"
                variant="primary"
                icon={<Plus className="h-5 w-5" />}
              >
                Post a New Job
              </Button>
            </div>
          </div>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Posted Jobs</p>
                <h3 className="text-2xl font-bold text-gray-900">{employerJobs.length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mr-4">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Applicants</p>
                <h3 className="text-2xl font-bold text-gray-900">{applications.length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-accent-100 text-accent-600 mr-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">New Messages</p>
                <h3 className="text-2xl font-bold text-gray-900">7</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-success-100 text-success-600 mr-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Job Views</p>
                <h3 className="text-2xl font-bold text-gray-900">243</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('posted')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'posted'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BriefcaseBusiness className="inline-block h-5 w-5 mr-2" />
                Posted Jobs
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'applications'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="inline-block h-5 w-5 mr-2" />
                Applications
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'posted' ? (
              <>
                {/* Posted Jobs Tab */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
                    Your Posted Jobs
                  </h2>
                  <div className="flex items-center">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <Filter className="h-4 w-4 mr-1.5" />
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Job Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applications
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Posted Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Deadline
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employerJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{job.title}</div>
                            <div className="text-sm text-gray-500">{job.location}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{job.applicationCount}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(job.postedDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(job.deadline).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link to={`/jobs/${job.id}`} className="text-gray-500 hover:text-gray-900" title="View">
                                <Eye className="h-5 w-5" />
                              </Link>
                              <Link to={`/employer/edit-job/${job.id}`} className="text-primary-600 hover:text-primary-900" title="Edit">
                                <Pencil className="h-5 w-5" />
                              </Link>
                              <button 
                                onClick={() => handleDeleteJob(job.id)} 
                                className="text-error-600 hover:text-error-900"
                                title="Delete"
                              >
                                <Trash className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                {/* Applications Tab */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
                    Recent Applications
                  </h2>
                  <div className="flex items-center">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <Filter className="h-4 w-4 mr-1.5" />
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Candidate
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Job
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Application Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((application) => {
                        const job = mockJobs.find(job => job.id === application.jobId);
                        return (
                          <tr key={application.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{application.candidate}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{job?.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                application.status === 'Pending Review'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : application.status === 'Interviewing'
                                  ? 'bg-blue-100 text-blue-800'
                                  : application.status === 'Hired'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {application.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(application.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link to={`/employer/applications/${application.id}`} className="text-primary-600 hover:text-primary-900">
                                View Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-error-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Trash className="h-6 w-6 text-error-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Delete Job Posting
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this job posting? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-error-600 text-base font-medium text-white hover:bg-error-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-error-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboard;
import { useState } from 'react';
import { LayoutDashboard, Users, Briefcase as BriefcaseBusiness, Building2, BarChart3, AlertCircle, CheckCircle2, XCircle, Eye, Trash, Settings, Filter } from 'lucide-react';
import { mockJobs } from '../data/mockJobs';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/common/Button';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('jobs');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{id: string, type: string} | null>(null);
  
  // Mock data
  const jobSeekers = [
    { id: '1', name: 'John Smith', email: 'john@example.com', registeredDate: '2025-02-15', status: 'active' },
    { id: '2', name: 'Emma Johnson', email: 'emma@example.com', registeredDate: '2025-02-18', status: 'active' },
    { id: '3', name: 'Michael Brown', email: 'michael@example.com', registeredDate: '2025-02-20', status: 'inactive' },
    { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', registeredDate: '2025-02-25', status: 'active' },
    { id: '5', name: 'David Lee', email: 'david@example.com', registeredDate: '2025-03-01', status: 'active' },
  ];
  
  const employers = [
    { id: '1', name: 'TechCorp Inc.', email: 'hr@techcorp.com', registeredDate: '2025-01-10', status: 'active' },
    { id: '2', name: 'Global Brands Ltd.', email: 'careers@globalbrands.com', registeredDate: '2025-01-15', status: 'active' },
    { id: '3', name: 'InnoDesign Solutions', email: 'jobs@innodesign.com', registeredDate: '2025-01-20', status: 'inactive' },
    { id: '4', name: 'City Medical Center', email: 'recruiting@citymedical.com', registeredDate: '2025-02-05', status: 'active' },
    { id: '5', name: 'Analytics Unlimited', email: 'team@analyticsunlimited.com', registeredDate: '2025-02-10', status: 'active' },
  ];
  
  const reports = [
    { id: '1', type: 'job', itemId: '3', reporter: 'user123', reason: 'Misleading job description', date: '2025-03-15', status: 'pending' },
    { id: '2', type: 'user', itemId: '5', reporter: 'employer456', reason: 'Spam activity', date: '2025-03-16', status: 'reviewed' },
    { id: '3', type: 'job', itemId: '7', reporter: 'user789', reason: 'Discriminatory requirements', date: '2025-03-18', status: 'pending' },
  ];
  
  const handleDelete = (id: string, type: string) => {
    setItemToDelete({ id, type });
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    // In a real app, this would make an API call to delete the item
    console.log(`Deleting ${itemToDelete?.type} with ID: ${itemToDelete?.id}`);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'jobs':
        return (
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">All Job Listings</h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1.5" />
                Filter
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{job.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{job.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{job.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(job.postedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link to={`/jobs/${job.id}`} className="text-gray-500 hover:text-gray-900" title="View">
                          <Eye className="h-5 w-5" />
                        </Link>
                        <button 
                          onClick={() => handleDelete(job.id, 'job')} 
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
        );
      case 'jobseekers':
        return (
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">All Job Seekers</h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1.5" />
                Filter
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registered Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobSeekers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.registeredDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <a href="#" className="text-gray-500 hover:text-gray-900" title="View">
                          <Eye className="h-5 w-5" />
                        </a>
                        <button 
                          onClick={() => handleDelete(user.id, 'user')} 
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
        );
      case 'employers':
        return (
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">All Employers</h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1.5" />
                Filter
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registered Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employers.map((employer) => (
                  <tr key={employer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(employer.registeredDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {employer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <a href="#" className="text-gray-500 hover:text-gray-900" title="View">
                          <Eye className="h-5 w-5" />
                        </a>
                        <button 
                          onClick={() => handleDelete(employer.id, 'employer')} 
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
        );
      case 'reports':
        return (
          <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Reported Content</h2>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1.5" />
                Filter
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reporter
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {report.type === 'job' ? 'Job Listing' : 'User'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{report.reason}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{report.reporter}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(report.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <a href="#" className="text-primary-600 hover:text-primary-900" title="Review">
                          <Eye className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-success-600 hover:text-success-900" title="Approve">
                          <CheckCircle2 className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-error-600 hover:text-error-900" title="Reject">
                          <XCircle className="h-5 w-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-gray-900 text-white w-full md:w-64 md:min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-heading font-bold flex items-center">
              <LayoutDashboard className="h-6 w-6 mr-2" />
              Admin Dashboard
            </h2>
          </div>
          <nav className="mt-5">
            <a
              href="#"
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'jobs'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <BriefcaseBusiness className="h-5 w-5 mr-3" />
              Manage Jobs
            </a>
            <a
              href="#"
              onClick={() => setActiveTab('jobseekers')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'jobseekers'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Job Seekers
            </a>
            <a
              href="#"
              onClick={() => setActiveTab('employers')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'employers'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Building2 className="h-5 w-5 mr-3" />
              Employers
            </a>
            <a
              href="#"
              onClick={() => setActiveTab('reports')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'reports'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <AlertCircle className="h-5 w-5 mr-3" />
              Reports
            </a>
            <a
              href="#"
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'analytics'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              Analytics
            </a>
            <a
              href="#"
              onClick={() => setActiveTab('settings')}
              className={`flex items-center px-6 py-3 text-sm ${
                activeTab === 'settings'
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </a>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {activeTab === 'jobs' && 'Job Listings'}
                {activeTab === 'jobseekers' && 'Job Seekers'}
                {activeTab === 'employers' && 'Employers'}
                {activeTab === 'reports' && 'Reports'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'settings' && 'Settings'}
              </h1>
              <p className="text-sm text-gray-600">
                Manage all aspects of the job board platform
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-600">
                Welcome, <span className="font-medium">{currentUser?.name}</span>
              </p>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Jobs</p>
                  <h3 className="text-2xl font-bold text-gray-900">{mockJobs.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Job Seekers</p>
                  <h3 className="text-2xl font-bold text-gray-900">{jobSeekers.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-accent-100 text-accent-600 mr-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Employers</p>
                  <h3 className="text-2xl font-bold text-gray-900">{employers.length}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-error-100 text-error-600 mr-4">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Pending Reports</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {reports.filter(r => r.status === 'pending').length}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderTabContent()}
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
                      Delete {itemToDelete?.type === 'job' ? 'Job Listing' : itemToDelete?.type === 'employer' ? 'Employer Account' : 'User Account'}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this {itemToDelete?.type === 'job' ? 'job listing' : itemToDelete?.type === 'employer' ? 'employer account' : 'user account'}? This action cannot be undone.
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

export default AdminDashboard;
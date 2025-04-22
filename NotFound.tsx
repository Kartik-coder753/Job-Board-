import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <BriefcaseBusiness className="h-16 w-16 text-primary-600" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            to="/"
            variant="primary"
            size="lg"
          >
            Go to Homepage
          </Button>
          <Button 
            to="/jobs"
            variant="outline"
            size="lg"
          >
            Browse Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import JobList from '../components/jobs/JobList';
import { mockJobs } from '../data/mockJobs';
import { Briefcase as BriefcaseBusiness, Users, Building2 } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  // Get latest 3 jobs
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <div>
      <HeroSection />
      <CategorySection />

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured Job Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest job openings from top employers
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <JobList jobs={featuredJobs} />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How WorkNest Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to find your dream job or the perfect candidate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
              <p className="text-gray-600">
                Sign up as a job seeker to find opportunities or as an employer to post jobs and find talent.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <BriefcaseBusiness className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Find or Post Jobs</h3>
              <p className="text-gray-600">
                Browse through thousands of job listings or post your job opening to reach qualified candidates.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <Building2 className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply or Hire</h3>
              <p className="text-gray-600">
                Submit applications to your desired positions or review applicants and find your ideal employee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of job seekers and employers who trust WorkNest for their career and hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                to="/register"
                variant="outline"
                size="lg"
                className="bg-white text-primary-600 border-white hover:bg-white/90"
              >
                Sign Up Now
              </Button>
              <Button 
                to="/jobs"
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'jobseeker' | 'employer' | 'admin';
}
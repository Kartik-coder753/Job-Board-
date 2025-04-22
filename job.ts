export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  employmentType: string;
  category: string;
  description: string;
  requirements: string[];
  salary: {
    min: number;
    max: number;
    period: 'yearly' | 'monthly' | 'hourly';
  };
  postedDate: string;
  deadline: string;
  applicationCount: number;
}
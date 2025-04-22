import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    companyLogo: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'San Francisco, CA',
    employmentType: 'Full-time',
    category: 'Technology',
    description: 'We are looking for a senior frontend developer with expertise in React, TypeScript, and modern CSS frameworks. You will be responsible for building scalable user interfaces and collaborating with cross-functional teams.',
    requirements: [
      'At least 5 years of experience with frontend development',
      'Strong proficiency in React, TypeScript, and CSS',
      'Experience with state management (Redux, Context API)',
      'Knowledge of responsive design and cross-browser compatibility'
    ],
    salary: {
      min: 120000,
      max: 160000,
      period: 'yearly'
    },
    postedDate: '2025-03-15T10:00:00.000Z',
    deadline: '2025-04-15T23:59:59.000Z',
    applicationCount: 42
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Global Brands Ltd.',
    companyLogo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'New York, NY',
    employmentType: 'Full-time',
    category: 'Marketing',
    description: 'We are seeking a marketing manager to lead our digital marketing strategies. The ideal candidate will have a strong background in digital marketing, campaign management, and team leadership.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      'At least 3 years of experience in digital marketing',
      'Proficiency in marketing analytics tools',
      'Experience with social media marketing and SEO'
    ],
    salary: {
      min: 90000,
      max: 120000,
      period: 'yearly'
    },
    postedDate: '2025-03-18T14:30:00.000Z',
    deadline: '2025-04-18T23:59:59.000Z',
    applicationCount: 27
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'InnoDesign Solutions',
    companyLogo: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Remote',
    employmentType: 'Contract',
    category: 'Design',
    description: 'We\'re looking for a talented UX Designer to join our remote team. You\'ll be responsible for creating user-centered designs, wireframes, and prototypes for web and mobile applications.',
    requirements: [
      'At least 2 years of experience in UX design',
      'Proficiency in design tools like Figma, Sketch, Adobe XD',
      'Understanding of user research methods',
      'Portfolio showcasing previous work'
    ],
    salary: {
      min: 80000,
      max: 100000,
      period: 'yearly'
    },
    postedDate: '2025-03-20T09:15:00.000Z',
    deadline: '2025-04-20T23:59:59.000Z',
    applicationCount: 15
  },
  {
    id: '4',
    title: 'Registered Nurse',
    company: 'City Medical Center',
    companyLogo: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Chicago, IL',
    employmentType: 'Full-time',
    category: 'Healthcare',
    description: 'City Medical Center is hiring registered nurses to join our dedicated team. We offer a supportive work environment and opportunities for professional growth.',
    requirements: [
      'Current RN license',
      'BSN preferred',
      'At least 1 year of clinical experience',
      'BLS certification'
    ],
    salary: {
      min: 70000,
      max: 90000,
      period: 'yearly'
    },
    postedDate: '2025-03-22T11:45:00.000Z',
    deadline: '2025-04-22T23:59:59.000Z',
    applicationCount: 31
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'Analytics Unlimited',
    companyLogo: 'https://images.pexels.com/photos/5059151/pexels-photo-5059151.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Seattle, WA',
    employmentType: 'Full-time',
    category: 'Technology',
    description: 'We are looking for a skilled Data Scientist to analyze complex datasets and build predictive models. You will work with stakeholders to identify opportunities for leveraging company data.',
    requirements: [
      'Master\'s or PhD in Computer Science, Statistics, or related field',
      'Experience with ML frameworks like TensorFlow or PyTorch',
      'Proficiency in Python and SQL',
      'Knowledge of data visualization techniques'
    ],
    salary: {
      min: 130000,
      max: 170000,
      period: 'yearly'
    },
    postedDate: '2025-03-25T08:30:00.000Z',
    deadline: '2025-04-25T23:59:59.000Z',
    applicationCount: 19
  },
  {
    id: '6',
    title: 'Financial Analyst',
    company: 'Capital Investments',
    companyLogo: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Boston, MA',
    employmentType: 'Full-time',
    category: 'Finance',
    description: 'We are seeking a financial analyst to join our team. The ideal candidate will have experience in financial modeling, forecasting, and data analysis.',
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      'At least 2 years of experience in financial analysis',
      'Proficiency in Excel and financial modeling',
      'Knowledge of financial reporting and forecasting'
    ],
    salary: {
      min: 85000,
      max: 110000,
      period: 'yearly'
    },
    postedDate: '2025-03-27T13:20:00.000Z',
    deadline: '2025-04-27T23:59:59.000Z',
    applicationCount: 23
  },
  {
    id: '7',
    title: 'Project Manager',
    company: 'Construction Experts',
    companyLogo: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Denver, CO',
    employmentType: 'Full-time',
    category: 'Construction',
    description: 'We\'re looking for a Project Manager to oversee construction projects from inception to completion. You\'ll be responsible for planning, budget management, and team coordination.',
    requirements: [
      'Bachelor\'s degree in Construction Management or related field',
      'At least 5 years of experience in construction project management',
      'PMP certification preferred',
      'Knowledge of construction methods and regulations'
    ],
    salary: {
      min: 95000,
      max: 125000,
      period: 'yearly'
    },
    postedDate: '2025-03-29T10:10:00.000Z',
    deadline: '2025-04-29T23:59:59.000Z',
    applicationCount: 14
  },
  {
    id: '8',
    title: 'Customer Service Representative',
    company: 'Support Connect',
    companyLogo: 'https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Remote',
    employmentType: 'Part-time',
    category: 'Customer Service',
    description: 'We are hiring customer service representatives to provide support to our clients. This is a remote position with flexible hours.',
    requirements: [
      'High school diploma or equivalent',
      'Previous customer service experience preferred',
      'Excellent communication skills',
      'Ability to work independently'
    ],
    salary: {
      min: 35000,
      max: 45000,
      period: 'yearly'
    },
    postedDate: '2025-03-30T15:45:00.000Z',
    deadline: '2025-04-30T23:59:59.000Z',
    applicationCount: 53
  },
  {
    id: '9',
    title: 'Software Engineer',
    company: 'Innovative Solutions',
    companyLogo: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Austin, TX',
    employmentType: 'Full-time',
    category: 'Technology',
    description: 'We are seeking a talented Software Engineer to join our development team. You will be responsible for designing, developing, and maintaining software solutions.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'At least 3 years of experience in software development',
      'Proficiency in Java, Python, or C++',
      'Experience with cloud technologies (AWS, Azure)'
    ],
    salary: {
      min: 110000,
      max: 140000,
      period: 'yearly'
    },
    postedDate: '2025-04-01T09:30:00.000Z',
    deadline: '2025-05-01T23:59:59.000Z',
    applicationCount: 37
  },
  {
    id: '10',
    title: 'Graphic Designer',
    company: 'Creative Studio',
    companyLogo: 'https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Los Angeles, CA',
    employmentType: 'Freelance',
    category: 'Design',
    description: 'Creative Studio is looking for a freelance Graphic Designer to create visual concepts for web and print. This role requires a strong portfolio and creative problem-solving skills.',
    requirements: [
      'Bachelor\'s degree in Graphic Design or related field',
      'At least 2 years of experience in graphic design',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio demonstrating creativity and technical skills'
    ],
    salary: {
      min: 60000,
      max: 80000,
      period: 'yearly'
    },
    postedDate: '2025-04-03T14:15:00.000Z',
    deadline: '2025-05-03T23:59:59.000Z',
    applicationCount: 29
  },
  {
    id: '11',
    title: 'Sales Representative',
    company: 'Global Products Inc.',
    companyLogo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Miami, FL',
    employmentType: 'Full-time',
    category: 'Sales',
    description: 'We are seeking a motivated Sales Representative to join our team. You will be responsible for developing and maintaining client relationships, conducting sales presentations, and meeting sales targets.',
    requirements: [
      'Bachelor\'s degree preferred',
      'Previous sales experience',
      'Strong communication and negotiation skills',
      'Goal-oriented mindset'
    ],
    salary: {
      min: 65000,
      max: 85000,
      period: 'yearly'
    },
    postedDate: '2025-04-05T11:00:00.000Z',
    deadline: '2025-05-05T23:59:59.000Z',
    applicationCount: 18
  },
  {
    id: '12',
    title: 'Logistics Coordinator',
    company: 'Swift Logistics',
    companyLogo: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    location: 'Dallas, TX',
    employmentType: 'Full-time',
    category: 'Logistics',
    description: 'We are looking for a Logistics Coordinator to manage the movement of goods and ensure efficient delivery. You will be responsible for coordinating with carriers, tracking shipments, and resolving issues.',
    requirements: [
      'Bachelor\'s degree in Supply Chain, Logistics, or related field',
      'At least 2 years of experience in logistics or supply chain',
      'Knowledge of transportation management systems',
      'Strong organizational and problem-solving skills'
    ],
    salary: {
      min: 55000,
      max: 70000,
      period: 'yearly'
    },
    postedDate: '2025-04-07T08:45:00.000Z',
    deadline: '2025-05-07T23:59:59.000Z',
    applicationCount: 21
  }
];
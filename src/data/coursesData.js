import webDevImage from '../images/web-development.jpg';
import appDevImage from '../images/app-development.jpg';
import uxDesignImage from '../images/ui-uxdesign.jpg';
import dataScienceImage from '../images/data-science.jpg';
import digitalMarketingImage from '../images/digital-marketing.jpg';
import cyberSecurityImage from '../images/cyber-security.jpg';
import pythonProgrammingImage from '../images/python-programming.jpg';
import mobileAppDesignImage from '../images/mobile-app-design.jpg';
import cloudComputingImage from '../images/cloud-computing.jpg';
import gameDevelopmentImage from '../images/game-development.jpg';
import blockchainTechnologyImage from '../images/blockchain-technology.jpg';
import artificialIntelligenceImage from '../images/artificial-intelligence.jpg';

import webdevelopment from '../vidoes/Web_Development.mp4';
import appdevelopment from '../vidoes/App_Development.mp4';
import uiux from '../vidoes/Ui_Ux.mp4';
import exampleVideo from '../vidoes/example.mp4';


export const courses = [
    {
      id: 1,
      title: 'Web Development',
      image: webDevImage, // Update with the correct path or variable
      description: 'Learn web development from scratch.',
      details: ['HTML', 'CSS', 'JavaScript'],
      modules: [
        {
          moduleTitle: 'Introduction to Web Development',
          videos: [
            { title: 'Introduction to HTML', videoFile:  webdevelopment },
            { title: 'Styling with CSS', videoFile: webdevelopment },
          ]
        },
        {
          moduleTitle: 'Advanced Web Development',
          videos: [
            { title: 'JavaScript Basics', videoFile: webdevelopment },
            { title: 'JavaScript Advanced', videoFile: webdevelopment},
          ]
        }
      ],
      assignments: [
        {
          title: 'Build a Personal Portfolio Website',
          description: 'Create a responsive portfolio website showcasing your projects.',
          dueDate: '2024-07-01',
          submissionLink: 'https://example.com/submit-portfolio',
        },
        {
          title: 'Responsive Design Exercise',
          description: 'Design a webpage that adjusts to different screen sizes.',
          dueDate: '2024-07-15',
          submissionLink: 'https://example.com/submit-responsive-design',
        },
      ],
    },
    {
      id: 2,
      title: 'App Development',
      image: appDevImage, // Update with the correct path or variable
      description: 'Build mobile applications for Android and iOS.',
      details: ['Android Development', 'iOS Development'],
      modules: [
        {
          moduleTitle: 'Introduction to App Development',
          videos: [
            { title: 'Getting Started with Android', videoFile: appdevelopment },
            { title: 'iOS App Development Basics', videoFile: appdevelopment },
          ]
        },
        {
          moduleTitle: 'Advanced App Development',
          videos: [
            { title: 'Advanced Android Techniques', videoFile: appdevelopment },
            { title: 'Advanced iOS Techniques', videoFile: appdevelopment },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 3,
      title: 'UX & UI Design',
      image: uxDesignImage, // Update with the correct path or variable
      description: 'Design user-friendly interfaces and experiences.',
      details: ['User Experience Design', 'User Interface Design'],
      modules: [
        {
          moduleTitle: 'Introduction to UX & UI Design',
          videos: [
            { title: 'UX Principles', videoFile: uiux },
            { title: 'UI Design Fundamentals', videoFile: uiux },
          ]
        },
        {
          moduleTitle: 'Advanced UX & UI Design',
          videos: [
            { title: 'Advanced UX Techniques', videoFile: uiux },
            { title: 'Advanced UI Techniques', videoFile: uiux },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 4,
      title: 'Data Science',
      image: dataScienceImage, // Update with the correct path or variable
      description: 'Analyze and interpret complex data.',
      details: ['Data Analysis', 'Machine Learning', 'Data Visualization'],
      modules: [
        {
          moduleTitle: 'Introduction to Data Science',
          videos: [
            { title: 'Introduction to Data Science', videoFile: exampleVideo },
            { title: 'Data Analysis Basics', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Data Science',
          videos: [
            { title: 'Machine Learning Basics', videoFile: exampleVideo },
            { title: 'Data Visualization Techniques', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 5,
      title: 'Digital Marketing',
      image: digitalMarketingImage, // Update with the correct path or variable
      description: 'Promote brands through digital channels.',
      details: ['SEO', 'SEM', 'Social Media Marketing'],
      modules: [
        {
          moduleTitle: 'Introduction to Digital Marketing',
          videos: [
            { title: 'Introduction to Digital Marketing', videoFile: exampleVideo },
            { title: 'SEO Fundamentals', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Digital Marketing',
          videos: [
            { title: 'Advanced SEO Techniques', videoFile: exampleVideo },
            { title: 'Advanced Social Media Strategies', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 6,
      title: 'Cybersecurity',
      image: cyberSecurityImage, // Update with the correct path or variable
      description: 'Protect systems and networks from cyber attacks.',
      details: ['Network Security', 'Ethical Hacking', 'Cyber Defense'],
      modules: [
        {
          moduleTitle: 'Introduction to Cybersecurity',
          videos: [
            { title: 'Introduction to Cybersecurity', videoFile: exampleVideo },
            { title: 'Network Security Basics', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Cybersecurity',
          videos: [
            { title: 'Ethical Hacking Fundamentals', videoFile: exampleVideo },
            { title: 'Cyber Defense Techniques', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 7,
      title: 'Python Programming',
      image: pythonProgrammingImage, // Update with the correct path or variable
      description: 'Learn Python programming from basics to advanced.',
      details: ['Python Basics', 'Object-Oriented Programming', 'Web Development with Python'],
      modules: [
        {
          moduleTitle: 'Introduction to Python',
          videos: [
            { title: 'Introduction to Python', videoFile: exampleVideo },
            { title: 'Python Basics', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Python Programming',
          videos: [
            { title: 'Python OOP Concepts', videoFile: exampleVideo },
            { title: 'Python Web Development', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 8,
      title: 'Mobile App Design',
      image: mobileAppDesignImage, // Update with the correct path or variable
      description: 'Design effective and appealing mobile applications.',
      details: ['UI/UX Principles', 'Mobile Design Patterns', 'Wireframing and Prototyping'],
      modules: [
        {
          moduleTitle: 'Introduction to Mobile App Design',
          videos: [
            { title: 'UI/UX Fundamentals', videoFile: exampleVideo },
            { title: 'Mobile Design Best Practices', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Mobile App Design',
          videos: [
            { title: 'Wireframing Tools', videoFile: exampleVideo },
            { title: 'Prototyping Techniques', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 9,
      title: 'Cloud Computing',
      image: cloudComputingImage, // Update with the correct path or variable
      description: 'Understand cloud services and deployment models.',
      details: ['Introduction to Cloud', 'Cloud Deployment Models', 'Cloud Service Models'],
      modules: [
        {
          moduleTitle: 'Introduction to Cloud Computing',
          videos: [
            { title: 'Cloud Basics', videoFile: exampleVideo },
            { title: 'Cloud Deployment Strategies', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Cloud Computing',
          videos: [
            { title: 'Cloud Service Providers', videoFile: exampleVideo },
            { title: 'Advanced Cloud Deployment', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
      id: 10,
      title: 'Game Development',
      image: gameDevelopmentImage, // Update with the correct path or variable
      description: 'Create engaging and interactive games.',
      details: ['Game Design Principles', 'Game Development Tools', 'Game Publishing'],
      modules: [
        {
          moduleTitle: 'Introduction to Game Development',
          videos: [
            { title: 'Introduction to Game Design', videoFile: exampleVideo },
            { title: 'Game Development Software', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Game Development',
          videos: [
            { title: 'Advanced Game Design', videoFile: exampleVideo },
            { title: 'Game Marketing Strategies', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [],
    },
    {
      id: 11,
      title: 'Blockchain Technology',
      image: blockchainTechnologyImage, // Update with the correct path or variable
      description: 'Explore the world of blockchain and decentralized apps.',
      details: ['Blockchain Fundamentals', 'Decentralized Applications', 'Smart Contracts'],
      modules: [
        {
          moduleTitle: 'Introduction to Blockchain',
          videos: [
            { title: 'Introduction to Blockchain', videoFile: exampleVideo },
            { title: 'Blockchain Basics', videoFile: exampleVideo },
          ]
        },
        {
          moduleTitle: 'Advanced Blockchain Technology',
          videos: [
            { title: 'DApp Development', videoFile: exampleVideo },
            { title: 'Smart Contract Programming', videoFile: exampleVideo },
          ]
        }
      ],
      assignments: [  {
        title: 'Build a Personal Portfolio Website',
        description: 'Create a responsive portfolio website showcasing your projects.',
        dueDate: '2024-07-01',
        submissionLink: 'https://example.com/submit-portfolio',
      },
      {
        title: 'Responsive Design Exercise',
        description: 'Design a webpage that adjusts to different screen sizes.',
        dueDate: '2024-07-15',
        submissionLink: 'https://example.com/submit-responsive-design',
      },],
    },
    {
        id: 12,
        title: 'Artificial Intelligence',
        image: artificialIntelligenceImage, // Update with the correct path or variable
        description: 'Dive into AI and machine learning techniques.',
        details: ['AI Fundamentals', 'Machine Learning Algorithms', 'Deep Learning'],
        modules: [
          {
            moduleTitle: 'Introduction to Artificial Intelligence',
            videos: [
              { title: 'Introduction to AI', videoFile: exampleVideo },
              { title: 'Machine Learning Basics', videoFile: exampleVideo },
            ]
          },
          {
            moduleTitle: 'Advanced AI Techniques',
            videos: [
              { title: 'Deep Learning Concepts', videoFile: exampleVideo },
              { title: 'AI Applications', videoFile: exampleVideo },
            ]
          }
        ],
        assignments: [  {
          title: 'Build a Personal Portfolio Website',
          description: 'Create a responsive portfolio website showcasing your projects.',
          dueDate: '2024-07-01',
          submissionLink: 'https://example.com/submit-portfolio',
        },
        {
          title: 'Responsive Design Exercise',
          description: 'Design a webpage that adjusts to different screen sizes.',
          dueDate: '2024-07-15',
          submissionLink: 'https://example.com/submit-responsive-design',
        },],
      },
    ];
    

 export default courses;
  
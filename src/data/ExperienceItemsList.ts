type ExperienceItemsProps = {
  company: string;
  position: string;
  duration: string;
  projects: {
    projectName: string;
    projectDetails: string[];
  }[];
};

export const ExperienceItemsList: ExperienceItemsProps[] = [
  {
    company: "Deloitte Consulting Sea Sdn. Bhd.",
    position: "Senior Technology Analyst",
    duration: "April 2024 - Present",
    projects: [
      {
        projectName: "Maybank M2E Convergence",
        projectDetails: [
          "Develop enterprise banking web application using React, Tailwind, Zustand",

          "Create responsive and user-friendly interfaces for banking products such as Deposits and Loans",

          "Integrate RESTful APIs to fetch and display real-time banking data",

          "Ensures cross-browser compatibility and resolves browser-specific issues",

          "Write code with best practices and create reusable components",

          "Work closely with QA teams to identify, debug, and resolve application issues",

          "Display account listing and calculate exchange rate ",

          "Cater different download file for bank statements",

          "Write custom filters for transaction history",

          "Create multi steps forms for customer to accept terms and conditions",

          "Write documentation for APIs calls for each screens and components",
        ],
      },
      {
        projectName: "Maybank M2E E-Onboarding",
        projectDetails: [
          "Fix 7 tickets in 2 days without prior knowledge of the codebase",
        ],
      },
    ],
  },
  {
    company: "Edag Holding Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "November 2022 - March 2024",
    projects: [
      {
        projectName: "Resource Information & Fulfillment Tools (RIFT)",
        projectDetails: [
          "Involved in the frontend development lifecycle of a resource planning app",

          "Conceptualized and initiated the development of a resource planning app for project managers",

          "Designed and developed a proof of concept (POC) to validate the app's feasibility and functionality",

          "Collaborated with project stakeholders to gather and refine functional requirements",

          "Participated in regular scrum meetings and provided technical insights to streamline development",

          "Shared knowledge with colleagues from Malaysia and Germany on frontend topics, including code quality",
        ],
      },
      {
        projectName: "Work Place Reservation System (WPRS)",
        projectDetails: [
          "Utilized Angular components, services, modules, and routing to create a modular and maintainable codebase",

          "Experienced in resolving complex merge conflicts, resolved 82 merge conflicts across 7 branches using Git knowledge",

          "Merged 7 story branches with pull requests, improving collaboration with the development team",

          "Implemented design changes suggested by clients and team members",

          "Wrote Jest unit tests with 80% code coverage to catch bugs early and ensure code quality during the development process",

          "Collaborated with the backend team to integrate REST APIs for faster data processing.",
        ],
      },
    ],
  },
  {
    company: "OmniGeo Solutions Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "September 2021 - October 2022",
    projects: [
      {
        projectName: "In House Admin System",
        projectDetails: [
          "Developed admin system using Next.js and Bootstrap",

          "Implemented responsive designs that optimized user experience across various devices",

          "Created custom functions for uploading, processing, and error handling of CSV files",

          "Implemented user authentication using OAuth with Next Auth",

          "Created user interfaces with data retrieved from the server",

          "Submitted data to the server with API, utilizing RESTful architecture to ensure data integrity and reliability",

          "Linked two sets of data dynamically to create context between data, and enable seamless data visualization",
        ],
      },
    ],
  },
  {
    company: "Jumpstart Commerce Sdn. Bhd.",
    position: "Shopify Frontend Developer (Internship)",
    duration: "December 2020 - March 2021",
    projects: [
      {
        projectName: "Multiple Shopify Stores",
        projectDetails: [
          "Developed custom Shopify themes using HTML, CSS, and JavaScript to enhance user experience and increase conversions",

          "Launched 3 new Shopify stores and updated 6 existing ones, utilizing expertise in the Shopify platform to ensure optimal performance and user experience",

          "Collaborated with cross-functional teams to deliver high-quality e-commerce solutions that met client requirements",

          "Provided technical support and troubleshooting for Shopify stores, resolving issues related to theme customization and app integration",
        ],
      },
    ],
  },
  {
    company: "Leo Code Sdn. Bhd.",
    position: "Frontend Developer (Part-time)",
    duration: "May 2020 - July 2021",
    projects: [
      {
        projectName: "Entertainment Website",
        projectDetails: [
          "Create webpages with Angular and Bootstrap",

          "Check for bugs in the development and production environment",

          "Translate website content to other languages with i18n",

          "Provide ideas for creating UI for the application",

          "Attend weekly meetings to provide progress reports",

          "Assist colleagues in completing tasks and projects",
        ],
      },
    ],
  },
];

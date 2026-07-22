type ExperienceItemsProps = {
  hash: string;
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
    hash: "a4f1c9e",
    company: "Pixent Technologies Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "December 2025 - Present",
    projects: [
      {
        projectName: "Player Platform & Game Launch",
        projectDetails: [
          "Own frontend delivery for the customer-facing platform of a digital entertainment and online gaming product",
          "Designed and shipped mini player and picture-in-picture playback, keeping game sessions alive while users browse the rest of the catalogue",
          "Built the KYC verification module end to end, gating promotions, deposits, and withdrawals behind a verified identity check",
          "Drove the responsive and multi-language implementation across desktop and mobile breakpoints",
          "Established a shared component layer that removed duplicated UI patterns across the platform",
        ],
      },
      {
        projectName: "Affiliate Portal",
        projectDetails: [
          "Delivered the affiliate dashboard for referral tracking and partner performance reporting",
          "Designed the data table, filtering, and export layer handling commission and campaign statistics",
        ],
      },
      {
        projectName: "Content Management System",
        projectDetails: [
          "Operate the CMS behind live promotions, publishing campaign content to the player platform",
          "Extended user records with KYC status filtering to support day-to-day operational checks",
        ],
      },
      {
        projectName: "Web Performance & Analytics",
        projectDetails: [
          "Instrumented Google Analytics 4 via GTM, defining the event schema for the full player funnel — homepage view, register click, signup completion, deposit, game start and finish, and bonus claim",
          "Attached game identifier and session parameters to launch events, surfacing most-played titles and drop-off points for the content team",
          "Applied pre-rendering (SSG / ISR) to marketing and landing pages, improving first paint and SEO crawlability",
        ],
      },
      {
        projectName: "Engineering Workflow & AI-Assisted Development",
        projectDetails: [
          "Diagnosed and resolved rebase conflicts, malformed commit history, and branch divergence across parallel feature work",
          "Introduced pre-commit and pre-push gates (lint, type-check, tests, conventional commits) that catch failures before they reach CI",
          "Use Claude Code as a working tool for refactors, review, and reasoning through unfamiliar parts of the codebase",
        ],
      },
    ],
  },
  {
    hash: "a4f21c9",
    company: "Deloitte Consulting Sea Sdn. Bhd.",
    position: "Senior Technology Analyst",
    duration: "April 2024 - November 2025",
    projects: [
      {
        projectName: "Maybank M2E Convergence",
        projectDetails: [
          "Develop enterprise banking web application using React, Tailwind, Zustand",
          "Create responsive and user-friendly interfaces for banking products such as Deposits and Loans",
          "Integrate RESTful APIs to fetch and display real-time banking data",
          "Ensure cross-browser compatibility and resolve browser-specific issues",
          "Write code with best practices and create reusable components",
          "Work closely with QA teams to identify, debug, and resolve application issues",
          "Create multi-step forms for customers to accept terms and conditions",
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
    hash: "7b3e08d",
    company: "Edag Holding Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "November 2022 - March 2024",
    projects: [
      {
        projectName: "Resource Information & Fulfillment Tools (RIFT)",
        projectDetails: [
          "Involved in the frontend development lifecycle of a resource planning app",
          "Conceptualized and initiated the development of a resource planning app for project managers",
          "Designed and developed a proof of concept (POC) to validate feasibility and functionality",
          "Collaborated with project stakeholders to gather and refine functional requirements",
          "Shared frontend knowledge with colleagues from Malaysia and Germany, including code quality",
        ],
      },
      {
        projectName: "Work Place Reservation System (WPRS)",
        projectDetails: [
          "Utilized Angular components, services, modules, and routing for a maintainable codebase",
          "Resolved 82 merge conflicts across 7 branches using Git knowledge",
          "Merged 7 story branches with pull requests, improving team collaboration",
          "Wrote Jest unit tests with 80% code coverage to catch bugs early",
          "Collaborated with the backend team to integrate REST APIs for faster data processing",
        ],
      },
    ],
  },
  {
    hash: "c9d1a45",
    company: "OmniGeo Solutions Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "September 2021 - October 2022",
    projects: [
      {
        projectName: "In House Admin System",
        projectDetails: [
          "Developed admin system using Next.js and Bootstrap",
          "Implemented responsive designs that optimized UX across various devices",
          "Created custom functions for uploading, processing, and error handling of CSV files",
          "Implemented user authentication using OAuth with NextAuth",
          "Submitted data to the server with RESTful APIs to ensure data integrity",
        ],
      },
    ],
  },
  {
    hash: "e2f77b0",
    company: "Jumpstart Commerce Sdn. Bhd.",
    position: "Shopify Frontend Developer (Internship)",
    duration: "December 2020 - March 2021",
    projects: [
      {
        projectName: "Multiple Shopify Stores",
        projectDetails: [
          "Developed custom Shopify themes using HTML, CSS, and JavaScript",
          "Launched 3 new Shopify stores and updated 6 existing ones",
          "Collaborated with cross-functional teams to deliver e-commerce solutions",
          "Provided technical support and troubleshooting for Shopify stores",
        ],
      },
    ],
  },
  {
    hash: "1a90fce",
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
        ],
      },
    ],
  },
];

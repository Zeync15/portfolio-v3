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
        projectName: "Consumer Platform",
        projectDetails: [
          "Own frontend delivery across 4 applications — 2 consumer platforms, a partner portal, and a CMS — as 1 of 5 developers under a team lead",
          "Building mini player and picture-in-picture playback for a new platform release, keeping sessions alive while users browse the catalogue",
          "Drove the responsive implementation across desktop and mobile breakpoints and localised the interface for 3 languages",
          "Partnered with the product designer to define a shared design system, then enforced it in code as a single token set for colour, buttons, and alerts",
          "Reconciled inconsistencies in design handoff, flagging one-off colour values so components stayed on the system rather than drifting per screen",
        ],
      },
      {
        projectName: "Identity Verification (KYC)",
        projectDetails: [
          "Built the KYC verification module end to end, gating account features and fund movement behind a verified bank identity",
          "Modelled the journey as a resumable 8-screen flow — verification status checked at the profile level, conditional mobile registration with OTP, bank detail submission, admin review, and a final amount challenge",
          "Handled the asynchronous approval step, holding users in a pending state that survives reload and returns them to the correct stage on re-entry",
          "Implemented the secondary verification challenge, matching the actual received amount against withdrawal plus additional funds, with attempt limiting and distinct success and failure terminal states",
          "Designed an inline worked example alongside the challenge to reduce failed submissions on a step users only get a limited number of attempts at",
        ],
      },
      {
        projectName: "Web Performance & Analytics",
        projectDetails: [
          "Introduced the first analytics coverage on a platform that had none, scoping and implementing GA4 through GTM at the CTO's request",
          "Defined the event schema for the full conversion funnel — homepage view, register click, signup completion, first deposit, session start and completion, reward redemption",
          "Attached content identifier and session parameters to launch events so most-engaged titles and drop-off points become answerable questions",
          "Authored a setup and handover guide so the incoming owner could migrate from my temporary test property to the company account",
          "Applying pre-rendering (SSG / ISR) to marketing and landing pages to improve first paint and crawlability",
        ],
      },
      {
        projectName: "Engineering Workflow & AI-Assisted Development",
        projectDetails: [
          "Introduced a pre-push hook enforcing lint compliance locally, so issues are resolved before they ever reach the remote branch or CI",
          "Extended the hook to generate currency icons from web3icons into public assets, covering all 5 supported currencies and closing a class of missing-asset bugs whenever a new one is added",
          "Shipped the hooks as part of the repository, giving all 5 developers the same checks by default with no per-developer setup",
          "Use Claude Code as a standing review step before every commit, and to reconcile upstream changes against in-flight work after pulling",
        ],
      },
      {
        projectName: "Partner Portal",
        projectDetails: [
          "Delivered the partner dashboard for referral tracking and performance reporting",
          "Designed the data table, filtering, and export layer handling commission and campaign statistics",
        ],
      },
      {
        projectName: "Content Management System",
        projectDetails: [
          "Operate the CMS behind live campaigns, publishing promotional content to the consumer platform",
          "Extended user records with KYC status filtering to support day-to-day operational checks",
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

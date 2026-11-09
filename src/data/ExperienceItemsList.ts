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
    company: "Primitive Technology Sdn. Bhd.",
    position: "Frontend Developer",
    duration: "December 2025 - Present",
    projects: [
      {
        projectName: "Consumer Platform",
        projectDetails: [
          "Own frontend delivery across 4 applications — 2 consumer platforms, a partner portal, and a CMS — as 1 of 5 developers under a team lead",
          "Merged 267 pull requests in six months, about a third of the team's frontend output",
          "Built on React 19, TypeScript, Tailwind v4, TanStack Query and Zustand in a multi-brand Turborepo monorepo",
          "Partnered with the product designer on a shared design system, enforced in code as one token set for colour, buttons, and alerts",
        ],
      },
      {
        projectName: "Content Discovery & Player",
        projectDetails: [
          "Built the catalogue home, in-place search, and category, provider and theme pages on live APIs",
          "Built a live activity feed over server-sent events, highlighting each new entry as it arrives",
          "Built mini player and picture-in-picture playback, keeping sessions alive while users browse the catalogue",
          "Let guests try content in demo mode, and let a second browser tab reuse a live session",
        ],
      },
      {
        projectName: "Authentication & Account Security",
        projectDetails: [
          "Rebuilt every sign-in dialog on one shared shell: a split layout on desktop, a bottom sheet on mobile",
          "Supported email or username, social, Telegram and wallet sign-in, with inline errors mapped from backend codes",
          "Built email verification with a resend countdown, gating payments until it is done",
          "Added two-factor authentication setup and reset, phone verification, and 2FA before a new payout address is saved",
        ],
      },
      {
        projectName: "Identity Verification (KYC)",
        projectDetails: [
          "Platform A — in-house flow: built the KYC module end to end as a resumable 8-screen flow — profile-level status checks, conditional mobile registration with OTP, bank detail submission, admin review, and a final amount challenge",
          "Held users in a pending state that survives reload and returns them to the correct stage on re-entry",
          "Platform B — Sumsub: integrated Sumsub's identity verification SDK, loaded only when opened, with tokens issued and refreshed by the backend and the result trusted only from Sumsub's server-side webhook",
          "Reused Sumsub's face check as the identity step for resetting 2FA, and ran the flow full-screen on phones in the user's own language",
        ],
      },
      {
        projectName: "Account Hub & Rewards",
        projectDetails: [
          "Built the account hub — overview, wallet, transactions and settings — with filtered history, paging and Excel export",
          "Built the loyalty, rewards and referral pages, with claiming wired to the backend",
          "Built public profiles that follow each user's privacy settings",
        ],
      },
      {
        projectName: "Localisation — 21 Languages",
        projectDetails: [
          "Took the platform from 4 to 21 languages, including right-to-left Arabic",
          "Added fonts for Arabic, Thai, Hindi and Cyrillic that download only when needed, and loaded each language as its own bundle",
          "Moved translations to a Google Sheet the product team edits, with a sync that refuses broken placeholders",
          "Found 283 strings that never reached translators, and fixed translated text overflowing its layout",
        ],
      },
      {
        projectName: "Web Performance & Analytics",
        projectDetails: [
          "Introduced the first analytics coverage on a platform that had none, implementing GA4 through GTM",
          "Defined the event schema for the full conversion funnel, from homepage view to signup and first purchase",
          "Added Consent Mode v2 by region, and kept sign-in and reset tokens out of every URL sent to Google",
          "Generated the GTM container from the app's own event list, and wrote a handover guide for the next owner",
        ],
      },
      {
        projectName: "AI-Assisted Delivery Workflows",
        projectDetails: [
          "Ran ticket and QA-defect work through Claude Code workflows: claimed from a shared sheet, built in its own git worktree, opened as a pull request, and checked in a real browser with screenshots",
          "Automated design checks that compare code against Figma for spacing, colour and radius",
          "Automated text-overflow audits at 8 screen widths, proving each fix by re-running the audit",
          "Ran an API contract test across every endpoint, reporting what changed since the last run",
          "Kept a person between finding and fixing — tools file tickets, people review them, nothing merges itself",
        ],
      },
      {
        projectName: "Engineering Workflow",
        projectDetails: [
          "Shipped git hooks that give all 5 developers the same formatting, lint and type checks with no setup",
          "Extended them to generate currency icons and flag new text for translation",
          "Ran a security pass that stopped mock data reaching production and closed client-side data leaks",
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

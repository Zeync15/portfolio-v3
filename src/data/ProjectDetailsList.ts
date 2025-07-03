export type ProjectDetailsProps = {
  backgroundImg: string;
  projectName: string;
  mainTechs: string[];
  projectDetails: string;
  demoUrl: string;
  codeUrl: string;
  techStacks: string[];
};

export const ExchangeRateProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/exchange-rate.jpg",
  projectName: "Exchange Rate",
  mainTechs: ["React", "Tailwind", "React Table"],
  projectDetails:
    "As part of the Maybank project, I developed a dynamic account listing table that supports real-time currency conversion based on user-selected exchange rates. The table displays key account details including name, number, original currency, and balances. To optimize performance and reduce backend load, the exchange rate calculation is handled entirely on the frontend. Rather than converting all accounts (e.g., 10,000 entries), we only compute exchange rates for the 20 records displayed per page. This ensures a responsive user experience while maintaining scalability. The conversion respects the original currency of each account and dynamically reflects the selected target currency from the dropdown.",
  demoUrl: "https://exchange-rate-5173.vercel.app/",
  codeUrl: "https://github.com/Zeync15/exchange-rate",
  techStacks: ["React", "Tailwind", "Vite", "React Table", "Vercel"],
};

export const DateWithMeProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/date-with-me.png",
  projectName: "Date With Me",
  mainTechs: ["Nextjs", "Tailwind", "Firebase"],
  projectDetails:
    "A website I wrote for my gf with the design of a game we both play, TFT. With the purpose of deciding what to do.",
  demoUrl: "https://augments-green.vercel.app/",
  codeUrl: "https://github.com/Zeync15/augments",
  techStacks: ["React", "Tailwind", "Firebase"],
};

export const CsvProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/csv-importer.jpg",
  projectName: "CSV Importer",
  mainTechs: ["Nextjs", "Papa Parse", "React Table"],
  projectDetails:
    "This CSV Importer app (mock) is built using Nextjs, Papa Parse and React Table. It was one of the apps I built during my frontend software developer job at OmniGeo Solutions. Users can upload their CSV files to the app with different values. The app used a CSV parser called - Papa Parse to get all the CSV values, and render them to a table with React Table. The users can edit their CSV files before submitting them to our server. I also integrated NextAuth, a Nextjs authentication solution to make sure users log in before uploading their CSV files. This app is deployed to vercel.",
  demoUrl: "https://next-csv-importer-zeync15.vercel.app/",
  codeUrl: "https://github.com/Zeync15/next-csv-importer",
  techStacks: [
    "Nextjs",
    "Papa Parse",
    "React Table",
    "Bootstrap",
    "React Stepper",
    "Next Auth",
    "Vercel",
  ],
};

export const ContextMappingProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/context-mapping.jpg",
  projectName: "Context Mapping",
  mainTechs: ["Nextjs", "Xarows", "useRef"],
  projectDetails:
    "This Context Mapping app (mock) is built using Nextjs and Xarrows. It was one of the apps I built during my frontend developer job at OmniGeo Solutions. This demo is an oversimplified version of the context mapping app I have created. I created this interface with 2 columns of sample values and used Xarrows to link between them. When any value from column A and column B are linked, both of their value will be shown. The way I created this app was by manipulating multiple arrays and using the useRef react hooks so that I can call the Xarrows function multiple time. This app is useful when users upload values that are different from what we expected, and I can prompt the user to match their value with our server's value. Then, the backend can add some function to overwrite the user's value. This app is deployed to vercel.",
  demoUrl: "https://next-context-mapping-zeync15.vercel.app/",
  codeUrl: "https://github.com/Zeync15/next-context-mapping",
  techStacks: ["Nextjs", "React Xarows", "useRef", "array", "vercel"],
};

export const CampsiteProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/campsite.jpg",
  projectName: "Campsite",
  mainTechs: ["React", "Firebase", "Google Maps API"],
  projectDetails:
    "I created this Campsite app for my final year project back in 2021. This app aims to create an app that focused on letting the users share campsites information and organise campsites events. There are some similar campsite applications on the internet but in my opinion, lacking some functions users need. So my objectives were to create an easy-to-use web app, design a clean user interface, and implement important functions on the web app. For the frontend, I used React and Semantic Ui to create the user interface. For the backend, I used Firebase to store data, authentication and hosting.",
  demoUrl: "https://campsite-7994b.firebaseapp.com/",
  codeUrl: "https://github.com/Zeync15/campsite",
  techStacks: [
    "React",
    "Firebase",
    "Google Maps API",
    "Redux",
    "React Router Dom",
    "Formik",
    "Semantic UI",
  ],
};

export const UniClothProjectDetails: ProjectDetailsProps = {
  backgroundImg: "/assets/projects/unicloth.jpg",
  projectName: "UniCloth",
  mainTechs: ["NodeJs", "MongoDB", "Express"],
  projectDetails:
    "This mock Uniqlo app was my first attempt to create a web application back in 2020. The app was a rework from a web development assignment I got back in university. That assignment got me interested in web development and I spent a lot of time learning how to become a web developer. This web app is just some basic static website, with packages that handle email and password login. All user data were encrypted using bcrypt, stored in MongoDB and hosted on Heroku.",
  demoUrl: "https://serene-headland-89920.herokuapp.com/",
  codeUrl: "https://github.com/Zeync15/UniCloth",
  techStacks: [
    "JavaScript",
    "NodeJs",
    "bcrypt",
    "MongoDB",
    "Express",
    "Heroku",
  ],
};

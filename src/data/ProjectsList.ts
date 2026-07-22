type ProjectProps = {
  title: string;
  tech: string;
  slug: string;
  img: string;
  demo: string;
  code: string;
};

export const ProjectsList: ProjectProps[] = [
  {
    title: "Exchange Rate",
    tech: "React, Tailwind, React Table",
    slug: "exchange-rate",
    img: "/assets/projects/exchange-rate.jpg",
    demo: "https://exchange-rate-5173.vercel.app/",
    code: "https://github.com/Zeync15/exchange-rate",
  },
  {
    title: "Date With Me",
    tech: "Next.js, Tailwind, Firebase",
    slug: "date-with-me",
    img: "/assets/projects/date-with-me.png",
    demo: "https://augments-green.vercel.app/",
    code: "https://github.com/Zeync15/augments",
  },
  {
    title: "CSV Importer",
    tech: "Next.js, Papa Parse, React Table",
    slug: "csv-importer",
    img: "/assets/projects/csv-importer.jpg",
    demo: "https://next-csv-importer-zeync15.vercel.app/",
    code: "https://github.com/Zeync15/next-csv-importer",
  },
  {
    title: "Context Mapping",
    tech: "Next.js, Xarrows, useRef",
    slug: "context-mapping",
    img: "/assets/projects/context-mapping.jpg",
    demo: "https://next-context-mapping-zeync15.vercel.app/",
    code: "https://github.com/Zeync15/next-context-mapping",
  },
  {
    title: "Campsite (FYP)",
    tech: "React, Firebase, Google Maps API",
    slug: "campsite",
    img: "/assets/projects/campsite.jpg",
    demo: "https://campsite-7994b.firebaseapp.com/",
    code: "https://github.com/Zeync15/campsite",
  },
  {
    title: "UniCloth",
    tech: "NodeJs, MongoDB, Heroku",
    slug: "unicloth",
    img: "/assets/projects/unicloth.jpg",
    demo: "https://serene-headland-89920.herokuapp.com/",
    code: "https://github.com/Zeync15/UniCloth",
  },
];

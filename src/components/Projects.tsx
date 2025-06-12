import ProjectItem from "./ProjectItem";

const Projects = () => {
  // const navLogo = "/assets/zeyen-logo-larger-outline.png";
  const exchangeRateImg = "/assets/projects/exchange-rate.png";
  const dateWithMeImg = "/assets/projects/date-with-me.png";
  const csvImg = "/assets/projects/csv-importer.jpg";
  const contextMappingImg = "/assets/projects/context-mapping.jpg";
  const campsiteImg = "/assets/projects/campsite.jpg";
  const uniclothImg = "/assets/projects/unicloth.jpg";

  return (
    <div id="projects">
      <div className="invisible mb-5 lg:mb-10">Project</div>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>

        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Exchange Rate"
            backgroundImg={exchangeRateImg}
            projectUrl="/exchangeRate"
            tech="React, Tailwind, React Table"
          />

          <ProjectItem
            title="Date With Me"
            backgroundImg={dateWithMeImg}
            projectUrl="/dateWithMe"
            tech="Nextjs, Tailwind, Firebase"
          />

          <ProjectItem
            title="CSV Importer"
            backgroundImg={csvImg}
            projectUrl="/csv"
            tech="Nextjs, Papa Parse, React Table"
          />

          <ProjectItem
            title="Context Mapping"
            backgroundImg={contextMappingImg}
            projectUrl="/contextMapping"
            tech="Nextjs, Xarrows, useRef"
          />

          <ProjectItem
            title="Campsite (FYP)"
            backgroundImg={campsiteImg}
            projectUrl="/campsite"
            tech="React, Firebase, Google Maps API"
          />

          <ProjectItem
            title="UniCloth"
            backgroundImg={uniclothImg}
            projectUrl="/uniCloth"
            tech="Nodejs, MongoDB, Heroku"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

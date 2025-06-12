import ProjectDetails from "@/components/ProjectDetails";
import { CsvProjectDetails } from "@/data/ProjectDetailsList";

const Csv = () => {
  const {
    backgroundImg,
    projectName,
    mainTechs,
    projectDetails,
    demoUrl,
    codeUrl,
    techStacks,
  } = CsvProjectDetails;
  return (
    <ProjectDetails
      backgroundImg={backgroundImg}
      projectName={projectName}
      mainTechs={mainTechs}
      projectDetails={projectDetails}
      demoUrl={demoUrl}
      codeUrl={codeUrl}
      techStacks={techStacks}
    />
  );
};

export default Csv;

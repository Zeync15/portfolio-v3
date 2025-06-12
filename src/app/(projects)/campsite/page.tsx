import ProjectDetails from "@/components/ProjectDetails";
import { CampsiteProjectDetails } from "@/data/ProjectDetailsList";

const Campsite = () => {
  const {
    backgroundImg,
    projectName,
    mainTechs,
    projectDetails,
    demoUrl,
    codeUrl,
    techStacks,
  } = CampsiteProjectDetails;
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
export default Campsite;

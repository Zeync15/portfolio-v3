import { ContextMappingProjectDetails } from "@/data/ProjectDetailsList";
import ProjectDetails from "@/components/ProjectDetails";

const ContextMapping = () => {
  const {
    backgroundImg,
    projectName,
    mainTechs,
    projectDetails,
    demoUrl,
    codeUrl,
    techStacks,
  } = ContextMappingProjectDetails;
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

export default ContextMapping;

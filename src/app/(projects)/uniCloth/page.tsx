import ProjectDetails from "@/components/ProjectDetails";
import { UniClothProjectDetails } from "@/data/ProjectDetailsList";

const Unicloth = () => {
  const {
    backgroundImg,
    projectName,
    mainTechs,
    projectDetails,
    demoUrl,
    codeUrl,
    techStacks,
  } = UniClothProjectDetails;

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
export default Unicloth;

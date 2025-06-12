import ProjectDetails from "@/components/ProjectDetails";
import { ExchangeRateProjectDetails } from "@/data/ProjectDetailsList";

const ExchangeRate = () => {
  const {
    backgroundImg,
    projectName,
    mainTechs,
    projectDetails,
    demoUrl,
    codeUrl,
    techStacks,
  } = ExchangeRateProjectDetails;
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

export default ExchangeRate;

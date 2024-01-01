import PortfolioComponent from "../components/portfolio-component/portfolioComponent";
import projectData from "@/app/data/project-data";
import { Project } from "@/app/data/project-data";

export default function Portfolio() {
  const project_data: Project[] = projectData;
  return <PortfolioComponent project_data={project_data} />;
}

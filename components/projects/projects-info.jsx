import SectionText from "../global/section-text"
import SectionTitle from "../global/section-title"
import { iconsProjects } from '../../data/projects/projects-info-data';
import ProjectsList from "./projects-list";
import CenterTitle from "../global/center-title";

const ProjectsInfo = () => {
  return(
    <>
      <SectionTitle title="Projects" />
      <SectionText
        text="Here you can see important moments in my life like software developer where I show you what steps I have taken to become who I'm today."
        icons={ iconsProjects } 
      />

      <CenterTitle title="My featured projects" />

      <ProjectsList />
    </>
  );
}

export default ProjectsInfo;
import SectionText from "../global/section-text"
import SectionTitle from "../global/section-title"
import { iconsProjects } from '../../data/projects/projects-info-data';

const ProjectsInfo = () => {
  return(
    <>
      <SectionTitle title="Projects" />
      <SectionText
        text="Here you can see important moments in my life like software developer where I show you what steps I have taken to become who I'm today."
        icons={ iconsProjects } 
      />

    </>
  );
}

export default ProjectsInfo;
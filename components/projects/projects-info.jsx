import SectionText from '../global/section-text'
import SectionTitle from '../global/section-title'
import { iconsProjects } from '../../data/projects/projects-info-data';
import ProjectsList from './projects-list';
import CenterTitle from '../global/center-title';
import styles from '../../styles/components/projects/ProjectInfo.module.scss';

const ProjectsInfo = () => {
  return(
    <div className={ styles.container }>
      <SectionTitle title="Projects" />
      <SectionText
        text="Here I show my learning with personal projects in frontend technologies, deployment and version control."
        icons={ iconsProjects } 
      />

      <CenterTitle title="My featured projects" />

      <ProjectsList />
    </div>
  );
}

export default ProjectsInfo;
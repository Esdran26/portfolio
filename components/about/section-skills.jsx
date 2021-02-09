import CenterTitle from '../global/center-title';
import BackendSkills from './backend-skills';
import FrontendSkills from './fronted-skills';

const SectionSkills = () => {
  return(
    <>
      <CenterTitle title="skills" />
      <FrontendSkills />
      <BackendSkills />
    </>
  );
}

export default SectionSkills;
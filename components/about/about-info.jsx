import SectionText from '../global/section-text';
import SectionTitle from '../global/section-title';
import { iconsAbout } from '../../data/about-info/about-info-data';
import SectionSkills from './section-skills';

const AboutInfo = () => {
  return(
    <div>
      <SectionTitle title="About me" />
      <SectionText
        text="I'm a systems engineering student and I don't stop learning about web development and other related branches, I am curious, kind, organized and I can achieve my goals with responsibility and determination."
        title="My Hobbies"
        icons={ iconsAbout }
      />

      <SectionSkills />
    </div>
  );
}

export default AboutInfo;
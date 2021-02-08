import SectionText from './section-text';
import SectionTitle from './section-title';
import { iconsAbout } from '../../data/about-info/about-info-data';

const AboutInfo = () => {
  return(
    <div>
      <SectionTitle title="About me" />
      <SectionText
        text="I'm a systems engineering student and I don't stop learning about web development and other related branches, I am curious, kind, organized and I can achieve my goals with responsibility and determination."
        title="My Hobbies"
        icons={ iconsAbout }
      />
    </div>
  );
}

export default AboutInfo;
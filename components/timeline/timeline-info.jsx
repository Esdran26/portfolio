import { iconsTimeline } from "../../data/timeline-info/timeline-info-data";
import CenterTitle from "../global/center-title";
import SectionText from "../global/section-text"
import SectionTitle from "../global/section-title"
import Timeline from "./timeline";
import styles from '../../styles/components/timeline/TimelineInfo.module.scss';

const TimelineInfo = () => {
  return(
    <div className={ styles.container }>
      <SectionTitle title="Timeline" />
      <SectionText
        text="Here you can see important moments in my life like software developer where I show you what steps I have taken to become who I'm today."
        icons={ iconsTimeline } 
      />

      <CenterTitle title="Jobs & Education" />

      <Timeline />
    </div>
  );
}

export default TimelineInfo;
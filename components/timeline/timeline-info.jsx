import { iconsTimeline } from "../../data/timeline-info/timeline-info-data";
import CenterTitle from "../global/center-title";
import SectionText from "../global/section-text"
import SectionTitle from "../global/section-title"

const TimelineInfo = () => {
  return(
    <>
      <SectionTitle title="Timeline" />
      <SectionText
        text="Here you can see important moments in my life like software developer where I show you what steps I have taken to become who I'm today."
        icons={ iconsTimeline } 
      />

      <CenterTitle title="Jobs & Education" />
    </>
  );
}

export default TimelineInfo;
import 
{ 
  VerticalTimeline, 
  VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  return(
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#227093', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #227093' }}
        date="August 2020 - January 2021"
        iconStyle={{ background: '#227093', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faBriefcase } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Frontend Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bogota, Colombia
        </h4>
        <p>
          Work remotely with frontend technologies
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#227093', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #227093' }}
        date="June 2020"
        iconStyle={{ background: '#227093', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faBriefcase } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Freelancer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bucaramanga, Colombia
        </h4>
        <p>
          Develop web pages as self-employed
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#d86737', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #d86737' }}
        date="January 2021 - Present"
        iconStyle={{ background: '#d86737', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faMedal } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Competitor at Comfeco
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bucaramanga, Colombia
        </h4>
        <p>
          Community Fest and Code
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#d86737', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #d86737' }}
        date="November 2018"
        iconStyle={{ background: '#d86737', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faMedal } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Programming Challenge
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bucaramanga, Colombia
        </h4>
        <p>
          First place to develop a pollution app
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#00565E', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #00565E' }}
        date="2021 - Present"
        iconStyle={{ background: '#00565E', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faGraduationCap } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Systems Engineering Student
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Unidades Tecnologicas de Santander
        </h4>
        <p>
          Continuing with my Knowledge
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#00565E', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #00565E' }}
        date="October 2020 - February 2021"
        iconStyle={{ background: '#00565E', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faGraduationCap } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          MERN Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Online Course
        </h4>
        <p>
          I'm learned React, Hooks, ExpressJS, NodeJS, MongoDB, etc
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#00565E', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #00565E' }}
        date="2018 - 2021"
        iconStyle={{ background: '#00565E', color: '#fff' }}
        icon={<FontAwesomeIcon icon={ faGraduationCap } />}
      >
        <h3 style={{ color: 'white' }} className="vertical-timeline-element-title">
          Systems Technology
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Unidades Tecnologicas de Santander
        </h4>
        <p>
          I finished this career learning the programming bases
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
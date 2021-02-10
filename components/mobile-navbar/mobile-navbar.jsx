import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/mobile-navbar/MobileNavbar.module.scss';

const MobileNavbar = ({ section = 'Home' }) => {
  let styleSVGHome, styleSVGAbout, styleSVGTimeline, styleSVGProjects;
  let styleSmallHome, styleSmallAbout, styleSmallTimeline, styleSmallProjects;
  let positionFixed;

  section !== 'Home'
    ? positionFixed = 'fixed'
    : positionFixed = 'initial';

  switch (section) {
    case 'Home':
      styleSVGHome = {
        color: 'white'
      }
      styleSmallHome = {
        display: 'block'
      }
      break;

    case 'About':
      styleSVGAbout = {
        color: 'white'
      }
      styleSmallAbout = {
        display: 'block'
      }
      break;

    case 'Timeline':
      styleSVGTimeline = {
        color: 'white'
      }
      styleSmallTimeline = {
        display: 'block'
      }
      break;

    case 'Projects':
      styleSVGProjects = {
        color: 'white'
      }
      styleSmallProjects = {
        display: 'block'
      }
      break;
  
    default:
      styleSVGHome = {
        color: 'white'
      }
      styleSmallHome = {
        display: 'block'
      }
      break;
  }

  return(
    <div 
      style={{ position: positionFixed }} 
      className={ styles.mobile }
    >
      <Link  href="/">
        <a className={ styles.link }>
          <FontAwesomeIcon 
            style={ styleSVGHome } 
            icon={ faHome }
          />
          <small 
            style={ styleSmallHome }
            className={ styles.small }
          >
            { section }
          </small>
        </a>
      </Link>

      <Link  href="/about">
        <a className={ styles.link }>
          <FontAwesomeIcon 
            style={ styleSVGAbout } 
            icon={ faUser }
          />
          <small 
            style={ styleSmallAbout }
            className={ styles.small }
          >
            { section }
          </small>
        </a>
      </Link>

      <Link  href="/timeline">
        <a className={ styles.link }>
          <FontAwesomeIcon 
            style={ styleSVGTimeline } 
            icon={ faHistory }
          />
          <small 
            style={ styleSmallTimeline }
            className={ styles.small }
          >
            { section }
          </small>
        </a>
      </Link>

      <Link  href="/">
        <a className={ styles.link }>
          <FontAwesomeIcon 
            style={ styleSVGProjects } 
            icon={ faCodeBranch }
          />
          <small 
            style={ styleSmallProjects }
            className={ styles.small }
          >
            { section }
          </small>
        </a>
      </Link>

    </div>
  );
}

export default MobileNavbar;
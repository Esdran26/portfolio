import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const HomeInfoMedia = () => {
  return(
    <>
      <Link 
        href="https://www.facebook.com/Esdran26"
      >
        <a target="_blank">
          <FontAwesomeIcon icon={ faFacebookF } />
        </a>
      </Link>

      <Link href="https://www.instagram.com/Esdran26/">
        <a target="_blank">
          <FontAwesomeIcon icon={ faInstagram } />
        </a>
      </Link>
      
      
      <Link href="https://github.com/Esdran26">
        <a target="_blank">
          <FontAwesomeIcon icon={ faGithub } />
        </a>
      </Link>
      
      <Link href="https://www.linkedin.com/in/andr%C3%A9s-vargas-586506185">
        <a target="_blank">
          <FontAwesomeIcon icon={ faLinkedinIn } />
        </a>
      </Link>
    </>
  );
}

export default HomeInfoMedia;
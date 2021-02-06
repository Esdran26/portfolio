import Link from 'next/link';
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/components/HomeInfo.module.scss';

const HomeInfo = () => {
  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.image }>
          <Image 
            alt="Andres Vargas"
            src={ `https://res.cloudinary.com/esdran26/image/upload/v1612371692/55358669_tok40d.jpg` }
            width={ 500 }
            height={ 500 }
            priority
          />
        </div>

        <div className={ styles.content }>
          <p>THIS IS ME</p>
          <h1>ANDRES VARGAS</h1>
          <p>Web Developer passionate about software development and
          keep learning new technologies, experiences and communities.</p>
          <br/>
          
          <div className={ styles.buttons }>
            <Link href="/">
              <a>Discover Now</a>
            </Link>
            <a 
              target="_blank" 
              href="/"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className={ styles.contact }>
        <div className={ styles.media }>
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
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
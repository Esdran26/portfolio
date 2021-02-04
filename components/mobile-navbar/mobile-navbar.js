import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/MobileNavbar.module.scss';

const MobileNavbar = ({ section }) => {
  

  return(
    <div className={ styles.mobile }>
      <Link href="/">
        <a className={ styles.link }>
          <FontAwesomeIcon icon={ faHome } />
          <small className={ styles.small }>Home</small>
        </a>
      </Link>

      <Link href="/">
        <a>
          <FontAwesomeIcon icon={ faUser } />
        </a>
      </Link>

      <Link href="/">
        <a>
          <FontAwesomeIcon icon={ faHistory } />
        </a>
      </Link>

      <Link href="/">
        <a>
          <FontAwesomeIcon icon={ faCodeBranch } />
        </a>
      </Link>
    </div>
  );
}

export default MobileNavbar;
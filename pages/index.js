import styles from '../styles/Home.module.scss';

import Navbar from '../components/navbar/navbar'
import HomeInfo from '../components/home-info/home-info';

export default function Home() {
  return (
    <div className={ styles.container }>
      <div className={ styles.background }>
        <Navbar
          transparent="on"
        />

        <HomeInfo />
      </div>
    </div>
  );
}

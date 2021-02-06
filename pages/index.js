import styles from '../styles/Home.module.scss';
import Head from 'next/head';

import Navbar from '../components/navbar/navbar'
import HomeInfo from '../components/home-info/home-info';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Andres Vargas | Porfolio</title>
      </Head>
      <div className={ styles.background }>
        <MobileNavbar section="Home" />
        <Navbar
          transparent="on"
        />

        <HomeInfo />
        
      </div>
    </div>
  );
}

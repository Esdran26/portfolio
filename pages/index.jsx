import styles from '../styles/Home.module.scss';
import Head from 'next/head';

import Navbar from '../components/navbar/navbar'
import HomeInfo from '../components/home/home-info';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
      <title>Andres Vargas | Portfolio</title>
        
        <meta name="title" content="Andres Vargas | Portfolio" />
        <meta name="description" content="This is my personal website, when I show my projects, timeline, who am I and more." />
        <link rel="shortcut icon" href="https://res.cloudinary.com/esdran26/image/upload/v1614278843/mobile_xi88d5.svg" type="image/x-icon"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vargasandres.com/" />
        <meta property="og:title" content="Andres Vargas | Portfolio" />
        <meta property="og:description" content="This is my personal website, when I show my projects, timeline, who am I and more." />
        <meta property="og:image" content="https://res.cloudinary.com/esdran26/image/upload/v1614268406/Mockup-Portfolio_q00ya8.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vargasandres.com/" />
        <meta property="twitter:title" content="Andres Vargas | Portfolio" />
        <meta property="twitter:description" content="This is my personal website, when I show my projects, timeline, who am I and more." />
        <meta property="twitter:image" content="https://res.cloudinary.com/esdran26/image/upload/v1614268406/Mockup-Portfolio_q00ya8.png" />
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

import Head from 'next/head';

import Navbar from '../components/navbar/navbar';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';
import AboutInfo from '../components/about/about-info';
import Footer from '../components/footer/footer';
import styles from '../styles/components/about/About.module.scss';

const About = () => {
  return (
    <div className={ styles.container }>
      <Head>
      <title>Andres Vargas | About</title>
        
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

        <meta http-equiv="Content-Type" content="text/html; ISO-8859-1" />
        <meta name="DC.Language" scheme="RFC1766" content="English" />
        <meta name="AUTHOR" content="Andres Felipe Vargas Gomez" />
        <meta name="KEYWORDS" content="Portfolio,Website,Personal,FrontEnd Developer,Web Developer" />
        <meta name="Resource-type" content="Document" />
        <meta name="DateCreated" content="Thu, 25 February 2021 11:30:00 GMT+5" />
        <meta name="Revisit-after" content="3 days" />
        <meta name="robots" content="ALL" />
      </Head>

      <MobileNavbar section="About" />
      <Navbar />

      <AboutInfo />

      <Footer />
    </div>
  );
}

export default About;
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
        <title>Andres Vargas | About me</title>
      </Head>

      <MobileNavbar section="About" />
      <Navbar transparent="off" />

      <AboutInfo />

      <Footer />
    </div>
  );
}

export default About;
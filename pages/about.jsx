import styles from '../styles/components/About.module.scss';
import Head from 'next/head';

import Navbar from '../components/navbar/navbar';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';
import AboutInfo from '../components/about/about-info';

const About = () => {
  return (
    <>
      <Head>
        <title>Andres Vargas | About me</title>
      </Head>

      <MobileNavbar section="About" />
      <Navbar transparent="off" />

      <AboutInfo />
    </>
  );
}

export default About;
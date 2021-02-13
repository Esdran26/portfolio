import Head from 'next/head';
import Footer from '../components/footer/footer';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';
import Navbar from '../components/navbar/navbar';
import ProjectsInfo from '../components/projects/projects-info';

const Projects = () => {
  return(
    <>
      <Head>
        <title>Andres Vargas | Projects</title>
      </Head>

      <MobileNavbar section="Projects" />
      <Navbar />

      <ProjectsInfo />

      <Footer />
    </>
  );
}

export default Projects;
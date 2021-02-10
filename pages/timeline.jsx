import Head from 'next/head';
import Footer from '../components/footer/footer';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';
import Navbar from '../components/navbar/navbar';
import TimelineInfo from '../components/timeline/timeline-info';

const Timeline = () => {
  return(
    <>
      <Head>
        <title>Andres Vargas | Timeline</title>
      </Head>

      <MobileNavbar section="Timeline" />
      <Navbar />

      <TimelineInfo />

      <Footer />
    </>
  );
}

export default Timeline;
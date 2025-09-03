import { useRef } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import { HeroSection } from './HeroSection';

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className='flex flex-col w-full'>
      <HeroSection scrollToAbout={scrollToAbout} />

      {/* Wrap About in a div with the ref */}
      <div ref={aboutRef} id="about-section" className=''>
        <About />
      </div>
      <div className=''>
        <Services />
      </div>
      <div className=''>
        <Projects />
      </div>

    </div>
  );
};

export default Home;
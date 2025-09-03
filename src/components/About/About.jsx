import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about-image.png";
import { ChevronDown, ChevronUp } from "lucide-react";

const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if mobile/tablet view
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsContentVisible(true);
      } else {
        setIsContentVisible(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const isAboutPage = location.pathname === "/about";

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      className="w-full max-w-[1728px] mx-auto lg:min-h-screen flex flex-col gap-10 lg:gap-[100px] xl:gap-[150px] px-12 xl:px-16 pt-20 md:pt-30 max-lg:px-12 max-md:px-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      
      <div className="flex flex-row max-md:flex-col lg:justify-between gap-[340px] max-lg:gap-[221px] max-md:gap-10">
        <header className="mix-blend-difference lg:w-[50%]">
          <h1 className="text-[32px]">
            About
          </h1>
        </header>

        <section className="mix-blend-difference lg:w-[50%] max-w-[628px] max-md:w-full">
          <p className="text-[32px] leading-none xl:leading-9 max-lg:text-2xl max-sm:text-xl">
            Luma handles large-scale electrical work for commercial environments, building systems that integrate seamlessly into the architecture.
          </p>
        </section>
      </div>

      
      <div className="w-full flex flex-col max-lg:gap-12 gap-30 justify-between lg:flex-row">
        {/* Content appears first on mobile/tablet */}
        <>
          <section className={`${isContentVisible && isMobileView && !isAboutPage ? 'hidden' : 'flex'}  flex-col gap-4 mix-blend-difference w-1/2 max-lg:w-full max-w-[569px] max-lg:order-2 lg:py-0 justify-end items-center `}>
            <p className="text-2xl max-lg:text-xl max-sm:text-lg leading-7">
              We're a team of electricians who take our craft seriously. Since 1989,
              when two brothers founded Luma with a shared commitment to quality and
              precision, we've built our reputation one project at a time.
            </p>
            <p className="text-2xl max-lg:text-xl max-sm:text-lg leading-7">
              What began as a small family-run operation has grown into a trusted name
              in large-scale commercial electrical work. Over the years, we've wired
              office towers, retail fit-outs, industrial facilities and more, always
              with the same attention to detail and reliability that set us apart from
              the beginning.
            </p>
            <p className="text-2xl max-lg:text-xl max-sm:text-lg leading-7">
              At Luma, every job matters. Whether we're powering an entire floor of a
              new development or upgrading systems in an existing space, we do it with
              pride. That pride has kept our clients coming back for decades.
            </p>
          </section>
          {/* Learn More Button - Visible only on tablet/mobile */}
          {isMobileView && !isAboutPage && (
            <button
              onClick={toggleContent}
              className="flex items-center justify-end gap-2 max-lg:order-2  text-lg font-medium hover:opacity-80 transition-opacity lg:hidden"
            >
              {isContentVisible ? (
                <>
                  Learn More <ChevronDown size={20} />
                </>
              ) : (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              )}
            </button>
          )}
        </>

        {/* Image appears after content on mobile/tablet */}
        <div className="mix-blend-difference w-1/2  max-lg:w-full max-lg:order-1 flex flex-col items-end">
          <img
            src={aboutImage}
            alt="About Luma Electrical"
            className="object-cover w-full max-w-[628px] h-auto sm:h-[403px] lg:h-[539px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
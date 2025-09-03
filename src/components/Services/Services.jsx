
import AccordionItem from "./AccordionItem";
import setvicesImage from "../../assets/services-image.png";
import { useEffect } from "react";
import { motion } from "framer-motion";


const Services = () => {
    const services = [
        "Fit-Outs",
        "Lighting",
        "Power & Cabling",
        "Maintenance"
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            className="w-full max-w-[1728px] mx-auto lg:min-h-screen flex flex-col gap-20 xl:gap-[150px] max-xl:px-12 max-md:px-8 xl:px-16 pt-30 max-sm:px-8 mb-10"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Top Section - About Header and Intro */}
            <div className="flex flex-row max-md:items-center max-md:flex-col lg:justify-between max-lg:gap-0 max-md:gap-10">
                <header className="mix-blend-difference w-[50%] max-md:w-full">
                    <h1 className="text-[32px]">
                        Services
                    </h1>
                </header>

                <section className="mix-blend-difference w-[50%] max-w-[628px] max-md:w-full">
                    <p className="text-[32px] leading-none xl:leading-9 max-lg:text-2xl max-sm:text-xl">
                        Our services span base build to final fit-out. Whether it's a new
                        office, retail space, or large-scale refurb, we deliver compliant,
                        efficient, and carefully executed work.
                    </p>
                </section>
            </div>

            {/* Bottom Section - Content and Image */}
            <div className="w-full flex flex-col justify-between items-start max-lg:items-end max-lg:gap-12 gap-16 lg:flex-row max-md:pl-0">
                {/* Content appears first on mobile/tablet */}
                <section className="flex flex-col mix-blend-difference w-1/2 max-w-[628px] max-md:w-full max-lg:order-2">
                    <img
                        src={setvicesImage}
                        alt="setvices Image"
                        className="object-cover w-full h-auto xl:h-[484px] xl:w-[513px]"
                    />
                </section>
                
                <nav className="w-1/2 flex flex-col items-start h-auto max-md:w-full lg:w-[628px] max-md:max-w-full">
                        {services.map((service, index) => (
                            <AccordionItem
                                key={index}
                                title={service}
                                isLast={index === service.length - 1} 
                            />
                        ))}
                    </nav>
                
            </div>
        </motion.div>
    );
};

export default Services;
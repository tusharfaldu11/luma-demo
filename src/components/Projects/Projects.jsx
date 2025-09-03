

import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../utils/constants";
import { motion } from "framer-motion";

function Projects() {   

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
            className="relative w-full overflow-hidden min-h-screen flex flex-col"
            style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, #000000 70%, rgba(0, 0, 0, 1) 100%`
            }}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="w-full max-w-[1728px] mx-auto flex flex-col pt-30 xl:pt-40 px-8 sm:px-12 md:px-16 gap-[81px] md:gap-[90px] xl:gap-[173px]">

                <h2 className="text-3xl text-white mix-blend-difference max-md:text-3xl max-sm:text-2xl">
                    Projects
                </h2>
                <div className="flex flex-row max-lg:flex-col justify-center gap-5 w-full lg:h-[376px] max-lg:gap-16 max-sm:gap-5 max-sm:h-auto">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            image={project.image}
                            altText={project.altText}
                            title={project.title}
                            location={project.location}
                            discprion={project.discprion}
                            year={project.year}
                            studio={project.studio}
                            text={project.text}
                        />
                    ))}
                </div>
            </div>
            
           
        </motion.div>
    );
}

export default Projects;

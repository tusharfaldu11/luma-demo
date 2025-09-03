
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function ProjectCard({ id, image, altText, title, location, studio, text }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${id}`);
    };


    return (
        <motion.div
            className="relative w-full flex flex-col max-lg:flex-row max-lg:gap-10 max-sm:w-full"
            whileHover="hover"
            initial="rest"
            onClick={handleClick}
        >
            <motion.div
                className="relative w-[143px] h-[128px] sm:w-[494px] md:h-[180px]  lg:w-full lg:h-[345px]   overflow-hidden"
            >
                <motion.img
                    src={image}
                    alt={altText}
                    className="absolute object-cover h-full w-full"
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="hidden lg:flex absolute inset-0 bg-black/70"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="hidden lg:flex absolute inset-0 flex-col justify-center items-center p-6 gap-4 text-center"
                    variants={{
                        rest: { opacity: 0, y: 20 },
                        hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    
                    {text && (
                        <p className="text-white text-xl max-w-full max-sm:text-xs leading-6">
                            {text}
                        </p>
                    )}
                    {studio && (
                        <p className="text-xl text-white/30 font-medium max-sm:text-base">
                            {studio}
                        </p>
                    )}
                </motion.div>
            </motion.div>
            <div className="lg:px-2 py-3">
                <h3 className="text-2xl text-white max-md:text-base mix-blend-difference">
                    {title}
                </h3>
                <p className="text-base text-white max-sm:text-xs mix-blend-difference">
                    {location}
                </p>
            </div>

        </motion.div>
    );
}

export default ProjectCard;
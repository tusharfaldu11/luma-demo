import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../utils/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

function ProjectShowcase() {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentIndex = projects.findIndex(p => p.id === Number(id));
    const project = projects[currentIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); // Reset scroll when project changes

    if (!project) return <div>Project not found</div>;

    const navigateToProject = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
        } else {
            newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
        }
        navigate(`/projects/${projects[newIndex].id}`);
    };

    return (
        <div className="w-full min-h-screen flex flex-col pt-30 lg:pt-40 px-8 sm:px-12 md:px-16 lg:px-0 gap-8 md:gap-9 lg:gap-11"
            style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, #000000 70%, rgba(0, 0, 0, 1) 100%`
            }}>

            <div className="w-full max-w-[1728px] mx-auto lg:px-16 flex flex-col lg:flex-row justify-between max-lg:gap-[113px]">                
                <div className="w-full flex flex-col gap-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl text-white mix-blend-difference">
                        {project.title}
                    </h1>
                    <div className="flex flex-row gap-20 xl:gap-40">
                        <p className="text-base sm:text-xl md:text-2xl text-white opacity-50 mix-blend-difference">
                            {project.location}
                        </p>
                        <p className="text-base sm:text-xl md:text-2xl text-white opacity-50 mix-blend-difference">
                            {project.year}
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    
                        <img
                            src={project.image}
                            alt={project.altText}
                        className="w-full h-auto md:h-[579px] lg:w-[877px] lg:max-h-[346px] object-cover"
                        />
                    
                    <div className="w-full flex flex-col md:flex-row mt-8 justify-center gap-16 ">
                        
                        <div className="w-full max-w-[511px] max-lg:w-[330px] text-base sm:text-xl lg:text-2xl text-white mix-blend-difference leading-7">
                            {project.discprion}
                        </div>

                        <div className="w-full sm:w-[331px] sm:mt-0 flex flex-col gap-5">
                            <blockquote className="text-base sm:text-xl lg:text-xl text-white mix-blend-difference leading-6">
                                &quot;{project.text}&quot;
                            </blockquote>
                            <p className="text-xs sm:text-xl lg:text-base text-white mix-blend-difference">
                                {project.studio}
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
            

            <div className="w-full flex justify-between max-w-[1728px] mx-auto lg:px-24 py-4 mt-auto pb-10">
                <button
                    onClick={() => navigateToProject('prev')}
                    className="text-white/80 hover:opacity-80 transition-opacity"
                    aria-label="Previous project"
                >
                    <ArrowLeft size={33} strokeWidth={2} />
                </button>
                <button
                    onClick={() => navigateToProject('next')}
                    className="text-white hover:opacity-80 transition-opacity"
                    aria-label="Next project"
                >
                    <ArrowRight size={33} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}

export default ProjectShowcase;
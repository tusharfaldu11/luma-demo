import { MoveDown } from "lucide-react";

export const HeroContent = ({ scrollToAbout }) => {
    return (
        <main className="absolute inset-0 flex flex-col items-center justify-between w-full max-lg:px-12 max-md:px-[41px]">
            <div className="w-full flex-grow flex items-center justify-center">
                <h1 className="text-5xl sm:text-8xl text-white mix-blend-difference text-start lg:text-center">
                    Powering commercial spaces.
                </h1>
            </div>

            <div className="w-full flex justify-center items-end pb-16 max-md:pb-24">
                <button
                    onClick={scrollToAbout}
                    className="flex gap-1 items-center mix-blend-difference cursor-pointer
                     motion-safe:animate-[bounce_1s_ease-in-out_3]
                     hover:motion-safe:animate-bounce focus:motion-safe:animate-bounce"
                >
                    <MoveDown className="size-5 text-white/50" />
                    <p className="text-[20px] text-white/50">Find out more</p>
                </button>
            </div>
        </main>
    );
};
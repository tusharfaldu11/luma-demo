
import { Navigation } from "./Navigation";
import { HeroContent } from "./HeroContent";
import heroImage from "../../assets/hero-image.png";

export const HeroSection = ({ scrollToAbout }) => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="heroImage"
                    className="object-cover size-full"
                />

            </div>
            <div className="absolute inset-0 bg-black/5"></div>
            <Navigation />
            <HeroContent scrollToAbout={scrollToAbout} />
        </section>
    );
};

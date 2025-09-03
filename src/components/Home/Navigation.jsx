import * as React from "react";
import { Logo } from "../Common/Logo";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "../../utils/constants";
import { CompanyInfo } from "../Footer/CompanyInfo";
import LogoGroupBlack from "../../assets/LogoGroupBlack.png"
import LogoGroupWhite from "../../assets/LogoGroupWhite.png"




export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolledPastHero, setIsScrolledPastHero] = React.useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar background only
    React.useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-section');
            if (!aboutSection) return;

            const heroHeight = window.innerHeight;
            const aboutSectionTop = aboutSection.getBoundingClientRect().top;
            setIsScrolledPastHero(aboutSectionTop <= 0 || window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when clicking on navigation items
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Check if current page is home
    const isHomePage = location.pathname === "/" ||
        location.pathname === "/projects" ||
        location.pathname.startsWith("/projects/");
    const isOtherPage = location.pathname === "/about" ||
        location.pathname === "/services" ||
        location.pathname === "/contact";

    // Determine if we should use mix-blend-difference
    const shouldUseBlendDifference = isHomePage && !isScrolledPastHero;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-[87px] sm:h-[87px] transition-all duration-300 z-50 max-lg:px-12 max-md:px-8 ${shouldUseBlendDifference ? 'text-white mix-blend-difference bg-transparent' : 'text-text-neutral-800'}`}
            >
                {/* Gradient + blur overlay when scrolled */}
                {isScrolledPastHero && (
                    <div aria-hidden className="absolute inset-0 pointer-events-none transition-opacity duration-300">
                        {/* Light overlay for contrast with black text (adjust color/opacity to taste) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
                        {/* Optional: blur underlying content for readability */}
                        <div className="absolute inset-0 backdrop-blur-xl" />
                    </div>
                )}
                {isOtherPage && (
                    <div aria-hidden className="absolute inset-0 pointer-events-none transition-opacity duration-300">
                        {/* Light overlay for contrast with black text (adjust color/opacity to taste) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
                        {/* Optional: blur underlying content for readability */}
                        <div className="absolute inset-0 backdrop-blur-xl" />
                    </div>
                )}

                <div className="flex justify-between items-center lg:px-16 max-w-[1728px] mx-auto h-full relative z-10">
                    <Link to="/" className="w-full">
                        <Logo isScrolled={isScrolledPastHero || !isHomePage} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-8 items-center">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`text-2xl hover:opacity-80 transition-opacity ${shouldUseBlendDifference ? 'text-white mix-blend-difference' : 'text-black'} ${location.pathname === item.href ? 'font-medium' : ''}`}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden focus:outline-none flex items-center h-full"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <X className={`h-11 w-11 ${shouldUseBlendDifference ? 'text-white' : 'text-black'}`} />
                        ) : (
                            <Menu className={`h-11 w-11 ${shouldUseBlendDifference ? 'text-white mix-blend-difference' : 'text-black'}`} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Animated blur overlay */}
                    <div className={`lg:hidden fixed inset-0 bg-black/80 z-30 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Mobile menu */}
                    <div className={`lg:hidden fixed inset-0 z-40 pt-[87px] px-8 sm:px-12 py-8 transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className="flex flex-col w-full gap-10">
                            <div className="flex flex-col gap-0 items-start">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className="text-[32px] text-white hover:opacity-80 transition-opacity w-full py-0"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-row max-md:flex-col gap-10 mt-10 sm:mt-60">
                                <section className="flex flex-row gap-[18px]">
                                    <div className="top-0 left-0">
                                        <img src={LogoGroupBlack} alt="logoBlack" className={`h-[90px] w-[136px] object-contain `} />
                                    </div>
                                    <div className="top-px">
                                        <img src={LogoGroupWhite} alt="logoBlack" className={`h-[90px] w-[136px] object-contain`} />
                                    </div>
                                </section>
                                <CompanyInfo />

                            </div>
                            <footer className="w-full flex flex-row justify-between">
                                <div className="text-left">
                                    <p className="text-base md:text-xl lg:text-2xl text-white">
                                        Luma Electrical 2025©
                                    </p>
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="text-base md:text-xl lg:text-2xl text-white">
                                        Site by Mindel
                                    </p>
                                </div>
                            </footer>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};
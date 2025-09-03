
import ContactForm from "./ContactForm";
import { CompanyInfo } from "../Footer/CompanyInfo";
import { LogoGrid } from "../Footer/LogoGrid";
import { NavigationLinks } from "../Footer/NavigationLinks";

function ContactPage() {
    return (
        <div className="flex flex-col w-full justify-center items-center mx-auto text-neutral-800 min-h-screen">
            <div className="relative w-full max-w-[1728px] mx-auto flex flex-row max-lg:flex-col md:gap-x-[250px] justify-between px-10 xl:px-16 pt-30 max-lg:px-12 max-md:px-8 ">
                <div className="relative w-full flex flex-row lg:flex-col max-md:flex-col gap-[89px] sm:gap-[250px] lg:w-1/2">
                    <h1 className="text-[32px] max-md:text-[20px] leading-[40px]">
                        Contact
                    </h1>
                    <ContactForm />
                </div>
                <div className="w-full lg:w-1/2 lg:max-w-[513px] flex flex-col">
                    <div className="flex flex-col max-lg:flex-row max-md:flex-col gap-20 lg:gap-[105px]">
                        <LogoGrid />
                        <CompanyInfo />
                        <NavigationLinks className="flex-row gap-8" />
                    </div>
                </div>             
            </div>
            <footer className="w-full max-w-[1728px] mx-auto flex flex-row justify-between items-center py-10 px-10 xl:px-16 max-lg:px-12 max-md:px-8">
                <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl lg:text-2xl text-black">
                        Luma 2025©
                    </p>
                </div>
            </footer>
        </div>
        
    );
}

export default ContactPage;

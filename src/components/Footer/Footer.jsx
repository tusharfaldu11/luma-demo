import * as React from "react";
import { NavigationLinks } from "./NavigationLinks";
import { LogoGrid } from "./LogoGrid";
import { CompanyInfo } from "./CompanyInfo";

const Footer = () => {
  return (
    <section className="w-full max-w-[1728px] mx-auto flex flex-col gap-10 px-5 xl:px-16 py-20 lg:pt-40 max-lg:px-12 max-md:px-8">
      <div className="max-w-full flex flex-col gap-10 sm:gap-20">
        {/* Main content container */}
        <div className="flex flex-row max-md:flex-col gap-20 justify-center xl:justify-between items-start">
          <NavigationLinks className="flex-col gap-8" />
          <LogoGrid />
          <CompanyInfo />
        </div>

        {/* Footer bottom section */}
        <footer className="w-full flex flex-row justify-between items-center">
          <div className="text-left">
            <p className="text-base md:text-xl lg:text-2xl text-black">
              Luma 2025©
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer;
"use client";

import { Link } from "react-router-dom";

export function CompanyInfo({ className }) {
    const contactMethods = [
        "(+1) 123 234 456",
        "hello@website.com",
        "Facebook",
        "Instagram",
        "LinkedIn"
    ];

    return (
        <div className={`flex flex-row max-md:gap-[20px] max-lg:gap-[81px] lg:gap-[70px] 2xl:gap-[100px] ${className}`}>
            <address className="flex flex-col max-lg:order-2 gap-5 lg:gap-10 lg:h-[162px] not-italic">
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl">
                    Demo website.
                </div>
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl">
                    New York, 5000 <br />  United States
                </div>
            </address>

            <div className="flex flex-col gap-0 max-lg:order-1 text-base md:text-lg lg:text-xl xl:text-2xl">
                {contactMethods.map((method) => {
                    const isEmail = method.includes("@");
                    const isPhone = method.includes("(+61)");
                    const isSocial = !isEmail && !isPhone;

                    if (isEmail) {
                        return (
                            <Link
                                key={method}
                                to={`mailto:${method}`}
                                className="text-base md:text-lg lg:text-xl xl:text-2xl hover:underline mb-8"
                            >
                                {method}
                            </Link>
                        );
                    }

                    if (isPhone) {
                        return (
                            <Link
                                key={method}
                                to={`tel:${method}`}
                                className="text-base md:text-lg lg:text-xl xl:text-2xl hover:underline lg:mb-2"
                            >
                                {method}
                            </Link>
                        );
                    }

                    if (isSocial) {
                        return (
                            <Link
                                key={method}
                                to={`#${method.toLowerCase()}`}
                                className="text-base md:text-lg lg:text-xl xl:text-2xl hover:underline"
                            >
                                {method}
                            </Link>
                        );
                    }

                    return (
                        <div key={method} className="text-base md:text-lg lg:text-xl xl:text-2xl">
                            {method}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

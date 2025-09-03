
import { Link } from "react-router-dom";
import { navigationItems } from "../../utils/constants";

export function NavigationLinks({className}) {

    return (
        <nav className={`max-xl:hidden inline-flex left-0 top-px justify-center items-start ${className}`}>
            {navigationItems.map((item) => (
                <Link
                    key={item.label}
                    to={item.href}
                    className="relative text-2xl underline mix-blend-difference"
                >
                    <span className="text-2xl underline max-sm:text-xl">
                        {item.label}
                    </span>
                </Link>
            ))}
        </nav>
    );
}

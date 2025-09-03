import { Outlet, useLocation } from "react-router";
import Footer from "./Footer/Footer";
import { Navigation } from "./Home/Navigation";


const Layout = () => {
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isContactPage = location.pathname === "/contact";

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="">
                {!isHomePage && <Navigation isHomePage={false} />}

            </div>
            <main className="flex flex-col w-full justify-center items-center mx-auto bg-stone-900/20 text-neutral-800">
                <Outlet />
            </main>
            {!isContactPage &&
                <div className="flex flex-col w-full justify-center items-center mx-auto bg-stone-900/20 text-neutral-800">
                    <Footer />
                </div>
            }
            
        </div>
    )
}

export default Layout;
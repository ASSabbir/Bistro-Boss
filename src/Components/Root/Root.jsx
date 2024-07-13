import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    const flag = pathname.includes('/login')

    if (flag) {
        return (
            <Outlet></Outlet>
        )

    }
    else {
        return (
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    }
};

export default Root;
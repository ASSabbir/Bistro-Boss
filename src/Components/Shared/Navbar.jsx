import { Link } from "react-router-dom";


const Navbar = () => {
    const navlinks=<>
        <li className="font-inter font-medium text-lg"><Link to={'/'}>Home</Link></li>
        <li className="font-inter font-medium text-lg"><Link to={'/menu'}>Menu</Link></li>
        <li className="font-inter font-medium text-lg"><Link to={'/ourshop/SALAD'}>Our Shop</Link></li>
        <li className="font-inter font-medium text-lg"><Link to={'/login'}>Login</Link></li>
    </>
    return (
        <div className="navbar fixed z-50 bg-black bg-opacity-40 bg-blur text-white">
            <div className="navbar-start md:pl-20">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2  shadow">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex flex-col items-center ">
                    <h1 className="   text-2xl font-black font-cinzel">Dine Divine</h1>
                    <h1 className=" text-xl tracking-[4px] font-bold font-cinzel">Restaurant</h1>
                </div>
            </div>
            <div className="navbar-end hidden pr-20 lg:flex">
                <ul className="menu gap-3 menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import MainHome from "./Home/MainHome";

import MenuPage from "./menu/MenuPage";
import OurShop from "./OurShop/OurShop";
import Login from "./Login/Login";

export const router=createBrowserRouter([
    {
        path:'/',
        
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<MainHome></MainHome>,
                
            },
            {   
                path:'/menu',
                element:<MenuPage></MenuPage>

            },
            {   
                path:'/ourshop/:category',
                element:<OurShop></OurShop>

            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";



const Menu = ({ data,btn,title }) => {
    


    return (
        <div className="flex flex-col items-center space-y-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {
                    data.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }

            </div>
            <Link to={`/ourshop/${title}`}>
            <button className="text-2xl  font-extralight border-primary border-b-2 text-primary p-3 hover:bg-primary hover:text-white duration-300  ">{btn}</button>
            </Link>
        </div>
    );
};

export default Menu;
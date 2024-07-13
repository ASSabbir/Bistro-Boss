import Title from "../Shared/Title";
import img from '../../assets/home/featured.jpg';
import './featured.css'


const Featured = () => {
    return (
        <div id="" className="p-3 banner-full bg-fixed pb-20 md:pb-36">
            <div className="max-w-screen-xl    mx-auto">
                <div className="py-20"><Title  heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></Title></div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <img src={img} alt="" className="max-w-[648px] w-full rounded-lg" />
                    <div className="space-y-4">
                        <p className="text-xl font-bold">March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="text-2xl rounded-xl font-extralight border-primary border-b-2 text-primary p-3 hover:bg-primary hover:text-white duration-300  ">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;
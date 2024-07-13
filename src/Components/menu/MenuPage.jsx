import MenuBanner from "../Shared/MenuBanner";
import bannerImg from '../../assets/menu/banner3.jpg'
import Title from "../Shared/Title";
import { useEffect, useState } from "react";
import Menu from "../Shared/Menu";
import SharedBanner from "../Shared/SharedBanner";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useData from "../../hooks/useData";


const MenuPage = () => {
    const [data]=useData()
    const offerData= data.filter(data=> data.category=='offered')
    const pizzaData=data.filter(data=>data.category=='pizza')
    const dessertData=data.filter(data=>data.category=='dessert')
    const saladData=data.filter(data=>data.category=='salad')
    const soupData=data.filter(data=>data.category=='soup')
    
    return (
        <div className="space-y-40">
            <MenuBanner img={bannerImg} title={'OUR MENU'} flag={true} dis={'Would you like to try a dish?'}></MenuBanner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Title heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"}></Title>
                <Menu data={offerData} title={'POPULAR'} btn={'ORDER YOUR FAVOURITE FOOD'}></Menu>
            </div>
{/* dessert */}
            <MenuBanner img={dessertImg} title={'DESSERTS'} dis={'Each dessert is crafted with the finest ingredients and baked to perfection. Enjoy classic favorites like creamy cheesecakes and rich chocolate brownies, or explore gourmet creations with unique flavors. Every dessert promises a perfect blend of sweetness and indulgence to satisfy your cravings.'} ></MenuBanner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Menu data={dessertData} title={'DESSERTS'} btn={'ORDER YOUR FAVOURITE FOOD'}></Menu>
            </div>
{/* pizza  */}
            <MenuBanner img={saladImg} title={'SALAD'} dis={'Each salad is crafted with the freshest ingredients and tossed to perfection. Enjoy classic favorites like Caesar and Greek salads, or explore gourmet creations with unique dressings and toppings. Every salad promises a perfect blend of crispness and flavor to satisfy your cravings.'} ></MenuBanner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Menu data={saladData} title={'SALAD'} btn={'ORDER YOUR FAVOURITE FOOD'}></Menu>
            </div>

{/* salad  */}
            <MenuBanner img={pizzaImg} title={'PIZZA'} dis={'Each crafted with the finest ingredients and baked to perfection. Enjoy classic favorites like Margherita and Pepperoni, or explore gourmet creations with unique toppings. Every pizza promises a perfect blend of crust, sauce, and toppings to satisfy your cravings.'} ></MenuBanner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Menu data={pizzaData} title={'PIZZA'} btn={'ORDER YOUR FAVOURITE FOOD'}></Menu>
            </div>


{/* soup  */}
            <MenuBanner img={soupImg} title={'SOUP'} dis={'Each soup is crafted with the finest ingredients and simmered to perfection. Enjoy classic favorites like Tomato Basil and Chicken Noodle, or explore gourmet creations with unique flavors and spices. Every soup promises a perfect blend of warmth and taste to satisfy your cravings.'} ></MenuBanner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Menu data={soupData} title={'SOUPS'}  btn={'ORDER YOUR FAVOURITE FOOD'}></Menu>
            </div>


        </div>
    );
};

export default MenuPage;
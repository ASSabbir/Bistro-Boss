import { useEffect, useState } from "react";
import Menu from "../Shared/Menu";
import SharedBanner from "../Shared/SharedBanner";
import Title from "../Shared/Title";
import Banner from "./Banner";
import { FoodSwiper } from "./FoodSwiper";
import sharedImg from '../../assets/home/chef-service.jpg'
import Card from "../Shared/Card";
import Featured from "./Featured";
import useData from "../../hooks/useData";



const MainHome = () => {
    const [data]=useData()
    const chefReco=data.slice(0,3)
    
    return (
        <div className="space-y-40">
            <Banner></Banner>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Title heading={'---From 11:00am to 10:00pm---'} subHeading={'ORDER ONLINE'}></Title>
                <FoodSwiper></FoodSwiper>

            </div>
            <div className="max-w-screen-xl mx-auto">
                <SharedBanner img={sharedImg} title='Dine Divine' dis='Dine Divine, we take pride in our signature dishes, crafted with care and precision to deliver a unique culinary experience. Our seasonal menus feature the freshest ingredients, celebrating the flavors of each season. Our chef’s specials, inspired by global cuisine, bring innovative and delightful twists to classic recipes, ensuring that every visit to Bisto Boss is a journey of taste and discovery.'></SharedBanner>
            </div>
            <div className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Title heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></Title>
                <Menu data={data.filter(item => item.category === 'popular')} btn={'View Full Menu'}></Menu>
            </div>
            <div className="max-w-screen-xl py-28 flex items-center justify-center mx-auto  bg-gray-700">
                <marquee direction="" className="text-4xl  font-semibold text-white ">Call Us: +88 0192345678910 </marquee>
            </div>
            <div  className="max-w-screen-xl px-5 pb-20 space-y-20 mx-auto">
                <Title heading={'---Should Try---'} subHeading={'CHEF RECOMMENDS'}></Title>
                <div className="grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        chefReco.map(item=> <Card key={item._id} item={item}></Card> )
                    }

                </div>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default MainHome;
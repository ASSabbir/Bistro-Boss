// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';

export const FoodSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide className='flex group relative overflow-hidden flex-col bg-black '>
                    <img src={img1} className='object-cover bg-black/70   object-center  w-full rounded-t-md  bg-gray-500 group-hover:scale-125 duration-150'></img>
                    <h1 className='text-2xl font-cinzel -mt-10 tracking-[15px] sm:tracking-[5px] md:tracking-[10px] text-white '>SALADS</h1>
                 </SwiperSlide>
                <SwiperSlide className='flex flex-col bg-black '>
                    <img src={img2}></img>
                <h1 className='text-2xl font-cinzel -mt-10 tracking-[15px] sm:tracking-[5px] md:tracking-[10px] text-white '>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col bg-black '>
                    <img src={img3}></img>
                    <h1 className='text-2xl font-cinzel -mt-10 tracking-[15px] sm:tracking-[5px] md:tracking-[10px] text-white '>SOUPS</h1>
                    </SwiperSlide>
                <SwiperSlide className='flex flex-col bg-black '>
                    <img src={img4}></img>
                    <h1 className='text-2xl font-cinzel -mt-10 tracking-[15px] sm:tracking-[5px] md:tracking-[10px] text-white '>DESSERTS</h1>
                    </SwiperSlide>
                <SwiperSlide className='flex flex-col bg-black '>
                    <img src={img5}></img>
                    <h1 className='text-2xl font-cinzel -mt-10 tracking-[15px] sm:tracking-[5px] md:tracking-[10px] text-white '>SALAD</h1>
                    </SwiperSlide>
                
            </Swiper>
        </>
    );
}

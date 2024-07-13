import { Parallax,  } from 'react-parallax';

const MenuBanner = ({ img, title, dis, flag }) => {
    return (
        <Parallax blur={1} bgImage={img} bgImageAlt="the cat" strength={200}>
            <div
                className="hero min-h-[800px]"
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        { 
                            flag ?
                                <div>
                                    <h1 className="mb-5 text-8xl font-extrabold font-cinzel">{title}</h1>
                                    <p className="mb-5 font-cinzel text-xl">
                                        {dis}
                                    </p>
                                </div>

                                :
                                <div>
                                    <h1 className="mb-5 text-6xl font-cinzel font-bold">{title}</h1>
                                    <p className="mb-5 max-w-4xl">
                                        {dis}
                                    </p>
                                </div>
                        }

                    </div>
                </div>
            </div>

        </Parallax>


    );
};

export default MenuBanner;
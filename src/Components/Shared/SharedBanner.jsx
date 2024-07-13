

const SharedBanner = ({img,title,dis}) => {
    return (
        <div className='max-w-screen-xl px-5 pb-20'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full   " />
                    <div className="p-6 pb-12 shadow-lg m-4 mx-auto -mt-16 space-y-6  sm:px-10 sm:mx-12 lg:rounded-md bg-white">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl font-cinzel text-primary">{title}</a>
                            
                        </div>
                        <div className="text-gray-400">
                            <p>{dis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedBanner;
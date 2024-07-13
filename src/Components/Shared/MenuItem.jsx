

const MenuItem = ({ item }) => {
   
    const { name, recipe, image, price } = item
    return (
        <div>
            <div className="sm:flex gap-4 space-y-5 sm:space-y-0">
                <div className="sm:max-w-36 sm:max-h-36  ">
                    <img src={image} alt="" className="rounded-r-full rounded-bl-full " />
                </div>
                <div className="flex gap-4 ">
                    <div >
                        <h1 className="font-cinzel text-lg font-bold text-gray-500">{name} ---------</h1>
                        <p className="text-gray-400">{recipe}</p>
                    </div>
                    <h1 className="text-xl font-bold text-primary">${price}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default MenuItem;
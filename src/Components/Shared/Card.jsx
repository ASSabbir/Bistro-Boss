

const Card = ({ item }) => {
    console.log(item)
    const { image, name, recipe } = item
    return (
        <div>
            <div className="card bg-base-100 h-[450px] max-w-96 flex  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="text-2xl rounded-xl font-extralight border-primary border-b-2 text-primary p-3 hover:bg-primary hover:text-white duration-300  ">Order Now</button>
                    </div>
                </div>
            </div>
            {/* <div className="max-w-2xs hover:shadow-xl  rounded-md shadow-md bg-gray-50 text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p  className="text-gray-800">{recipe}</p>
                    </div>
                    
                    <button className="text-2xl rounded-xl font-extralight border-primary border-b-2 text-primary p-3 hover:bg-primary hover:text-white duration-300  ">Order Now</button>
                </div>
            </div> */}
        </div>
    );
};

export default Card;
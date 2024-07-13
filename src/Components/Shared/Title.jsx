

const Title = ({ heading, subHeading }) => {
    return (
        <div className="flex flex-col space-y-5 items-center">
            <h1 className="text-primary text-center font-inter text-lg">{heading}</h1>
            <h1 className="text-center border-y-2  text-4xl font-inter p-3">{subHeading}</h1>

        </div>
    );
};

export default Title;
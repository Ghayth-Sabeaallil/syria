import { CardProps } from "../lib/types";

const Card = ({ name, description, image }: CardProps) => {
    return (
        <>
            <div className="flex flex-col justify-center object-cover items-center animate-[animation_2s_ease-in] w-full h-full relative rounded-md">
                <img
                    className="w-full h-full float-left object-cover rounded-md"
                    src={image}
                    alt={name}
                />
                <div className="flex flex-col absolute w-full h-full bottom-0 text-center justify-center items-center p-2 duration-500 opacity-0 hover:backdrop-blur-[5px] hover:opacity-100 cursor-pointer rounded-md bg-black/50 ">
                    <h2 className="text-sm sm:text-base md:text-2xl font-extrabold text-white">
                        {name}
                    </h2>
                    <h4 className="text-sm sm:text-base md:text-2xl font-medium text-white overflow-y-auto">
                        {description}
                    </h4>
                </div>
            </div>

        </>
    );
};

export default Card;
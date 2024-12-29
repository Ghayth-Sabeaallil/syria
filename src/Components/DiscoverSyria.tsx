import "../index.css";
import Button from "./Button";

export const DiscoverSyria = () => {
    return (
        <>
            <div className="slider items-center flex justify-end p-10 ">
                <img src="/1.jpg" alt="Image 1" />
                <img src="/2.jpg" alt="Image 2" />
                <img src="/3.jpg" alt="Image 3" />
                <img src="/4.jpg" alt="Image 4" />
                <img src="/5.jpg" alt="Image 5" />
                <img src="/6.png" alt="Image 6" />
                <div className="flex flex-col justify-center items-end gap-5  z-[1] text-right">
                    <p className="text-white font-cairo leading-[1.45] font-extrabold text-3xl font-mono">مرحباً بكم في سورية</p>
                    <p className="text-white font-cairo leading-[1.45] font-extrabold text-3xl font-mono">سورية و الحضارات</p>
                    <Button text="<< اكتشف سورية" />
                </div>
            </div></>

    )
}

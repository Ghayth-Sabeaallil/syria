import { useTranslation } from "react-i18next";
import "../index.css";
import Button from "./Button";

export const DiscoverSyria = () => {
    const { t } = useTranslation();

    const handleScrollToSection = (sec: string) => {
        const target = document.getElementById(sec);
        const targetPosition = target!.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1300; // 1.3 seconds for the scroll duration
        let startTime: number | null = null;

        function animationScroll(currentTime: number | null) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime! - startTime!;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function ease(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animationScroll);
    };
    return (
        <div className="flex select-none">
            <div id="discover" className="border-2 border-black slider items-center m-4 flex justify-end p-10 rounded-lg shadow-2xl">
                <img src="/2.jpg" alt="Image 2" />
                <img src="/3.jpg" alt="Image 3" />
                <img src="/4.jpg" alt="Image 4" />
                <img src="/1.jpg" alt="Image 1" />
                <img src="/5.jpg" alt="Image 5" />
                <img src="/6.jpg" alt="Image 6" />
                <div className="flex flex-col justify-center items-end gap-5  z-[1] text-right">
                    <p className="animate-[animationRight_2s_ease-out] text-white font-Amiri leading-[1.45] font-extrabold text-lg sm:text-lg md:text-3xl">{t('welcome')}</p>
                    <p className="animate-[animationLeft_2s_ease-out]  text-white font-Amiri leading-[1.45] font-extrabold text-lg sm:text-lg md:text-3xl">{t('des')}</p>
                    <Button text={`<< ${t('discover')}`} handleClick={() => handleScrollToSection("mySvg")} />
                </div>
            </div></div>

    )
}

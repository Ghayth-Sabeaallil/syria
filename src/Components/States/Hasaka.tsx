import { useState } from "react";
import { StateProps } from "../../lib/types"

const Hasaka = ({ handleClick, handleDoubleClick, isClicked }: StateProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <path className="animate-[animation_3s_ease-in]" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onClick={handleClick} onDoubleClick={handleDoubleClick} style={isClicked ? { fill: "#949494" } : isHovered ? { fill: "#949494", opacity: 0.9, cursor: "pointer" } : {}} d="M808.5 342.8l-15.3-2.2-26.9-0.6-10.4-2.2-4.9-1.8-8.5-1.9-2.5-1.1-4.4-2.6-102.3-100.4-17.1-17.5-10.2-17-3-6.6-0.2-2.2-0.2-0.7-0.2-0.5-0.9-1.4-1.5-1.5-8.5-4.9-12.5-5.2-0.7-0.1-0.7-0.1-0.6 0.1-0.5 0.2-2.2 0.8-1.1 0.3-2.5 0.3-1.5-0.1-1.4-0.4-1.1-0.5-1.9-1.7-6.9-8.9-1.2-2.8-3.2-9.6 44.2-8.5 29.3-11.1 13.6-8.2 4.9-1.6 5.1-1 5.1-2.4 9.8-6.6 18.1-12.1 2.7-1.8 2.9-1.1 3-0.6 3.1-0.2 6.3-1.8 18.3-10.2 6.7-2.6 25.6-3.8 32.6 6.6 6.1 2.5 3 0.8 38-1.8 57-13.5 15.4-3.6 5.9-3.7 10.3-9.7 6.9-9.1 2-1.2 2.5-2 1.5 1.9 0.2 2-0.2 1.7 0.1 0.7 1.9 0.4 4.1 2 0.8-0.4 0.9-0.9 0.9-0.8 0.8 0.3 0.6 0.9 0.7 1.7 0.6 0.9 4.6 3.8 1 0.5 0.9 2.1-2.5 9.6 1.6 2.2 1.1 1 0.2 2.5 0.1 4.8 0.9 2 1 1.8 0.8 1.9 0 2.5-4.2 3.3-8.8 8.3 0 0.1-14.1 15.1-27.3 29.3-18.4 19.7-3.6 3.1-3.8 1.8-42.4 9.1-8.8 1.4-4.1 1.9-2.7 3.8-12.1 23.7-1.1 4.5-4.4 42.5 0 2.8 0.6 2.9 3.5 8.3 10.5 23 1.5 5.4 0.7 5.6 0.5 23.1-0.7 5.3-2.2 5-4.6 7z" id="Hasaka" name="Hasaka (Al Haksa)"><title className="text-white hover:opacity-100 transition-opacity">
                Al Hasaka
            </title>
        </path>
    )
}

export default Hasaka
import { useState } from "react";
import { StateProps } from "../../lib/types"

const Damascus = ({ handleClick, isClicked }: StateProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <path className={isClicked ? "" : "opacity-80"} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onClick={handleClick} style={isClicked ? { fill: "#61201c" } : isHovered ? { opacity: 1, cursor: "pointer" } : {}} d="M126.5 689.6l-2.6-0.4-8.3-4.2-3.1 2-0.7-1.6 2.9-3.1-3.2-1.6-2.2 0.3-1-3 5.2-2.9 4.1-0.2 7.6-2.2 3.8 0.3 2.2 3-0.1 1.8 0.3 3-1.3 3.6-3.1 3.2-0.5 2z" id="Damascus" name="Damascus"><title className="text-white hover:opacity-100 transition-opacity">
                Damascus
            </title>
        </path>
    )
}

export default Damascus
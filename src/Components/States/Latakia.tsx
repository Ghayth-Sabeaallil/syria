import { useState } from "react";
import { StateProps } from "../../lib/types"

const Latakia = ({ handleClick, isClicked }: StateProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <path className={isClicked ? "" : "opacity-80"} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onClick={handleClick} style={isClicked ? { fill: "#61201c" } : isHovered ? { opacity: 1, cursor: "pointer" } : {}} d="M104.5 297.4l0.1 0.6-0.1 0.2-0.3 1-0.2 0.4-0.2 0.6-0.1 0.7 0 0.6 0.2 0.5 0.5 0.5 1 0.4 2 0.1 1 0 0.8-0.2 1.1-0.4 1.2-0.3 9.3-0.4 0.6 0.2 0.6 0.3 0.5 0.7 0.2 0.6 0 0.7-0.2 0.7-1 1.3-3.4 2.4-2.2 1.9-0.6 1.5-0.3 4.2-0.2 1.1-0.4 0.7-2.1 1.5-1.3 1.4-0.4 0.9-0.1 0.7 0.2 0.5 1.6 2.2 0.5 1 0.4 1.1 0.3 1.9 0.4 5.2-0.5 11.2-2.7 18.5 0.1 0.7 0.9 3.2 2.2 6.5 3.6 16.9 0.3 6.5-5.3-2.6-1.8-0.2-1.9 1.2-1 0.5-0.5 0.1-20.6 1.7-0.9-0.3-4-3.4-2.1-1.4-5.8-1.9-0.1-0.1-2.1-4.4 1.8-5.6-0.6-2.8-1-10.9 0.3-2.4-1.4-1.4-6.6-8.9-2.8-1.4-1.4-1-0.5-1.7-1.1-0.9-2.2 0.3-2.1 0.8-0.7 0.4-1.5-0.7 0.2-1.9 0.7-2.3 0.1-2-0.8-0.9-4.8-2.6 0.3-0.8 0.2-1.7 0.4-0.9-0.9 0-1.8 1 0-1 2.7-1 2.7-1.7 2.1-2.5 0.8-3-0.3-1.8-1.2-2.3-0.3-2.1 0.7-1.2 3.2-1.1 5.3-10.2 0.2-0.9 0-3.9-0.6-3.3-1.4-3.9-1.9-3.7-1.8-2.4 6.6 0.4 3.3-0.8 1.4-2.5 0.6-3.3 3.5-5.3 1.3 0.4 2.7-0.5 2.8-1 2.6-0.4 1.8 1.9 0 2.2-0.4 2.2 0.3 2 1.6 1.4 2.1 0.5 4.3 0.1 4 1.9 8 5.8 2.3-0.4z" id="Latakia" name="Lattakia"><title className="text-white hover:opacity-100 transition-opacity">
                Latakia
            </title>
        </path>

    )
}

export default Latakia
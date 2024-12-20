import { useState } from "react";
import { StateProps } from "../../lib/types"

const Damascus = ({ handleClick }: StateProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <path onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onClick={handleClick} style={isHovered ? { fill: "#e8e8e8", opacity: 0.4, cursor: "pointer" } : {}} d="M126.5 689.6l-2.6-0.4-8.3-4.2-3.1 2-0.7-1.6 2.9-3.1-3.2-1.6-2.2 0.3-1-3 5.2-2.9 4.1-0.2 7.6-2.2 3.8 0.3 2.2 3-0.1 1.8 0.3 3-1.3 3.6-3.1 3.2-0.5 2z" id="SYDI" name="Damascus"><title className="text-white hover:opacity-100 transition-opacity">
                Damascus
            </title>
        </path>
    )
}

export default Damascus
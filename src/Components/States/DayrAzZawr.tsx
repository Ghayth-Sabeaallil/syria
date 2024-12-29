import { useState } from "react";
import { StateProps } from "../../lib/types"

const DayrAzZawr = ({ handleClick, handleDoubleClick, isClicked }: StateProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <path className="animate-[animation_3s_ease-in] opacity-80" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} onClick={handleClick} onDoubleClick={handleDoubleClick} style={isClicked ? { fill: "#949494" } : isHovered ? { opacity: 1, cursor: "pointer" } : {}} d="M653.4 589.1l0-0.1-77-111-22.5-32.2-0.6-1-0.6-1.5-0.1-1.8 0.9-9.6-0.1-1.6-0.5-1.5-8.6-18.5-4.3-5.5-13.8-11.2 58-85.3 1.1-2.3-1.1-0.5-3.9-2.7-1-0.3 0-1.8 1.5-10.4 13.3-61.4 8.9-40 3 6.6 10.2 17 17.1 17.5 102.3 100.4 4.4 2.6 2.5 1.1 8.5 1.9 4.9 1.8 10.4 2.2 26.9 0.6 15.3 2.2-6.4 9.7 0 0.1-1.3 5-1.2 16.4-5.7 20.6-1.3 10.2 0.1 3.9 0.7 27.5 1.2 29.1-0.3 4.4-1.2 4.1-23.4 45.5-5 10.9-3.1 4.4-4 2.6-33.5 9.1-20 12.1-15.2 9.2-15.1 9.1-15.1 9.2-5.3 3.2z" id="SYDY" name="Dayr Az Zawr"><title className="text-white hover:opacity-100 transition-opacity">
                Dayr Al-Zour
            </title>
        </path>
    )
}

export default DayrAzZawr
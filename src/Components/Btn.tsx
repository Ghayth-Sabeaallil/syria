import React, { useState } from "react";

interface Button {
    id: number;
    label: string;
}

const Btn: React.FC = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleClick = (buttonId: number) => {
        setActiveButton(buttonId);
    };

    const buttons: Button[] = [
        { id: 1, label: "Button 1" },
        { id: 2, label: "Button 2" },
        { id: 3, label: "Button 3" },
    ];

    return (
        <div>
            {buttons.map((button) =>
                activeButton === null || activeButton === button.id ? (
                    <button
                        key={button.id}
                        onClick={() => handleClick(button.id)}
                    >
                        {button.label}
                    </button>
                ) : null
            )}
            {activeButton !== null && (
                <button onClick={() => setActiveButton(null)}>Reset</button>
            )}
        </div>
    );
};

export default Btn;

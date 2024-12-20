import React from "react";

const SvgPathWithHover: React.FC = () => {
    return (
        <div className="relative">
            <svg
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Path */}
                <path
                    d="M50 150 Q100 50 150 150"
                    stroke="blue"
                    fill="transparent"
                    strokeWidth="2"
                    className="hover:stroke-red-500"
                />

                {/* Hover Text */}
                <text
                    x="100"
                    y="30"
                    textAnchor="middle"
                    fontSize="12"
                    fill="black"
                    className="opacity-0 hover:opacity-100 transition-opacity"
                >
                    Hovered over the path
                </text>
            </svg>
        </div>
    );
};

export default SvgPathWithHover;

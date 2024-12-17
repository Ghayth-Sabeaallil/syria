import { ReactNode } from "react";

type ParentProps = {
    children: ReactNode;
};
const MapView = ({ children }: ParentProps) => {
    return (
        <svg baseProfile="tiny" fill="grey" height="99vh" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 918" width="100vw" xmlns="http://www.w3.org/2000/svg">
            <g id="features">
                {children}
            </g>
        </svg>
    )
}

export default MapView
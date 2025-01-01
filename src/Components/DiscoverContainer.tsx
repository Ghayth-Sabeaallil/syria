import { ReactNode } from "react";

export type ContainerProps = {
    discover: ReactNode;
};
function DiscoverContainer({ discover }: ContainerProps) {
    return (
        <div className="flex">{discover}</div>
    )
}

export default DiscoverContainer
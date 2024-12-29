import { ReactNode } from "react";

export type ContainerProps = {
    discover: ReactNode;
};
function Container({ discover }: ContainerProps) {
    return (
        <div className="flex h-screen">{discover}</div>
    )
}

export default Container
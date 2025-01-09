export type StateProps = {
    handleClick?: React.MouseEventHandler<SVGPathElement>;
    isClicked?: boolean | undefined;
};

export type CardProps = {
    name?: string;
    description?: string;
    image?: string
};
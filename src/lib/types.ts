export type StateProps = {
    handleClick?: React.MouseEventHandler<SVGPathElement>;
    handleDoubleClick?: React.MouseEventHandler<SVGPathElement>;
    isClicked?: string;
};

export type CardProps = {
    name?: string;
    description?: string;
    image?: string
};
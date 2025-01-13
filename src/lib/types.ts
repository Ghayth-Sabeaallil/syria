export type StateProps = {
    handleClick?: React.MouseEventHandler<SVGPathElement>;
    isClicked?: boolean | undefined;
};

export type StateInfoProps = {
    id?: string,
    name?: string;
    description?: string;
    people?: number,
    area?: number,
};
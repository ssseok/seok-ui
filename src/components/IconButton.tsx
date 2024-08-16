interface IIconButtonProps {
    iconPath: string;
    alt: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
    iconPath,
    onClick,

    alt,
}: IIconButtonProps) {
    return (
        <button onClick={onClick}>
            <img
                alt={alt}
                src={iconPath}
            />
        </button>
    );
}

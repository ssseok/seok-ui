interface IErrorMessgeProps {
    children: string;
}

export default function ErrorMessge({ children }: IErrorMessgeProps) {
    return <p className="text-xs text-error">{children}</p>;
}

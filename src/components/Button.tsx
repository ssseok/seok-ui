type ButtonTheme = 'primary' | 'secondary' | 'text' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

interface IButtonProps {
    theme: ButtonTheme;
    disabled?: boolean;
    children?: string;
    size?: ButtonSize;
    type?: ButtonType;
    onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
}

const primary = 'bg-primary text-white';
const secondary =
    'bg-white text-primary border-primary border hover:border-opacity-80 hover:text-opacity-80';
const text = 'bg-transparent text-black hover:bg-mono100';
const link = 'text-link hover:text-opacity-80';

// disabled 상태에서의 스타일을 조건에 따라 다르게 적용
const getDisabledStyle = (theme: ButtonTheme): string => {
    if (theme === 'primary' || theme === 'secondary') {
        return 'disabled:bg-mono100 disabled:text-mono200 disabled:border-none';
    } else {
        return 'disabled:text-mono200';
    }
};

// size에 따른 스타일을 정의
const getSizeStyle = (size: ButtonSize): string => {
    switch (size) {
        case 'small':
            return 'h-10 px-2 text-sm';
        case 'medium':
            return 'h-12 px-4 text-base';
        case 'large':
            return 'h-14 px-6 text-xl';
        default:
            return '';
    }
};
/**
 * ButtonTheme 테마를 key로 가지고, string을 value로 가진 객체를 선언
 */
const color: Record<ButtonTheme, string> = {
    primary,
    secondary,
    text,
    link,
};

export default function Button({
    theme,
    children,
    onClick,
    disabled,
    size = 'medium',
    type = 'button',
}: IButtonProps) {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`w-full  hover:bg-opacity-80 rounded-primary-button ${getSizeStyle(size)} ${color[theme]} ${getDisabledStyle(theme)}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

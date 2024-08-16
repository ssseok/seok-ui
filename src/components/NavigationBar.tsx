import IconButton from './IconButton';
import Close from '../assets/icon/svgs/Close.svg';
import ArrowLeft from '../assets/icon/svgs/ArrowLeft.svg';

interface INavigationBar {
    isDark?: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    showTitle: boolean;
    title?: string;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
    showBackButton,
    showCloseButton,
    showTitle,
    onBackButtonClick = () => {},
    onCloseButtonClick = () => {},
    title = '',
    isDark,
}: INavigationBar) {
    return (
        <nav className="flex w-full justify-between items-center">
            <div className="flex navigation-title-wrapper">
                {/* 뒤로가기 버튼 */}
                {showBackButton && (
                    <IconButton
                        alt="back-arrow"
                        iconPath={ArrowLeft}
                        onClick={onBackButtonClick}
                    />
                )}
                {/* 페이지 이름 */}
                {showTitle && (
                    <h1
                        className={`text-2xl ${isDark ? 'text-white' : 'text-black'}`}
                    >
                        {title}
                    </h1>
                )}
            </div>
            {/* 닫기 버튼 */}
            {showCloseButton && (
                <IconButton
                    alt="close"
                    iconPath={Close}
                    onClick={onCloseButtonClick}
                />
            )}
        </nav>
    );
}

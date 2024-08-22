import { useState } from 'react';
import ErrorMessge from './ErrorMessge';
import IconButton from './IconButton';

interface IDefaultTextField {
    errorMessge: string;
    iconPath: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    IconAlt: string;
    value: string;
    placeholder: string;
    isError: boolean;
    id: string;
}

export default function DefaultTextField({
    IconAlt,
    errorMessge,
    iconPath,
    onChange,
    onIconClick,
    placeholder,
    value,
    isError,
    id,
}: IDefaultTextField) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const borderColor = isFocused
        ? 'border-primary'
        : !value
          ? 'border-mono300'
          : 'border-primary';
    return (
        <div className="text-filed">
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
              text-primary
              border-b
              ${borderColor}
              `}
            >
                <input
                    id={id}
                    className="outline-none w-full"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />

                {!!value && (
                    <IconButton
                        onClick={onIconClick}
                        alt={IconAlt}
                        iconPath={iconPath}
                    />
                )}
            </div>
            {isError && <ErrorMessge>{errorMessge}</ErrorMessge>}
        </div>
    );
}

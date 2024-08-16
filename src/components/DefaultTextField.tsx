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
}: IDefaultTextField) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const borderColor = isFocused
        ? 'border-tree'
        : !value
          ? 'border-mono300'
          : 'border-primary';
    return (
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
                className="outline-none"
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

            {isError && <ErrorMessge>{errorMessge}</ErrorMessge>}
        </div>
    );
}

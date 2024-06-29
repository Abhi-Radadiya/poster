import React, { useEffect, useState } from "react";

export const Input = (props) => {
    const {
        label,
        action,
        labelMarginB,
        labelStyle,
        inputType,
        placeholder,
        boxHeight,
        paddingLeft,
        placeholderIcon,
        addon,
        addonIcon,
        placeholderTextColor,
        shadow,
        value,
        addonStyle,
        handleClickAction,
        actionTextColor,
        actionTextStyle,
        paddingRight,
        inputStyle,
        removeSectionStyle,
        disabled,
        handleClickAddon,
        onChange,
        onFocus,
        diableInputStyle,
        prefix,
        prefixClass,
        pattern,
        inputMode,
        maxLength,
        boxClass,
    } = props;

    const [inputValue, setInputValue] = useState(value ?? "");

    const handleChangeInputValue = (value) => {
        setInputValue(value);
        onChange?.(value);
    };

    useEffect(() => {
        setInputValue(value ?? "");
    }, [value]);

    const inputBoxStyle = `w-full h-${boxHeight ? boxHeight : "12"} paragraph-small-regular border rounded-md border-neutral-300 ${
        paddingLeft ?? (placeholderIcon ? "pl-12" : "pl-4")
    } ${paddingRight ?? (addon || addonIcon ? "pr-[100px]" : "pr-4")} placeholder:${placeholderTextColor ?? "text-neutral-300"} ${
        diableInputStyle ?? "disabled:text-neutral-300"
    } ${shadow} focus:border-primary-500 disabled:bg-white outline-none focus:outline-none focus:ring-4 focus:ring-primary-100 caret-primary-500 placeholder:paragraph-small-regular ${inputStyle}`;

    return (
        <>
            <div className="w-full">
                {(label || action) && (
                    <div className={`justify-between w-full ${labelMarginB ?? "mb-1"} flex flex-row`}>
                        <label className={`${labelStyle ?? "paragraph-small-medium"}`}>{label}</label>
                        <span
                            className={`${actionTextStyle ?? "paragraph-small-medium"} ${actionTextColor ?? "text-primary-500"} cursor-pointer ${removeSectionStyle}`}
                            onClick={handleClickAction}
                        >
                            {action}
                        </span>
                    </div>
                )}

                <div className={`relative ${boxClass}`}>
                    <input
                        type={inputType ?? "text"}
                        placeholder={placeholder}
                        className={inputBoxStyle}
                        onChange={(e) => handleChangeInputValue(e.target.value)}
                        disabled={disabled}
                        value={inputValue}
                        onFocus={() => onFocus?.()}
                        onWheel={(e) => inputType === "number" && e.target.blur()}
                        onKeyDown={(e) => {
                            inputType === "number" && e.key === "e" && e.preventDefault();
                        }}
                        pattern={pattern}
                        inputMode={inputMode}
                        maxLength={maxLength}
                    />
                    <div className="flex flex-row absolute right-4 top-3.5 cursor-pointer" onClick={() => handleClickAddon && handleClickAddon()}>
                        <span className={`${addonStyle ?? "text-primary-300 paragraph-small-regular"}`}>{addon}</span>
                        {addonIcon && <div className="h-6 w-6 ml-1 rounded">{addonIcon}</div>}
                    </div>

                    {placeholderIcon && <div className="h-6 w-6 rounded absolute top-3 left-4">{placeholderIcon}</div>}
                    {prefix && <span className={`absolute left-1 ${prefixClass}`}> {prefix} </span>}
                </div>
            </div>
        </>
    );
};

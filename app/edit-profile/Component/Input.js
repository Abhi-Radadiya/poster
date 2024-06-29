import React from "react";
import "./styes.css";

export default function Input(props) {
    const { label, placeholder, value, disabled, icon, handleChange } = props;

    return (
        <>
            <div className="">
                <label htmlFor="" className="text-[14px] text-neutral-700 font-medium pb-2 tracking-wide">
                    {label}
                </label>

                <div className="relative">
                    <div className="groupX mt-1 w-full relative">
                        <input
                            onChange={handleChange}
                            placeholder={placeholder}
                            disabled={disabled}
                            type="search"
                            className={`input ${icon ? " pl-10" : "pl-2"}`}
                            value={value ?? ""}
                        />
                    </div>

                    {icon && <div className="absolute left-3 top-4">{icon}</div>}
                </div>
            </div>
        </>
    );
}

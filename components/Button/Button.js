import React from "react";

export default function Button(props) {
    const { label, onClick, className } = props;

    return (
        <>
            <button className={`py-5 rounded-xl bg-blue-600 px-4 text-white uppercase text-xs tracking-wider w-full ${className}`} onClick={onClick}>
                {label}
            </button>
        </>
    );
}

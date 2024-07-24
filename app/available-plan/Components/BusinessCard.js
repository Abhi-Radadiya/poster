import React from "react";

export default function BusinessCard() {
    return (
        <>
            <div className={`border border-neutral-300 rounded-lg w-full`}>
                <span>Gold</span>
                <p>
                    <span className="line-through">149/-</span> 67%
                </p>
                <p className="text-2xl font-bold">49/-</p>
                <span>Month</span>
            </div>
        </>
    );
}

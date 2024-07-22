import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function ColorSelection(props) {
    const { setstyle, style } = props;

    const [background, setBackground] = useState("#000000");

    return (
        <>
            <div className="border border-neutral-300 rounded-xl mx-6 px-2 py-1 mt-4">
                <div className="flex flex-row py-1 px-2 items-center gap-2">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: style.backgroundColor }} />
                    <span>Frame Color</span>
                </div>
            </div>

            <ColorPicker background={background} setBackground={setBackground} setstyle={setstyle} />

            <div className="border border-neutral-300 rounded-xl mx-6 px-2 py-1 mt-4">
                <div className="flex flex-row py-1 px-2 items-center gap-2">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: style.backgroundColor }} />
                    <span>Text Color</span>
                </div>
            </div>

            <ColorPicker background={background} setBackground={setBackground} setstyle={setstyle} />
        </>
    );
}

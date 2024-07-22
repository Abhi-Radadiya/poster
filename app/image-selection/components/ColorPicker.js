import React, { useState } from "react";
import { HuePicker } from "react-color"; // Using react-color for the color picker

const ParentComponent = (props) => {
    const { setstyle } = props;
    const [bgColor, setBgColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState("#000000");

    const handleColorChange = (color) => {
        setBgColor(color.hex);
        const brightness = parseInt(color.hex.slice(1, 3), 16) * 0.299 + parseInt(color.hex.slice(3, 5), 16) * 0.587 + parseInt(color.hex.slice(5, 7), 16) * 0.114;
        setTextColor(brightness > 186 ? "#000000" : "#ffffff");
        setstyle({ backgroundColor: bgColor, color: textColor });
    };

    return (
        <div className="flex flex-col items-center">
            <HuePicker className="w-[900px] max-w-full mt-4" color={bgColor} onChange={handleColorChange} />
        </div>
    );
};

export default ParentComponent;

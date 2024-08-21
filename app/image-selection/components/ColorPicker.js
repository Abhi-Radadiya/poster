import React from "react";
import { ChromePicker } from "react-color"; // Using react-color for the color picker

const ParentComponent = (props) => {
    const { setStyle, section, style } = props;

    const handleColorChange = (color) => {
        if (section === "text") {
            setStyle((prevState) => ({ ...prevState, color: color.hex }));
            return;
        }

        const brightness = parseInt(color.hex.slice(1, 3), 16) * 0.299 + parseInt(color.hex.slice(3, 5), 16) * 0.587 + parseInt(color.hex.slice(5, 7), 16) * 0.114;

        const textColor = brightness > 186 ? "#000000" : "#ffffff";

        setStyle({ color: textColor, backgroundColor: color.hex });
    };

    return (
        <div className="flex flex-col items-center">
            {/* <HuePicker className="w-[900px] max-w-full mt-4" color={bgColor} onChange={handleColorChange} /> */}
            <ChromePicker color={section === "text" ? style.color : style.backgroundColor} onChange={handleColorChange} />
        </div>
    );
};

export default ParentComponent;

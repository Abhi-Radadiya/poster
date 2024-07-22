"use client";

import React, { useEffect, useRef, useState } from "react";
import { useImageData } from "@/context/ImageDataContext";
import html2canvas from "html2canvas";
import MakeLoginPopup from "../components/MakeLoginPopup/MakeLoginPopup";
import Navbar from "../components/Navbar";
import SelectedImageSection from "../components/SelectedImageSection";
import RecommendationSection from "../components/RecommendationSection";
import ColorPalletIcon from "@/assets/color-palette.svg";
import ColorSelection from "@/app/image-selection/components/ColorSelection";

export default function Page() {
    const { imageData } = useImageData();
    const sectionRef = useRef();

    const [style, setstyle] = useState({ backgroundColor: "#000000", color: "#FFFFFF" });

    const [showCOlor, setShowCOlor] = useState(false);

    const handleClickDownload = async () => {
        if (sectionRef.current) {
            const canvas = await html2canvas(sectionRef.current, {
                scale: 5,
                useCORS: true,
            });

            const dataUrl = canvas.toDataURL("image/png");

            window.handleDownload(dataUrl);

            // const link = document.createElement("a");
            // link.href = dataUrl;
            // link.download = "image-with-frame.png";
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
        }
    };

    const [showLoginPopup, setShowLoginPopup] = useState(true);

    useEffect(() => {
        const token = localStorage?.getItem("authToken");

        setShowLoginPopup(!token);
    }, []);

    return (
        <>
            <Navbar handleClickDownload={handleClickDownload} />

            <SelectedImageSection imageDetails={imageData?.selectedImage} sectionRef={sectionRef} style={style} />

            <div
                className="mx-6 w-fit px-2 py-1 mb-2 flex flex-row items-center gap-2 border border-neutral-300 rounded-xl"
                onClick={() => setShowCOlor((prevState) => !prevState)}
            >
                <span>
                    <ColorPalletIcon className="w-4 h-4" />
                </span>

                <span className="text-base">Edit color</span>
            </div>

            {showCOlor ? <ColorSelection setstyle={setstyle} /> : <RecommendationSection imageDetails={imageData} />}

            {/* {showLoginPopup && <MakeLoginPopup />} */}
        </>
    );
}

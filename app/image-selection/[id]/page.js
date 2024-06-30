"use client";

import React, { useEffect, useRef, useState } from "react";
import { useImageData } from "@/context/ImageDataContext";
import html2canvas from "html2canvas";
import Button from "@/components/Button/Button";
import { Frame1 } from "@/components/Frames/Frame";
import MakeLoginPopup from "../components/MakeLoginPopup/MakeLoginPopup";
import Navbar from "../components/Navbar";
import SelectedImageSection from "../components/SelectedImageSection";
import RecommendationSection from "../components/RecommendationSection";

export default function Page() {
    const { imageData } = useImageData();
    const sectionRef = useRef();

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
            <SelectedImageSection imageDetails={imageData?.selectedImage} sectionRef={sectionRef} />
            <RecommendationSection imageDetails={imageData} />

            {showLoginPopup && <MakeLoginPopup />}
        </>
    );
}

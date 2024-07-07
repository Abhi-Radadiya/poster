"use client";
import React, { useState } from "react";
import UploadIcon from "@/assets/upload.svg";
import Image from "next/image";

function ImageUploader() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full flex mx-auto mt-2 mb-6">
            <div className="relative mx-auto">
                <label htmlFor="image-input">
                    {image ? <Image src={image} alt="Uploaded" className="rounded-full h-24 w-24" /> : <div className="rounded-full bg-white h-24 w-24 cursor-pointer" />}
                </label>

                <input id="image-input" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />

                <div className="absolute -right-2 bottom-2 bg-blue-500 h-8 w-8 pt-1 rounded-full">
                    <UploadIcon className="h-5 w-5 ml-1.5" />
                    {/* <BackIcon className="h-5 w-6" /> */}
                </div>
            </div>
        </div>
    );
}

export default ImageUploader;

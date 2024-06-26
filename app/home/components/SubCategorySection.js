"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import CheckMark from "@/assets/check-mark.png";
import { useImageData } from "@/context/ImageDataContext";

export default function ImageGallery({ data }) {
    const { setImageData } = useImageData();

    const handleImageClick = (image) => {
        setImageData({ allImage: data, selectedImage: image });
    };

    const [activeSubcategory, setActiveSubcategory] = useState(data[0]?.title || null);

    const filteredData = activeSubcategory ? data.filter((item) => item.title === activeSubcategory) : data;

    return (
        <div className="container mx-auto">
            <div className="flex flex-row mb-2 px-4">
                {data.map((item) => (
                    <button
                        key={item.title}
                        onClick={() => setActiveSubcategory(item.title)}
                        className={`mx-0.5 my-1 px-2.5 py-1.5 text-sm text-neutral-600 rounded-3xl flex flex-row items-center border gap-2 ${
                            activeSubcategory === item.title ? "border-blue-400" : "border-neutral-200"
                        }`}
                    >
                        {activeSubcategory === item.title && <Image alt="" src={CheckMark} height={12} width={12} />}

                        {item.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2 px-3">
                {filteredData.map((subcategory, index) =>
                    subcategory.data.map((image) => (
                        <Link href={`/image-selection/${image._id}`} onClick={() => handleImageClick(image)} key={image._id} className="first:-ml-4 mx-0.5 w-full">
                            <Image height={200} width={200} src={image.url} alt={`Image ${index + 1}`} className="mx-4 h-[130px] min-w-[83px] rounded-xl" />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

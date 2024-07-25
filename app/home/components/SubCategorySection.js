"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
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
            <div className="flex flex-row px-4">
                {data.map((item) => (
                    <button
                        key={item.title}
                        onClick={() => setActiveSubcategory(item.title)}
                        className={`mx-0.5 my-1 px-2.5 py-1.5 text-xs capitalize text-neutral-600 rounded-3xl flex flex-row items-center border gap-2 ${
                            activeSubcategory === item.title ? "border-blue-400 bg-[#dbeafe66]" : "border-neutral-200"
                        }`}
                    >
                        {/* {activeSubcategory === item.title && <Image alt="" src={CheckMark} height={12} width={12} />} */}

                        {item.title === "ai" ? "AI" : item.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2 px-3 py-2">
                {filteredData.map((subcategory, index) =>
                    subcategory.data.map((image) => {
                        console.log("image ==>", image);

                        return (
                            <Link href={`/image-selection/${image._id}`} onClick={() => handleImageClick(image)} key={image._id} className="first:-ml-0 m-1 w-full">
                                {image.subcategory !== "video" ? (
                                    <Image
                                        height={100}
                                        width={100}
                                        src={image.url}
                                        alt={`Image ${index + 1}`}
                                        className="h-[125px] min-w-[125px] rounded-xl"
                                        style={{ boxShadow: "0px 0px 0.5px 0.5px #d4d5d6" }}
                                    />
                                ) : (
                                    <>
                                        <video muted autoPlay={true} loop className="h-[125px] min-w-[125px] rounded-xl">
                                            <source src="https://res.cloudinary.com/dfmrcxoqs/video/upload/v1721716552/b7kwp0qwshwseskkdowk.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </>
                                )}
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useImageData } from "@/context/ImageDataContext";

export default function RecommendationSection(props) {
    const { imageDetails } = props;

    const { id } = useParams();

    const screenHeight = useWindowSize().height;

    const { setImageData } = useImageData();

    const handleImageClick = (image) => {
        setImageData({ allImage: imageDetails.allImage, selectedImage: image });
    };

    const filteredImage = imageDetails?.allImage?.[0]?._id
        ? imageDetails?.allImage?.filter((el) => el._id !== id)
        : imageDetails?.allImage?.flatMap((group) => group.data).filter((item) => item._id !== id);

    return (
        <>
            <div className="overflow-y-auto bg-white rounded-t-xl" style={{ height: screenHeight - 391 }}>
                <div className="grid grid-cols-3 gap-3 p-3">
                    {filteredImage?.map((image, index) => {
                        return (
                            <Link key={index} href={`/image-selection/${image._id}`} onClick={() => handleImageClick(image)}>
                                <Image
                                    src={image?.url}
                                    width={120}
                                    height={120}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-auto rounded-lg"
                                    style={{ boxShadow: "0px 0px 0.5px 0.5px #d4d5d6" }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

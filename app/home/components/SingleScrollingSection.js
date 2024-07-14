"use client";

import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Image from "next/image";
import Link from "next/link";
import SubCategorySection from "./SubCategorySection";
import { useImageData } from "@/context/ImageDataContext";

import ClockIcon from "@/assets/clock.svg";
import Quote from "@/assets/quote.svg";
import Gallery from "@/assets/gallery.svg";

export default function SingleScrollingSection(props) {
    const { title, imageData } = props;

    const { setImageData } = useImageData();

    const handleImageClick = (image) => {
        setImageData({ allImage: imageData.data, selectedImage: image });
    };

    const renderImage = () => {
        let image;

        switch (title) {
            case "Today Trending":
                image = <ClockIcon className="stroke-neutral-400" height={16} width={16} />;
                break;

            case "Quote":
                image = <Quote height={16} width={16} className="stroke-neutral-400" />;
                break;

            default:
                image = <Gallery height={13} width={13} className="stroke-neutral-400" />;
                break;
        }

        return image;
    };

    return (
        <>
            <div className="flex flex-row justify-between w-full items-center mt-7 mb-2">
                <div className="flex flex-row items-center mx-3">
                    <div className="rounded-full h-7 w-7 bg-white flex justify-center items-center">{renderImage()}</div>
                    <span className="ml-2 font-bold text-neutral-600 capitalize">{title}</span>
                </div>

                <Link href={`/all-image/${title}`} className="flex flex-row items-center pr-2">
                    <span className="mr-1 tracking-wider text-neutral-400 text-xs font-bold pr-1">View All</span>
                    <div className="rounded-full h-5 w-5 bg-white flex justify-center items-center">
                        <RightArrowIcon className="stroke-neutral-400" height={20} width={20} />
                    </div>
                </Link>
            </div>

            {imageData.subcategory && imageData.subcategory.length > 0 ? (
                <SubCategorySection data={imageData.subcategory} />
            ) : (
                <div className="flex flex-row overflow-auto w-full no-scrollbar mb-2 px-4">
                    {imageData.data &&
                        imageData.data.map((image, index) => (
                            <Link href={`/image-selection/${image._id}`} key={index} onClick={() => handleImageClick(image)} className="first:-ml-1 mx-0.5 w-full">
                                <Image
                                    height={100}
                                    width={100}
                                    src={image.url}
                                    alt={`Image ${index + 1}`}
                                    className="h-[125px] min-w-[125px] rounded-lg"
                                    style={{ boxShadow: "0px 0px 0.5px 0.5px #d4d5d6" }}
                                />
                            </Link>
                        ))}
                </div>
            )}
        </>
    );
}

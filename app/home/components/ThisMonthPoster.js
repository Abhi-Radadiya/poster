"use client";

import Image from "next/image";
import CalenderIcon from "../../../assets/calendar-icon.svg";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useImageData } from "@/context/ImageDataContext";
import { format } from "date-fns";

export default function Page(props) {
    const { poster } = props;

    const formattedData = poster?.reduce((acc, poster) => {
        const formattedDate = new Date(poster.date).toLocaleDateString("en-US", { day: "2-digit", month: "long" });

        const existingDateGroup = acc.find((group) => group.date === formattedDate);

        if (existingDateGroup) {
            existingDateGroup.image.push(poster);
        } else {
            acc.push({
                date: formattedDate,
                image: [poster],
            });
        }

        return acc;
    }, []);

    useEffect(() => {
        setDateWisePoster(formattedData);
    }, [poster]);

    const containerRef = useRef(null);

    const scrollToImages = (date) => {
        const index = dateWisePoster.findIndex((el) => el.date === date);
        if (containerRef.current && index !== -1) {
            const element = containerRef.current.children[index];
            if (element) {
                const position = element.offsetLeft;
                containerRef.current.scrollTo({ left: position, behavior: "smooth" });
            }
        }
    };

    const [dateWisePoster, setDateWisePoster] = useState([]);

    const { setImageData } = useImageData();

    const handleImageClick = (image) => {
        setImageData({ allImage: poster, selectedImage: image });
    };

    return (
        <>
            <div className="flex flex-row items-center mt-7 mx-4">
                <div className="rounded-full h-7 w-7 bg-white flex items-center justify-center">
                    <CalenderIcon height={14} width={14} className="stroke-neutral-400" />
                </div>
                <span className="ml-2 font-bold text-neutral-600">Festival Calendar 2023</span>
            </div>

            <div className="flex flex-row overflow-auto mt-3 mx-2 mb-2 no-scrollbar" style={{ scrollbarColor: "transparent transparent" }}>
                {dateWisePoster?.map((el, index) => (
                    <div
                        className="h-12 w-fit px-1 mx-1 bg-white rounded-lg flex-none cursor-pointer flex items-center justify-center text-center"
                        key={index}
                        onClick={() => scrollToImages(el.date)}
                    >
                        <div className="flex items-center px-1 text-[11px] font-medium text-neutral-700 justify-center">{el.date}</div>
                    </div>
                ))}
            </div>

            <div ref={containerRef} className="flex flex-row overflow-auto w-full no-scrollbar py-2 pl-2">
                {dateWisePoster?.map((el, dateIndex) => (
                    <div key={dateIndex} className="flex flex-row">
                        {el.image.map((image, index) => (
                            <Link
                                href={`/image-selection/${index}`}
                                onClick={() => handleImageClick(image)}
                                key={index}
                                className="flex flex-row items-center justify-center mx-1 w-full relative"
                            >
                                <Image
                                    loading="lazy"
                                    height={100}
                                    key={index}
                                    src={image.url}
                                    alt={`Image ${index + 1}`}
                                    className="flex-none h-[125px] min-w-[125px] rounded-xl"
                                    width={100}
                                    style={{ boxShadow: "0px 0px 0.5px 0.5px #d4d5d6" }}
                                />
                                <span
                                    style={{ boxShadow: "0px 0px 0.5px 0.5px #d4d5d6" }}
                                    className="text-xs absolute left-[0px] py-1 bottom-0 bg-white rounded-tr-md rounded-bl-md px-1.5"
                                >
                                    {format(new Date(el.date), "dd")}
                                </span>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

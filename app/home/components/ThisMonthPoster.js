"use client";

import Image from "next/image";
import CalenderIcon from "../../../assets/calendar-icon.svg";
import image from "../../../assets/demo-poster-header.jpg";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { axiosInstance } from "@/APIHelper/axios";

const data = [
    { date: "18 Apr", image: [image, image, image, image, image] },
    { date: "19 Apr", image: [image, image, image] },
    { date: "20 Apr", image: [] },
    { date: "21 Apr", image: [image, image, image, image, image, image, image] },
    { date: "22 Apr", image: [] },
    { date: "23 Apr", image: [image, image, image] },
    { date: "24 Apr", image: [image, image, image] },
    { date: "25 Apr", image: [image, image, image, image, image] },
    { date: "26 Apr", image: [image, image, image] },
    { date: "27 Apr", image: [] },
    { date: "28 Apr", image: [image, image, image, image, image, image, image] },
    { date: "29 Apr", image: [] },
    { date: "30 Apr", image: [image, image, image] },
];

export default function Page() {
    const containerRef = useRef(null);

    const scrollToImages = (date) => {
        const index = dateWisePoster.findIndex((el) => el.date === date);
        if (containerRef.current && index !== -1) {
            const position = index * 100;
            containerRef.current.scrollTo({ left: position, behavior: "smooth" });
        }
    };

    const [dateWisePoster, setDateWisePoster] = useState([]);

    const fetchFestivalData = async () => {
        try {
            const response = await axiosInstance.get("/festival-image");
            setDateWisePoster(response.data);
        } catch (error) {
            console.log("error ==> ", error);
        }
    };

    useEffect(() => {
        fetchFestivalData();
    }, []);

    return (
        <>
            <div className="flex flex-row items-center mt-8 mx-4">
                <div className="rounded-full h-7 w-7 bg-white flex items-center justify-center">
                    <CalenderIcon height={14} width={14} className="stroke-neutral-400" />
                </div>
                <span className="ml-2 font-bold text-neutral-600">Festival Calendar 2023</span>
            </div>

            <div className="flex flex-row overflow-auto mt-3 mx-2 mb-2 no-scrollbar" style={{ scrollbarColor: "transparent transparent" }}>
                {dateWisePoster.map((el, index) => (
                    <div
                        className="h-12 w-12 mx-1 bg-white rounded-lg flex-none cursor-pointer flex items-center justify-center text-center"
                        key={index}
                        onClick={() => scrollToImages(el.date)}
                    >
                        <div className="flex items-center text-xs font-medium text-neutral-700 justify-center">{el.date}</div>
                    </div>
                ))}
            </div>

            <div ref={containerRef} className="flex flex-row overflow-auto w-full no-scrollbar pl-2">
                {dateWisePoster.map((el, dateIndex) => (
                    <div key={dateIndex} className="flex flex-row">
                        {el.image.map((image, index) => (
                            <Link href={`/image-selection/${index}`} key={index} className="flex flex-row items-center justify-center mx-1 w-full relative">
                                <Image
                                    loading="lazy"
                                    height={100}
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="flex-none mx-4 h-[104px] min-w-[78px] rounded-xl"
                                    width={100}
                                />
                                <span className="text-xs absolute left-0.5 py-1 bottom-0 bg-neutral-500 rounded-tr-md px-1.5">{el.date}</span>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Frame1, Frame2, Frame3, Frame4, Frame5 } from "@/components/Frames/Frame";
import { useSelector } from "react-redux";

export default function SelectedImageSection(props) {
    const { imageDetails, sectionRef, style } = props;

    const frames = [Frame1, Frame2, Frame3, Frame4, Frame5];

    const frameDetails = useSelector((state) => state.frame.data);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
    };

    return (
        <>
            <div className="w-full flex justify-center mb-4">
                <div className="relative h-[320px] w-[320px] bg-white leading-normal" ref={sectionRef}>
                    {imageDetails?.url && <img alt="x" src={imageDetails?.url} className="absolute top-0" />}

                    <Slider {...settings} className="">
                        {frames.map((Frame, index) => (
                            <React.Fragment key={index}>
                                <Frame {...frameDetails} style={style} />
                            </React.Fragment>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Link from "next/link";

const Carousel = (props) => {
    const { banner } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "10%",
        width: 500,
    };

    return (
        <div className="mt-2">
            <Slider {...settings} className="slick-dots-custom">
                {banner?.map((el, index) => (
                    <Link href={`/image-selection/${index}`} key={index} className="flex justify-center px-1">
                        <img alt="" src={el?.url} className="rounded-xl w-[80vw] h-[200px]" />
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

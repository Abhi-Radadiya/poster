// app/page.js
"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import TrendingBanners from "./components/TrendingBanners";
import ThisMonthPoster from "./components/ThisMonthPoster";
import SingleScrollingSection from "./components/SingleScrollingSection";
import TimeWatch from "@/assets/time-watch.svg";
import Loader from "./components/Loader";
import { useInitializeDeviceId } from "@/hooks/useInitializeDeviceId";
import { fetchPosters } from "@/store/posterReducer";

export default function Home() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.posters);

    useInitializeDeviceId();

    useEffect(() => {
        !data?.length && dispatch(fetchPosters());
    }, [dispatch]);

    return (
        <>
            <div className="w-full mb-[80px]">
                <Header />

                <TrendingBanners banner={data.find((el) => el.category === "banner")?.data} />

                <ThisMonthPoster poster={data.find((el) => el.category === "festival")?.data} />

                {loading ? (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                ) : (
                    data
                        .filter((el) => el.category !== "banner" && el.category !== "festival")
                        .map((item) => <SingleScrollingSection key={item.category} title={item.category} icon={<TimeWatch stroke={2} height={16} width={16} />} imageData={item} />)
                )}
            </div>
        </>
    );
}

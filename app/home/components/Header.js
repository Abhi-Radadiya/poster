"use client";

import React from "react";
import NextIcon from "../../../assets/chevron-right.svg";
import NotificationIcon from "../../../assets/notification.svg";
import SearchIcon from "../../../assets/search.svg";

export default function Header() {
    return (
        <div className="px-4 sticky top-0 w-full bg-[#fcfcfc] z-50 bg-opacity-100">
            <div className="flex flex-row justify-between items-center mb-2.5">
                <div className="flex flex-col">
                    <div className="mt-2 items-center flex flow-row gap-1">
                        <span className="text-[12px] text-neutral-500 font-medium">Your business</span>
                        <span className="font-bold bg-blue-500 w-fit rounded-md px-1 py-0.5 text-white text-[10px]">Subscribe</span>
                    </div>
                    <div className="flex flex-row items-center -mt-1.5">
                        <span className="font-medium text-neutral-700">Rushitx info texh</span>
                        <span className="-ml-2">
                            <NextIcon />
                        </span>
                    </div>
                </div>

                <NotificationIcon className="stroke-neutral-400 fill-neutral-400" stroke="#FFFFFF" height="24" width="24" />
            </div>

            {/* <div className="relative h-12 -mx-1">
                <input type="text" className="h-full rounded-xl absolute top-0 pl-12 w-full" placeholder="Search categories or media" />

                <span className="top-[13px] absolute left-2">
                    <SearchIcon height="20" className="" />
                </span>
            </div> */}
        </div>
    );
}

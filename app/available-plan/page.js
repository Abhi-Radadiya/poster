"use client";
import React, { useState } from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
import Link from "next/link";

const PricingTable = () => {
    const pricingList = [
        { name: "Festival" },
        { name: "Trending Event" },
        { name: "Devotional Quote" },
        { name: "Motivational Quote" },
        { name: "Business Quote" },
        { name: "Good Morning Quote" },
    ];

    const [enabledPackage, setEnabledPackage] = useState("standard");

    const onClick = () => {};

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-row items-center mb-3">
                <Link href="/home" className="rounded-full h-8 w-8 bg-[#efefef73] mr-2">
                    <RightArrowIcon className="rotate-180 stroke-neutral-400" />
                </Link>

                <div className="-mr-1.5 mt-0.5 tracking-wider text-neutral-600 text-base font-bold">Back</div>
            </div>

            <div className="flex justify-center mb-4">
                <div
                    className={`${
                        enabledPackage === "popular" ? "border-yellow-500 border-x-[1.5px] border-t-[1.5px]" : "border-yellow-500 pt-[1.5px]"
                    } bg-white rounded-lg shadow-lg w-1/2`}
                    onClick={() => setEnabledPackage("popular")}
                >
                    <div className="text-center p-4">
                        <p>
                            <span className="line-through">₹149/-</span> 67%
                        </p>
                        <p className="text-2xl font-bold">₹49</p>
                        <p className="text-gray-500">/Month</p>
                    </div>
                    <div className={`${enabledPackage === "popular" ? " bg-yellow-500" : "bg-yellow-500"} text-white text-center py-2 rounded-b-lg`}>Popular</div>
                </div>

                <div
                    className={`${
                        enabledPackage === "standard" ? "border-[#0866ff] border-x-[1.5px] border-t-[1.5px]" : "border-[#0866ff] pt-[1.5px]"
                    } bg-white rounded-lg shadow-lg w-1/2 ml-4`}
                    onClick={() => setEnabledPackage("standard")}
                >
                    <div className="text-center p-4">
                        <p>
                            <span className="line-through">₹899/-</span> 77%
                        </p>
                        <p className="text-2xl font-bold">₹199</p>
                        <p className="text-gray-500">/Year</p>
                    </div>
                    <div className={`${enabledPackage === "standard" ? "bg-[#0866ff]" : "bg-[#0866ff]"} text-white text-center py-2 rounded-b-lg`}>Standard</div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 text-left">Feature</th>
                            <th className="p-4 text-center">Popular</th>
                            <th className="p-4 text-center">Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingList.map((el, index) => {
                            return (
                                <tr className="border-b" key={index}>
                                    <td className="p-4 w-fit max-w-[140px]">
                                        <div className="flex flex-col w-fit">
                                            <span className="font-bold w-fit pb-1">{el.name}</span>
                                            <ul className="list-inside text-xs ml-2 w-fit">
                                                <li>Normal Image</li>
                                                {el.name !== "Trending Event" && <li>AI Image</li>}
                                                {el.name !== "Trending Event" && <li>Video</li>}
                                            </ul>
                                        </div>
                                    </td>
                                    <td className={`p-4 text-center ${enabledPackage !== "standard" && "bg-yellow-100"}`} onClick={() => setEnabledPackage("popular")}>
                                        <span className="text-green-500">✓</span>
                                    </td>
                                    <td className={`p-4 text-center ${enabledPackage === "standard" && "bg-blue-100"}`} onClick={() => setEnabledPackage("standard")}>
                                        <span className="text-green-500">✓</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 w-full px-2 mb-28">
                <input className="w-full px-4 py-2.5 rounded-xl border shadow-md border-neutral-300" placeholder="Enter coupen code" />
            </div>

            <div className="w-full mt-4 bg-white fixed bottom-0 py-4 -ml-4 px-4 rounded-t-2xl">
                <button className={`py-5 rounded-xl bg-blue-600 px-4 text-white font-bold uppercase text-base tracking-wider w-full`} onClick={onClick}>
                    {`Pay ${enabledPackage === "popular" ? "₹49/-" : "₹149/-"} & Subscribe`}
                </button>
            </div>
        </div>
    );
};

export default PricingTable;

"use client";

import React, { useState } from "react";
import Input from "./Component/Input";
import ImageUploader from "./Component/ImageUploader";
import Link from "next/link";

export default function Page() {
    const today = new Date().toISOString().split("T")[0];

    const [gender, setGender] = useState("male");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <div className="py-3 mx-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-3">
                    <Link href="/menu" className="bg-white rounded-xl border-none p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>

                    <span className="font-medium text-sm tracking-wide">Edit Profile</span>
                </div>

                <span className="font-normal text-[15px] tracking-widest text-blue-600">Save</span>
            </div>

            <ImageUploader />

            <span className="text-neutral-400 font-medium px-5">Personal Information</span>

            <div className="px-5 mt-3">
                <Input placeholder="Enter Name" label="Enter Name" />
            </div>

            <div className="px-5 mt-3 mb-6 w-full">
                <label className="text-[14px] text-neutral-700 font-medium pb-2 tracking-wide" htmlFor="">
                    Enter Birth Date
                </label>
                <div className="flex justify-center items-center w-full mt-1">
                    <div className="relative w-full">
                        <input id="date-input" type="date" max={today} placeholder="Select date" className="w-full p-4 bg-white rounded-md" />
                    </div>
                </div>
            </div>

            <span className="text-neutral-400 font-medium px-5">Gender</span>

            <div className="flex flex-row gap-3 mt-1.5 mb-6 px-5">
                <label className="flex flex-row items-center gap-1 text-neutral-600">
                    <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
                    Male
                </label>
                <label className="flex flex-row items-center gap-1 text-neutral-600">
                    <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} />
                    Female
                </label>
                <label className="flex flex-row items-center gap-1 text-neutral-600">
                    <input type="radio" value="other" checked={gender === "other"} onChange={handleGenderChange} />
                    Other
                </label>
            </div>

            <span className="text-neutral-400 font-medium px-5">Contact Details</span>

            <div className="px-5 mt-2">
                <Input placeholder="Enter Email Address" label="Email Address" />
            </div>

            <div className="px-5 mt-2">
                <Input disabled={true} value="1456789231" label="Mobile Number" />
            </div>

            <div className="px-5 mt-2">
                <Input disabled={true} value="Rajkot, Gujarat, India" label="City" />
            </div>

            <div className="mx-5 mt-6 mb-10">
                <button className="w-full font-bold text-white bg-blue-500 rounded-3xl py-3">Save</button>
            </div>
        </>
    );
}

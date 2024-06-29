"use client";

import React, { useState } from "react";
import SearchIcon from "@/assets/search.svg";
import { axiosInstance } from "@/APIHelper/axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();

    const industry = searchParams.get("industry");

    const [details, setDetails] = useState({ email: "", name: "", mobileNumber2: "", email2: "", address: "", website: "", industry });

    const { push } = useRouter();

    const saveDetails = async () => {
        try {
            const response = await axiosInstance.post("/auth/user-registration", { ...details });

            if (response?.status == "200") {
                push("/");
            }
        } catch (error) {
            console.log("error ==> ", error);
        }
    };

    const onSubmit = () => {
        saveDetails();
    };

    return (
        <>
            <section className="py-[52px] pl-5 bg-neutral-200">
                <div className="mb-1 font-bold">Business details</div>
                <div className="text-neutral-500 max-w-[290px]">Enter your valid business details to posts related to your business</div>
            </section>

            <section>
                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="text"
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Business Name"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, name: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="email"
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Email ID"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, email: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="email"
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Email ID 2"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, email2: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="text"
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Address"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, address: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="tel"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength={10}
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Phone number 2"
                        onInput={(e) => {
                            let value = e.target.value;
                            if (value === "" || /^\d+$/.test(value)) {
                                e.target.value = value.slice(0, 10);
                            } else {
                                e.target.value = value.replace(/\D/g, "").slice(0, 10);
                            }
                        }}
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNumber2: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>

                <div className="relative h-12 mx-6 mt-5">
                    <input
                        type="text"
                        className="h-full rounded-xl absolute top-0 w-full pl-12"
                        placeholder="Website"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, website: e.target.value }))}
                    />

                    <span className="top-2.5 absolute left-2">
                        <SearchIcon height="20" className="" />
                    </span>
                </div>
            </section>

            <div className="text-center w-full rounded-xl mt-10">
                <div className="w-full">
                    <button className="w-full max-w-[80vh] mt-4 py-5 rounded-xl bg-blue-600 px-4 text-white uppercase mx-5 text-xs tracking-wider" onClick={() => onSubmit()}>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}

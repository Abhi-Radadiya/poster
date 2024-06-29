"use client";

import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6 } from "@/components/Frames/Frame";
import React, { useEffect, useRef, useState } from "react";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import Input from "@/app/edit-profile/Component/Input";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

export default function Page({ params }) {
    const { id } = params;

    console.log("id ==> ", id);

    const sectionRef = useRef();

    const [details, setDetails] = useState({ number: "", email: "", website: "", address: "" });

    const frameDetails = useSelector((state) => state.frame.data);

    // http://192.168.43.147:3000/frame/1

    useEffect(() => {
        !isEmpty(frameDetails) && setDetails(frameDetails);
    }, [frameDetails]);

    const frames = { 1: Frame1, 2: Frame2, 3: Frame3, 4: Frame4, 5: Frame5, 6: Frame6 };

    const ComponentToRender = frames[id];

    return (
        <>
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-1">
                        <BackIcon className="w-8 h-8 stroke-neutral-500 rotate-180" />
                    </Link>

                    <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Edit Business d profile</span>
                </div>
            </div>

            <div className="p-4 gap-2 space-y-2">
                {/* name, email, webSite, address */}

                <ComponentToRender sectionRef={sectionRef} number={details.number} email={details.email} webSite={details.website} address={details.address} />

                {/* <Frame1 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} />
                <Frame2 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} />
                <Frame3 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} />
                <Frame4 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} />
                <Frame5 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} />
                <Frame6 sectionRef={sectionRef} number={details.mobileNumber} email={details.email} webSite={details.webSite} address={details.address} /> */}
            </div>

            <Input label="number" handleChange={(e) => setDetails((prevState) => ({ ...prevState, number: e.target.value }))} placeholder="Name" value={details.number} />
            <Input label="email" handleChange={(e) => setDetails((prevState) => ({ ...prevState, email: e.target.value }))} placeholder="email" value={details.email} />
            <Input label="webSite" handleChange={(e) => setDetails((prevState) => ({ ...prevState, website: e.target.value }))} placeholder="webSite" value={details.website} />
            <Input label="address" handleChange={(e) => setDetails((prevState) => ({ ...prevState, address: e.target.value }))} placeholder="address" value={details.address} />
        </>
    );
}

/* eslint-disable no-prototype-builtins */
"use client";

import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6 } from "@/components/Frames/Frame";
import React, { useEffect, useRef, useState } from "react";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { axiosInstance } from "@/APIHelper/axios";
import { useRouter } from "next/navigation";
import { fetchFrameDetail } from "@/store/detailsSlice";
import ColorPalletIcon from "@/assets/color-palette.svg";
import InputForm from "./Components/InputForm";
import ColorSelection from "../../image-selection/components/ColorSelection";

export default function Page({ params }) {
    const { id } = params;

    const sectionRef = useRef();

    const [details, setDetails] = useState({ number: "", email: "", website: "", address: "" });

    const frameDetails = useSelector((state) => state.frame.data);

    const { push } = useRouter();

    useEffect(() => {
        !isEmpty(frameDetails) &&
            setDetails({
                mobileNumber: frameDetails.mobileNumber,
                email: frameDetails.email,
                website: frameDetails.website,
                address: frameDetails.address,
            });
    }, [frameDetails]);

    const frames = { 1: Frame1, 2: Frame2, 3: Frame3, 4: Frame4, 5: Frame5, 6: Frame6 };

    const ComponentToRender = frames[id];

    const dispatch = useDispatch();

    const handleSave = async () => {
        try {
            const response = await axiosInstance.put("/frames/update-details", { ...details });
            if (response.status === 200) {
                push("/profile");
                dispatch(fetchFrameDetail());
            }
        } catch (error) {
            console.log("error : ", error);
        }
    };

    const [hasLimitAddress, setHasLimitAddress] = useState(false);

    const setAddress = (address) => {
        if (address.length < 65) {
            setDetails((prevState) => ({ ...prevState, address }));
            setHasLimitAddress(false);
            return;
        }

        setHasLimitAddress(true);
    };

    const [style, setstyle] = useState({ backgroundColor: "#000000", color: "#FFFFFF" });

    const [showCOlor, setShowCOlor] = useState(false);

    return (
        <>
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-1">
                        <BackIcon className="w-8 h-8 stroke-neutral-500 rotate-180" />
                    </Link>

                    <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Edit Business profile</span>
                </div>
            </div>

            <div className="p-4">
                <ComponentToRender sectionRef={sectionRef} {...details} style={style} />
            </div>

            <div
                className="mx-6 w-fit px-2 py-1 mb-2 flex flex-row items-center gap-2 border border-neutral-300 rounded-xl"
                onClick={() => setShowCOlor((prevState) => !prevState)}
            >
                <span>
                    <ColorPalletIcon className="w-4 h-4" />
                </span>

                <span className="text-base">Edit color</span>
            </div>

            {showCOlor ? (
                <ColorSelection setstyle={setstyle} />
            ) : (
                <InputForm setDetails={setDetails} details={details} id={id} setAddress={setAddress} hasLimitAddress={hasLimitAddress} handleSave={handleSave} />
            )}
        </>
    );
}

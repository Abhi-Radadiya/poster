/* eslint-disable no-prototype-builtins */
"use client";

import { Frame1, Frame2, Frame3, Frame4, Frame5, Frame6 } from "@/components/Frames/Frame";
import React, { useEffect, useRef, useState } from "react";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import Button from "@/components/Button/Button";
import { Input } from "@/components/InputField/Input";
import { axiosInstance } from "@/APIHelper/axios";
import { useRouter } from "next/navigation";
import { fetchFrameDetail } from "@/store/detailsSlice";

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

            <div className="p-4">
                <ComponentToRender sectionRef={sectionRef} {...details} />
            </div>

            <div className="px-6 space-y-3 mb-6 pb-3">
                <Input
                    label="Mobile Number"
                    onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNumber: e }))}
                    placeholder="Enter mobile number"
                    value={details.mobileNumber}
                    inputType="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={10}
                    action={!details.hasOwnProperty("mobileNumber2") && id > 3 && !details.hasOwnProperty("email2") && "+ Add"}
                    actionTextColor="text-blue-500"
                    handleClickAction={() => setDetails((prevState) => ({ ...prevState, mobileNumber2: "" }))}
                />

                {details.hasOwnProperty("mobileNumber2") && id > 3 && (
                    <Input
                        label="Mobile Number"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNumber2: e }))}
                        placeholder="Enter mobile number"
                        value={details?.mobileNumber2}
                        inputType="tel"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength={10}
                        action="- Remove"
                        actionTextColor="text-red-500"
                        handleClickAction={() =>
                            setDetails((prevState) => {
                                const { mobileNumber2, ...newState } = prevState;
                                return newState;
                            })
                        }
                    />
                )}

                <Input
                    label="Email"
                    inputType="email"
                    onChange={(e) => setDetails((prevState) => ({ ...prevState, email: e }))}
                    placeholder="Enter email address"
                    value={details.email}
                    action={!details.hasOwnProperty("mobileNumber2") && id > 3 && !details.hasOwnProperty("email2") && "+ Add"}
                    actionTextColor="text-blue-500"
                    handleClickAction={() => setDetails((prevState) => ({ ...prevState, email2: "" }))}
                />

                {details.hasOwnProperty("email2") && id > 3 && (
                    <Input
                        label="Email"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, email2: e }))}
                        placeholder="Enter Email"
                        value={details?.email2}
                        action="- Remove"
                        actionTextColor="text-red-500"
                        handleClickAction={() =>
                            setDetails((prevState) => {
                                const { email2, ...newState } = prevState;
                                return newState;
                            })
                        }
                    />
                )}

                <Input label="Website" onChange={(e) => setDetails((prevState) => ({ ...prevState, website: e }))} placeholder="Enter website" value={details.website} />

                <Input label="Address" boxClass="mb-1" maxLength={65} inputType="text" onChange={(e) => setAddress(e)} placeholder="Enter address" value={details.address} />

                {hasLimitAddress && <span className="text-sm text-red-600">* Please make address smaller</span>}

                <div className="pt-6">
                    <Button label="Save" onClick={handleSave} />
                </div>
            </div>
        </>
    );
}

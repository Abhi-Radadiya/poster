"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import BackIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import Image from "next/image";
import demo from "@/assets/demo-poster-header.jpg";
import Input from "@/app/edit-profile/Component/Input";
import { axiosInstance } from "@/APIHelper/axios";
import { useRouter } from "next/navigation";

export default function Page() {
    const [isBusinessDetailsInView, setIsBusinessDetailsInView] = useState(true);
    const [showMoreBusinessDetails, setShowMoreBusinessDetails] = useState(false);
    const [showSocialDetails, setShowSocialDetails] = useState(false);
    const businessDetailsRef = useRef(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsBusinessDetailsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        if (businessDetailsRef.current) {
            observer.observe(businessDetailsRef.current);
        }

        fetchBusinessDetails();

        return () => {
            if (businessDetailsRef.current) {
                observer.unobserve(businessDetailsRef.current);
            }
        };
    }, []);

    const fetchBusinessDetails = async () => {
        try {
            const response = await axiosInstance.get("/user/business");

            console.log(`response.data ==>`, response.data.business);
        } catch (error) {
            console.log(`error ==>`, error);
        }
    };

    const { push } = useRouter();

    const createBusinessProfile = async (body) => {
        try {
            const response = await axiosInstance.post("/user/business", body);

            if (response.success) {
                push("/profile");
            }

            console.log(`response ==>`, response);
        } catch (error) {
            console.log(`error ==>`, error);
        }
    };

    const onSubmit = (data) => {
        createBusinessProfile(data);
    };

    const socialInput = [
        { label: "Facebook", placeholder: "Enter Facebook", name: "facebook" },
        { label: "Instagram", placeholder: "Enter Instagram", name: "instagram" },
        { label: "Twitter", placeholder: "Enter Twitter", name: "twitter" },
        { label: "Youtube", placeholder: "Enter Youtube", name: "youtube" },
        { label: "LinkedIn", placeholder: "Enter LinkedIn", name: "linkedin" },
    ];

    const handleLogoChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.onloadend = () => {
            setValue("imageFile", e.target.files[0]);
            setValue("image", reader.result);
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 flex flex-row justify-between items-center sticky top-0 bg-[#efefef] z-10">
                <div className="flex flex-row items-center gap-4">
                    <Link href="/profile" className="bg-neutral-50 rounded-full h-full w-fit p-1">
                        <BackIcon className="w-8 h-8 stroke-neutral-500 rotate-180" />
                    </Link>

                    {!isBusinessDetailsInView && <span className="text-neutral-800 font-medium pr-3 tracking-wide text-[16px]">Business Details</span>}
                </div>
            </div>

            <div className="flex flex-col gap-1 px-4 mt-5 pr-8 mb-20">
                <span className="font-medium tracking-wide text-lg" ref={businessDetailsRef}>
                    Business Details
                </span>
                <span className="text-neutral-400 text-sm">Enter your valid business details to receive posts related to your business</span>
            </div>

            <div className="px-5 pb-6">
                <span>Logo</span>

                {!!watch("image") && <Image src={watch("image")} alt="" className="rounded-xl" width={80} height={80} />}

                <input type="file" accept="image/*" id="logo-upload" className="hidden" onChange={handleLogoChange} />

                <label htmlFor="logo-upload" className="cursor-pointer w-full h-full py-2 mt-4 rounded-xl bg-blue-600 text-white flex items-center justify-center max-w-[200px]">
                    {/* {!details.image ? "Upload Logo" : "Change Logo"} */}
                    Upload Logo
                </label>

                <div className="mt-3">
                    <Controller
                        name="businessName"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Business Name is required" }}
                        render={({ field }) => <Input handleChange={field.onChange} label="Business Name" placeholder="Enter Business Name" {...field} />}
                    />
                    {errors.businessName && <span className="text-red-500 text-sm">{errors.businessName.message}</span>}
                </div>

                <div className="mt-5">
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        }}
                        render={({ field }) => <Input handleChange={field.onChange} label="Email Id" placeholder="Enter Email" {...field} />}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                <div className="mt-5">
                    <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Phone Number is required" }}
                        render={({ field }) => <Input handleChange={field.onChange} label="Phone Number" type="number" placeholder="Enter Phone Number" {...field} />}
                    />
                    {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                </div>
            </div>

            <div className="mx-4 mb-6 py-6 border-b border-t border-neutral-300">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMoreBusinessDetails(!showMoreBusinessDetails)}>
                    <BackIcon className={`w-7 h-7 stroke-neutral-700 stroke-[1px] ${showMoreBusinessDetails && "rotate-90"}`} />
                    <span className="font-semibold text-neutral-700">More Business Details</span>
                </div>

                <div className={`transition-all duration-300 ease-in-out ${showMoreBusinessDetails ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                    <div className="mt-3">
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Address is required" }}
                            render={({ field }) => <Input handleChange={field.onChange} label="Address" placeholder="Enter Address" {...field} />}
                        />
                        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                    </div>

                    <div className="mt-5">
                        <Controller
                            name="mobileNumber2"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input type="number" handleChange={field.onChange} label="Phone Number 2" placeholder="Enter Phone Number" {...field} />}
                        />
                    </div>

                    <div className="mt-5">
                        <Controller
                            name="website"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input handleChange={field.onChange} label="Website" placeholder="Enter Website" {...field} />}
                        />
                    </div>
                </div>
            </div>

            <div className="mx-4 mb-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowSocialDetails(!showSocialDetails)}>
                    <BackIcon className={`w-7 h-7 stroke-neutral-700 stroke-[1px] ${showSocialDetails && "rotate-90"}`} />

                    <span className="font-semibold text-neutral-700">Social</span>
                </div>

                <div className={`transition-all duration-300 ease-in-out ${showSocialDetails ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                    {socialInput.map((el, index) => (
                        <div className="mt-3" key={index}>
                            <Controller name={el.name} control={control} defaultValue="" render={({ field }) => <Input handleChange={field.onChange} {...el} {...field} />} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-4">
                <button
                    className="py-5 mb-6 rounded-3xl bg-blue-600 px-4 text-white uppercase text-xs tracking-wider w-full mt-12 transition duration-200 ease-in-out"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

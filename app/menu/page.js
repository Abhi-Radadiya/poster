import React from "react";
import ProfileIcon from "@/assets/profile.svg";
import CustomizeIcon from "@/assets/CustomizeIcon.svg";
import CopyIcon from "@/assets/copy.svg";
import RightIcon from "@/assets/chevron-right.svg";
import Link from "next/link";
import ChatIcon from "@/assets/chat.svg";
import TIcketIcon from "@/assets/ticket.svg";
import FAQIcon from "@/assets/faqs.svg";
import FeedbackIcon from "@/assets/feedback.svg";
import PrivacyIcon from "@/assets/privacy.svg";
import FollowIcon from "@/assets/follow.svg";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import WhastappIcon from "@/assets/whatsapp.svg";
import LinkedIcon from "@/assets/linkdln.svg";

export default function Page() {
    const whatsappNumber = "7433804998";
    const message = "Hello, I would like to connect with an expert.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <div className="flex flex-row justify-between items-center px-2">
                <Link className="flex flex-row items-center gap-3 mt-3" href="/edit-profile">
                    <ProfileIcon className="h-14 w-14" />
                    <div className="flex flex-col">
                        <span className="font-medium text-[20px] text-neutral-700">Rushit xx</span>
                        <span className="font-medium text-[13px] text-neutral-400 tracking-wide">+91 8888 88 888</span>
                    </div>
                </Link>

                <Link className="font-medium text-[16px] text-blue-600" href="/edit-profile">
                    EDIT
                </Link>
            </div>

            <div className="px-4 pt-5 flex flex-row gap-4">
                <Link href="/my-business" className="flex flex-col w-1/2 bg-white rounded-xl p-5 items-center">
                    <CustomizeIcon />
                    <span className="font-normal text-[16px]">My Businesses</span>
                </Link>
                <div className="flex flex-col w-1/2 bg-white rounded-xl p-5 items-center">
                    <CustomizeIcon />
                    <span className="font-normal text-[16px]">Download</span>
                </div>
            </div>

            <div className="px-4 mb-7">
                <div className="bg-white rounded-xl mt-5 pb-4">
                    <div className="w-full py-1 rounded-t-xl mb-4 font-medium px-3 bg-neutral-300 text-[10px] text-neutral-600 tracking-wider">
                        Earn upto 1000 point coins per friend
                    </div>

                    <div className="flex flex-row w-full">
                        <div className="w-full max-w-[70%] pr-5">
                            <div className="px-2 flex flex-row justify-between items-center py-2 rounded-lg border-dashed border-neutral-300 border ml-3">
                                <span className="text-[12px]">JJJJ45</span>
                                <CopyIcon className="h-4 w-4 stroke-neutral-300" />
                            </div>

                            <button className="px-4 bg-blue-600 py-1.5 text-white font-normal text-[14px] rounded-3xl ml-3 mt-4">Refer Now</button>
                            <button className="px-4 bg-blue-600 py-1.5 text-white font-normal text-[14px] rounded-3xl ml-3">Share</button>
                        </div>

                        <div className="flex flex-col justify-center items-center w-[30%] pr-6 pt-10">
                            <span className="font-medium text-xl">20</span>
                            <span className="font-medium text-[12px] text-neutral-600 -mt-1">Earned coins</span>
                        </div>
                    </div>
                </div>
            </div>

            <span className="text-neutral-400 text-base px-5">Plans</span>

            <div className="bg-white mx-5 px-5 py-4 mt-2 rounded-xl mb-7">
                <div className="flex flow-row justify-between items-center">
                    <Link href="/available-plan">
                        <div className="flex flex-row gap-3 items-center cursor-pointer rounded">
                            <CopyIcon className="h-5 w-5 stroke-neutral-200" />
                            <span className="text-base">Available Plans</span>
                        </div>
                    </Link>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </div>
            </div>

            <span className="text-neutral-400 text-base px-5">Help & Support</span>

            <div className="bg-white mx-5 px-4 py-4 mt-2 rounded-xl mb-7">
                <div className="flex flow-row justify-between items-center">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row gap-3 items-center cursor-pointer rounded">
                            <ChatIcon className="h-5 w-5 stroke-neutral-200" />
                            <span className="text-base">Chat with an Expert</span>
                        </div>
                    </Link>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </div>

                <div className="flex flow-row justify-between py-8">
                    <Link href="/generate-ticket" className="flex flow-row gap-3 items-center">
                        <TIcketIcon className="h-5 w-5 stroke-neutral-200" />
                        <span className="text-base">Generate Ticket</span>
                    </Link>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </div>

                <div className="flex flow-row justify-between">
                    <div className="flex flow-row gap-3 items-center">
                        <FAQIcon className="h-5 w-5 stroke-neutral-200" />
                        <span className="text-base">FAQs</span>
                    </div>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </div>
            </div>

            <span className="text-neutral-400 text-base px-5">About App</span>

            <div className="bg-white mx-5 px-5 py-4 mt-2 rounded-xl mb-16">
                <Link href="feedback" className="flex flow-row justify-between items-center">
                    <div className="flex flow-row gap-3 items-center">
                        <FeedbackIcon className="h-5 w-5 stroke-[2px] stroke-neutral-200" />
                        <span className="text-base">Feedback</span>
                    </div>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </Link>

                <div className="flex flow-row justify-between py-8 items-center">
                    <div className="flex flow-row gap-3 items-center">
                        <PrivacyIcon className="h-5 w-5 stroke-[2px] stroke-neutral-200" />
                        <span className="text-base">Privacy Policy</span>
                    </div>

                    <RightIcon className="w-7 stroke-neutral-300" />
                </div>

                <div className="flex flow-row justify-between items-center">
                    <div className="flex flow-row gap-3 items-center">
                        <FollowIcon className="h-5 w-5 stroke-neutral-200" />
                        <span className="text-base">Follow us</span>
                    </div>

                    <div className="flex flex-row gap-3">
                        <FacebookIcon className="fill-neutral-500" />
                        {/* <TwitterIcon className='stroke-ne' /> */}
                        <InstagramIcon className="stroke-neutral-500" />
                        <WhastappIcon className="fill-neutral-500" />
                        <LinkedIcon className="fill-neutral-500" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mb-2">
                <span className="font-bold text-sm tracking-wide text-red-500">Logout</span>
            </div>

            <div className="flex flex-col gap-1 justify-center w-full text-center">
                <span className="text-[12px] text-neutral-400">App version 1.0.0</span>
                <span className="text-[12px] text-neutral-400">Made with &#9829; in India</span>
            </div>

            <div className="h-28"></div>
        </>
    );
}

"use client";

import { useState } from "react";
import ProfileIcon from "../../assets/profile.svg";
import MenuIcon from "../../assets/menu.svg";
import { TrayItem } from "./TrayItem";
import { usePathname } from "next/navigation";

import HomeIcon from "@/assets/home.svg";
import GalleryIcon from "@/assets/gallery-edit.svg";

const BottomNav = () => {
    const page = usePathname();

    const [activeTab, setActiveTab] = useState("Home");

    if (
        page === "/sign-up" ||
        page === "/login" ||
        page === "/choose-industry" ||
        page === "/fill-details" ||
        page === "/my-business" ||
        page === "/edit-business-details" ||
        page === "/generate-ticket" ||
        page === "/available-plan" ||
        page === "/terms-condition" ||
        page === "/privacy-policy" ||
        page === "/delete-data" ||
        page.startsWith("/edit-profile") ||
        page.startsWith("/add-business-details/") ||
        page.startsWith("/image-selection/") ||
        page.startsWith("/frame/")
    ) {
        return;
    }

    return (
        <div className={`w-full px-5 pb-2 fixed h-[60px] bg-white flex items-center bottom-0 justify-between`}>
            <TrayItem
                link="home"
                label="home"
                icon={
                    <HomeIcon
                        stroke={activeTab.toLowerCase() === "home" ? "#FFFFFF" : "#BCBEC0"}
                        fill={activeTab.toLowerCase() !== "home" ? "#FFFFFF" : "#525252"}
                        height={24}
                        width={24}
                    />
                }
                isActive={activeTab.toLowerCase() === "home"}
                handleIconClick={setActiveTab}
            />

            <div className="mt-[4px]">
                <TrayItem
                    link="customize/1"
                    label="Custom"
                    icon={
                        <GalleryIcon
                            stroke={activeTab.toLowerCase() === "custom" ? "#FFFFFF" : "#BCBEC0"}
                            fill={activeTab.toLowerCase() !== "custom" ? "#FFFFFF" : "#525252"}
                            height={24}
                            width={24}
                        />
                    }
                    isActive={activeTab.toLowerCase() === "custom"}
                    handleIconClick={setActiveTab}
                />
            </div>

            <TrayItem
                link="profile"
                label="profile"
                icon={
                    <ProfileIcon
                        stroke={activeTab.toLowerCase() === "profile" ? "#FFFFFF" : "#BCBEC0"}
                        fill={activeTab.toLowerCase() !== "profile" ? "#FFFFFF" : "#525252"}
                        height={28}
                        width={28}
                    />
                }
                isActive={activeTab.toLowerCase() === "profile"}
                handleIconClick={setActiveTab}
            />

            <TrayItem
                link="menu"
                label="menu"
                icon={
                    <MenuIcon
                        stroke={activeTab.toLowerCase() === "menu" ? "#FFFFFF" : "#BCBEC0"}
                        fill={activeTab.toLowerCase() !== "menu" ? "#FFFFFF" : "#525252"}
                        height={24}
                        width={24}
                    />
                }
                isActive={activeTab.toLowerCase() === "menu"}
                handleIconClick={setActiveTab}
            />
        </div>
    );
};

export default BottomNav;

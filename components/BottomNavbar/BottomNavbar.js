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
        page.startsWith("/edit-profile") ||
        page.startsWith("/add-business-details/") ||
        page.startsWith("/image-selection/") ||
        page.startsWith("/frame/")
    ) {
        return;
    }

    const handleIconClick = (iconName) => {
        setActiveTab(iconName);
    };

    return (
        <div className={`w-full px-5 pb-2 fixed h-[60px] bg-white flex items-center bottom-0 justify-between`}>
            <TrayItem
                link="home"
                label="home"
                icon={
                    <HomeIcon
                        stroke={activeTab.toLowerCase() === "home" ? "#FFFFFF" : "#000000"}
                        fill={activeTab.toLowerCase() !== "home" ? "#FFFFFF" : "#000000"}
                        height={24}
                        width={24}
                    />
                }
                isActive={activeTab.toLowerCase() === "home"}
                handleIconClick={handleIconClick}
            />

            <div className="mt-[4px]">
                <TrayItem
                    link="customize/1"
                    label="Custom"
                    icon={
                        <GalleryIcon
                            stroke={activeTab.toLowerCase() === "custom" ? "#FFFFFF" : "#000000"}
                            fill={activeTab.toLowerCase() !== "custom" ? "#FFFFFF" : "#000000"}
                            height={24}
                            width={24}
                        />
                    }
                    isActive={activeTab.toLowerCase() === "custom"}
                    handleIconClick={handleIconClick}
                />
            </div>

            <TrayItem
                link="profile"
                label="profile"
                icon={
                    <ProfileIcon
                        stroke={activeTab.toLowerCase() === "profile" ? "#FFFFFF" : "#000000"}
                        fill={activeTab.toLowerCase() !== "profile" ? "#FFFFFF" : "#000000"}
                        height={28}
                        width={28}
                    />
                }
                isActive={activeTab.toLowerCase() === "profile"}
                handleIconClick={handleIconClick}
            />

            <TrayItem
                link="menu"
                label="menu"
                icon={
                    <MenuIcon
                        stroke={activeTab.toLowerCase() === "menu" ? "#FFFFFF" : "#000000"}
                        fill={activeTab.toLowerCase() !== "menu" ? "#FFFFFF" : "#000000"}
                        height={24}
                        width={24}
                    />
                }
                isActive={activeTab.toLowerCase() === "menu"}
                handleIconClick={handleIconClick}
            />
        </div>
    );
};

export default BottomNav;

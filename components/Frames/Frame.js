"use client";
import React from "react";
import CallIcon from "@/assets/call.svg";
import WebIcon from "@/assets/web.svg";

const LocationIcon = ({ fill = "#000000", className, height = 24, width = 24 }) => (
    <svg className={className} fill={fill} height={height} width={width} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <title>location-filled</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="location-outline" fill={fill} transform="translate(106.666667, 42.666667)">
                    <path
                        d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z"
                        id="Combined-Shape"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const MobilIcon = ({ fill = "#000000", height = 24, width = 24, stroke = "#00000" }) => (
    <svg viewBox="0 0 15 15" version="1.1" height={height} width={width} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={fill} stroke={stroke}>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                            d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                            id="call-[#192]"
                        ></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export const EmailIcon = ({ fill = "#000000", height = 24, width = 24 }) => (
    <svg
        fill={fill}
        width={width}
        height={height}
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        strokeWidth="0.019200000000000002"
        className="h-[6px] w-[6px]"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fillRule="evenodd"
            ></path>
        </g>
    </svg>
);

export const formatPhoneNumber = (number) => {
    if (number.length <= 5) {
        return "+91 " + number;
    }

    return "+91 " + number.slice(0, 5) + " " + number.slice(5);
};

export function Frame1(props) {
    const {
        style = { backgroundColor: "#000000", color: "#FFFFFF" },
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234567890",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center justify-between w-full px-4">
                        <div className="flex flex-row items-center gap-0.5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <EmailIcon />
                            </span>
                            <span className="text-[1.5px] leading-3 font-bold pt-[1px]" style={{ color: style.backgroundColor }}>
                                {email}
                            </span>
                        </div>

                        <div className="flex flex-row items-center gap-0.5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <svg
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    height={6}
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                                                        id="call-[#192]"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>

                            <span className="text-[1.5px] leading-[1.5px] font-bold pt-[1px]" style={{ color: style.backgroundColor }}>
                                {formatPhoneNumber(mobileNumber)}
                            </span>
                        </div>

                        <div className="flex flex-row items-center gap-0.5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] leading-3 font-bold" style={{ color: style.backgroundColor }}>
                                {website}
                            </div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center text-white mt-1" style={{ ...style }}>
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="bg-white rounded-full p-0.5">
                                <LocationIcon className="" height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Frame2(props) {
    const {
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234579862",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center justify-between w-full bg-black">
                        <div className="flex flex-row items-center gap-0.5 pl-1.5">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <svg
                                    fill="#FFFFFF"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#FFFFFF"
                                    strokeWidth="0.019200000000000002"
                                    className="h-[6px] w-[6px]"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.5px] font-bold pt-[1px] text-white">{email}</span>
                        </div>

                        <div className="bg-white h-5 w-2" style={{ transform: "skew(16deg)" }} />

                        <div className="flex flex-row items-center gap-0.5">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#FFFFFF" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] font-bold text-white">{website}</div>
                        </div>

                        <div className="bg-white h-5 w-2" style={{ transform: "skew(16deg)" }} />

                        <div className="flex flex-row items-center gap-0.5 bg-black pr-1.5">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <CallIcon className="h-[6px] w-[6px]" fill="#000000" stroke="#000000" />
                            </span>

                            <div className="text-[1.5px] font-bold pt-[1px] text-white">{formatPhoneNumber(mobileNumber)}</div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center mt-[1px]">
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="border-[0.5px] border-black rounded-full p-0.5">
                                <LocationIcon height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold text-black">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Frame3(props) {
    const {
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234579862",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row items-center gap-0.5 bg-black text-white rounded-r-xl pl-1.5 pr-1.5 py-1">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <svg
                                    fill="#FFFFFF"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#FFFFFF"
                                    strokeWidth="0.019200000000000002"
                                    className="h-[6px] w-[6px]"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.5px] font-bold pt-[1px]">{email}</span>
                        </div>

                        <div className="flex flex-row items-center gap-0.5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <svg
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    height={6}
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                                                        id="call-[#192]"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>

                            <div className="text-[1.5px] font-bold pt-[1px]">{formatPhoneNumber(mobileNumber)}</div>
                        </div>

                        <div className="flex flex-row items-center gap-0.5 bg-black text-white rounded-l-xl pr-1.5 pl-1 py-1">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] font-bold">{website}</div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center text-black mt-1">
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="border-black border-[0.5px] rounded-full p-0.5">
                                <LocationIcon height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Frame4(props) {
    const {
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234579862",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
        email2,
        mobileNumber2,
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center w-full bg-black text-white py-1">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 mr-5 pl-4">
                            {mobileNumber2 && (
                                <div className="flex flex-row items-center gap-0.5">
                                    <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                        <CallIcon className="h-[6px] w-[6px]" fill="#000000" />
                                    </span>

                                    <div className="text-[1.5px] font-bold pt-[1px]">{formatPhoneNumber(mobileNumber2)}</div>
                                </div>
                            )}
                            {email2 && (
                                <div className="flex flex-row items-center gap-0.5 mr-5">
                                    <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                        <svg
                                            fill="#FFFFFF"
                                            width="64px"
                                            height="64px"
                                            viewBox="0 0 1920 1920"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="#FFFFFF"
                                            strokeWidth="0.019200000000000002"
                                            className="h-[6px] w-[6px]"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="text-[1.5px] font-bold pt-[1px]">{email2}</span>
                                </div>
                            )}
                        </div>

                        <div className="bg-white h-5 -my-1 w-2.5 ml-2" style={{ transform: "skew(16deg)" }} />

                        <div className="flex flex-row items-center gap-0.5 w-1/2 ml-5">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] font-bold">{website}</div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center w-full bg-black text-white py-1 mt-1">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 mr-5 pl-4">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <svg
                                    fill="#FFFFFF"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#FFFFFF"
                                    strokeWidth="0.019200000000000002"
                                    className="h-[6px] w-[6px]"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.5px] font-bold pt-[1px]">{email}</span>
                        </div>

                        <div className="bg-white h-5 -my-1 w-2.5 ml-2" style={{ transform: "skew(16deg)" }} />

                        <div className="flex flex-row items-center gap-0.5 w-1/2 ml-5">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <CallIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] font-bold pt-[1px]">{formatPhoneNumber(mobileNumber)}</div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center text-black mt-1">
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="border-black border-[0.5px] rounded-full p-0.5">
                                <LocationIcon height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Frame5(props) {
    const {
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234579862",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
        mobileNumber2,
        email2,
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center w-full text-black py-1">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 mr-5 pl-4">
                            {mobileNumber2 && (
                                <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                    <svg
                                        viewBox="0 0 15 15"
                                        version="1.1"
                                        height={6}
                                        width={6}
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path
                                                            d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                                                            id="call-[#192]"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            )}

                            {email2 && (
                                <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                    <svg
                                        fill="#000000"
                                        width="64px"
                                        height="64px"
                                        viewBox="0 0 1920 1920"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#000000"
                                        strokeWidth="0.019200000000000002"
                                        className="h-[6px] w-[6px]"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                                fillRule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            )}

                            {mobileNumber2 && <div className="text-[1.5px] pt-[1px] font-bold">{formatPhoneNumber(mobileNumber2)}</div>}
                            {email2 && <div className="text-[1.5px] pt-[1px] font-bold">{email2}</div>}
                        </div>

                        <div className="flex flex-row items-center gap-0.5 w-1/2 ml-5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] font-bold">{website}</div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center w-full text-black">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 mr-5 pl-4">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <svg
                                    fill="#000000"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#000000"
                                    strokeWidth="0.019200000000000002"
                                    className="h-[6px] w-[6px]"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.5px] font-bold pt-[1px]">{email}</span>
                        </div>

                        <div className="flex flex-row items-center gap-0.5 w-1/2 ml-5">
                            <span className="border-[0.5px] border-black p-0.5 rounded-full">
                                <svg
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    height={6}
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                                                        id="call-[#192]"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>

                            <div className="text-[1.5px] font-bold pt-[1px]">{formatPhoneNumber(mobileNumber)}</div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center text-white bg-black mt-1">
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="border-white border-[0.5px] rounded-full p-0.5">
                                <LocationIcon fill="#FFFFFF" height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Frame6(props) {
    const {
        className = "w-[320px] h-[320px] mx-auto flex",
        onClick,
        mobileNumber = "1234579862",
        email = "example@mail.com",
        website = "www.example.com",
        address = "Enter your address",
        mobileNumber2,
        email2,
    } = props;

    return (
        <>
            <div className={`border border-neutral-300 relative ${className}`} onClick={onClick}>
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-row items-center w-full py-1 gap-2">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 pl-4 bg-black text-white rounded-r-xl">
                            {mobileNumber2 && (
                                <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                    <CallIcon className="h-[6px] w-[6px]" fill="#000000" stroke="#000000" />
                                </span>
                            )}

                            {email2 && (
                                <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                    <svg
                                        fill="#FFFFFF"
                                        width="64px"
                                        height="64px"
                                        viewBox="0 0 1920 1920"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#FFFFFF"
                                        strokeWidth="0.019200000000000002"
                                        className="h-[6px] w-[6px]"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                                fillRule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            )}

                            {mobileNumber2 && <div className="text-[1.5px] pb-1 pt-[5px] font-bold">{formatPhoneNumber(mobileNumber2)}</div>}
                            {email2 && <div className="text-[1.5px] pb-1 pt-[5px] font-bold">{email2}</div>}
                        </div>

                        <div className="flex flex-row items-center gap-0.5 w-1/2 bg-black pl-2 text-white py-1 rounded-l-xl">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
                            </span>

                            <div className="text-[1.5px] pt-[1px] font-bold">{website}</div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="flex flex-row items-center gap-0.5 w-1/2 pl-4 bg-black text-white py-1 rounded-r-xl">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <svg
                                    fill="#FFFFFF"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#FFFFFF"
                                    strokeWidth="0.019200000000000002"
                                    className="h-[6px] w-[6px]"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[1.5px] font-bold pt-[1px]">{email}</span>
                        </div>

                        <div className="flex flex-row items-center gap-0.5 w-1/2 bg-black pl-2 text-white py-1 rounded-l-xl">
                            <span className="border-[0.5px] border-white p-0.5 rounded-full">
                                <CallIcon className="h-[6px] w-[6px]" fill="#000000" stroke="#000000" />
                            </span>

                            <div className="text-[1.5px] font-bold pt-[1px]">{formatPhoneNumber(mobileNumber)}</div>
                        </div>
                    </div>

                    <div className="flex mx-auto w-full justify-center mt-[1px]">
                        <div className="flex flex-row py-[2.5px] items-center">
                            <div className="border-[0.5px] border-black rounded-full p-0.5">
                                <LocationIcon height={6} width={6} />
                            </div>
                            <div className="text-[1.5px] pt-[1px] ml-1 font-bold text-black">{address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

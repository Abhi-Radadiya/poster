import React from "react";
import RightArrowIcon from "@/assets/chevron-right.svg";
// import SearchIcon from "@/assets/search.svg";
import DownloadIcon from "@/assets/download-icon.svg";
import Link from "next/link";

export default function Navbar(props) {
    const { handleClickDownload } = props;

    return (
        <>
            <div className="flex flex-row w-full justify-between items-center px-3 py-1.5 bg-white mb-4">
                <div className="flex flex-row items-center">
                    <Link href="/home" className="rounded-full h-8 w-8 bg-[#efefef73] mr-2">
                        <RightArrowIcon className="rotate-180 stroke-neutral-400" />
                    </Link>

                    <div className="-mr-1.5 mt-0.5 tracking-wider text-neutral-600 text-base font-bold">My Business</div>
                </div>

                <div className="flex flex-row mr-2">
                    {/* <span className="mr-4">
                        <SearchIcon height={20} width={20} />
                    </span> */}

                    <span onClick={handleClickDownload}>
                        <DownloadIcon className="stroke-neutral-600" height={22} width={22} />
                    </span>
                </div>
            </div>
        </>
    );
}

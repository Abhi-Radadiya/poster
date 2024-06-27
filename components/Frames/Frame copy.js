// "use client";
// import React from "react";
// import CallIcon from "@/assets/call.svg";
// import WebIcon from "@/assets/web.svg";

// export function Frame1(props) {
//     const { className = "w-[320px] h-[320px] mx-auto flex", onClick, sectionRef } = props;

//     return (
//         <>
//             <div className={`border border-neutral-300 relative ${className}`} ref={sectionRef} onClick={onClick}>
//                 <div className="absolute bottom-0 w-full">
//                     <div className="flex flex-row items-center justify-between w-full px-4">
//                         <div className="flex flex-row items-center gap-0.5">
//                             <span className="text-[1.5px] font-bold pt-[1px]">adarsh_fab132@yahoo.com</span>
//                         </div>

//                         <div className="flex flex-row items-center gap-0.5">
//                             <div className="text-[1.5px] font-bold pt-[1px]">+91 98254 48953</div>
//                         </div>

//                         <div className="flex flex-row items-center gap-0.5">
//                             <div className="text-[1.5px] pt-[1px] font-bold">www.adarshfabrication.com</div>
//                         </div>
//                     </div>

//                     <div className="flex mx-auto w-full justify-center bg-black text-white mt-1">
//                         <div className="flex flex-row py-[2.5px] items-center">
//                             <div className="text-[1.5px] pt-[1px] ml-1 font-bold">Krutika Apt., Opp. pipardiwala school, Sardar patel Rd., Ramnagar, Rander, Surat, INDIA</div>{" "}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// <div className={`border border-neutral-300 relative ${className}`} ref={sectionRef} onClick={onClick}>
//     <div className="absolute bottom-0 w-full">
//         <div className="flex flex-row items-center justify-between w-full px-4">
//             <div className="flex flex-row items-center gap-0.5">
//                 <span className="border-[0.5px] border-black p-0.5 rounded-full">
//                     <svg
//                         fill="#000000"
//                         width="64px"
//                         height="64px"
//                         viewBox="0 0 1920 1920"
//                         xmlns="http://www.w3.org/2000/svg"
//                         stroke="#000000"
//                         stroke-width="0.019200000000000002"
//                         className="h-[6px] w-[6px]"
//                     >
//                         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//                         <g id="SVGRepo_iconCarrier">
//                             <path
//                                 d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
//                                 fillRule="evenodd"
//                             ></path>
//                         </g>
//                     </svg>
//                 </span>
//                 <span className="text-[1.5px] font-bold pt-[1px]">adarsh_fab132@yahoo.com</span>
//             </div>

//             <div className="flex flex-row items-center gap-0.5">
//                 <span className="border-[0.5px] border-black p-0.5 rounded-full">
//                     <CallIcon className="h-[6px] w-[6px]" />
//                 </span>

//                 <div className="text-[1.5px] font-bold pt-[1px]">+91 98254 48953</div>
//             </div>

//             <div className="flex flex-row items-center gap-0.5">
//                 <span className="border-[0.5px] border-black p-0.5 rounded-full">
//                     <WebIcon className="h-[6px] w-[6px]" fill="#000000" />
//                 </span>

//                 <div className="text-[1.5px] pt-[1px] font-bold">www.adarshfabrication.com</div>
//             </div>
//         </div>

//         <div className="flex mx-auto w-full justify-center bg-black text-white mt-1">
//             <div className="flex flex-row py-[2.5px] items-center">
//                 <div className="bg-white rounded-full p-0.5">
//                     <svg
//                         width="6px"
//                         height="6px"
//                         viewBox="0 0 1024 1024"
//                         fill="#000000"
//                         className="icon"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         stroke="#000000"
//                         stroke-width="30.72"
//                     >
//                         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//                         <g id="SVGRepo_iconCarrier">
//                             <path
//                                 d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
//                                 fill=""
//                             ></path>
//                         </g>
//                     </svg>
//                 </div>
//                 <div className="text-[1.5px] pt-[1px] ml-1 font-bold">Krutika Apt., Opp. pipardiwala school, Sardar patel Rd., Ramnagar, Rander, Surat, INDIA</div>{" "}
//             </div>
//         </div>
//     </div>
// </div>;

// export function Frame2(props) {
//     const { className } = props;

//     return (
//         <>
//             <div className={`border border-neutral-300 ${className}`}>helo</div>
//         </>
//     );
// }

// export function Frame3(props) {
//     const { className } = props;

//     return (
//         <>
//             <div className={`border border-neutral-300 ${className}`}>helo</div>
//         </>
//     );
// }

// export function Frame4(props) {
//     const { className } = props;

//     return (
//         <>
//             <div className={`border border-neutral-300 ${className}`}>helo</div>
//         </>
//     );
// }

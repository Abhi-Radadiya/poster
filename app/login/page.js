"use client";

import Button from "@/components/Button/Button";
import { Input } from "@/components/InputField/Input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/APIHelper/axios";

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const { push } = useRouter();

    const handleSendOtp = async () => {
        setOtpSent(true);
        // try {
        //     const response = await axiosInstance.post("a/user/send-otp", { mobileNumber });
        //     setDeviceId(response.data.deviceId);
        // } catch (error) {
        //     console.error("Error sending OTP:", error);
        // }
    };

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post("/auth/login", { mobileNumber, otp });

            const token = response?.data?.token;

            localStorage?.setItem("authToken", token);

            push("/home");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-200 to-orange-200">
            <div className="absolute top-14 left-6">
                <Link href="/" className="bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
            </div>

            <div className="bg-white p-8 bg-opacity-50 rounded-lg shadow-lg w-80">
                <div className="flex justify-center mb-8">
                    <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">🔒</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>

                {!otpSent ? (
                    <div className="mb-4">
                        <Input inputType="number" label="Mobile number" placeholder="Enter Mobile Number" value={mobileNumber} onChange={setMobileNumber} />
                        <div className="flex items-center justify-center mt-4">
                            <Button label="Send OTP" onClick={handleSendOtp} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            <Input inputType="number" label="Mobile number" placeholder="Enter Mobile Number" value={mobileNumber} onChange={setMobileNumber} />
                        </div>
                        <div className="mb-4">
                            <Input label="OTP" inputType="number" placeholder="Enter OTP" value={otp} onChange={setOtp} />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button label="Login" onClick={handleLogin} />
                        </div>
                    </>
                )}

                <div className="mt-4 text-center">
                    <a href="/sign-up" className="text-blue-500 hover:text-blue-800">
                        {`Don't`} have an account? Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;

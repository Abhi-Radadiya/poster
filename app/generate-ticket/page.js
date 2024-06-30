"use client";

import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import { Input } from "@/components/InputField/Input";
import { InputArea } from "@/components/InputField/InputArea";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/APIHelper/axios";

const BugReportForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        description: "",
        stepsToReproduce: "",
        severity: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (value, name) => {
        setFormData({ ...formData, [name]: value });
    };

    const [isSuccess, setIsSuccess] = useState(false);

    const router = useRouter();

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post("/bug-report", formData);
            if (response.status === 201) {
                setMessage("Bug report submitted successfully!");
                setIsSuccess(true);
                router.push("/menu", { scroll: false });
            }
        } catch (error) {
            setIsSuccess(false);
            setMessage("Failed to submit bug report. Please try again later.");
        }
    };

    return (
        <>
            <div className="p-6 space-y-4">
                <h1 className="text-2xl font-bold mb-4">Report a Bug</h1>

                <Input label="Your Name" placeholder="Enter your name" value={formData.name} onChange={(value) => handleChange(value, "name")} />

                <Dropdown
                    setSelected={(selection) => handleChange(selection.value, "subject")}
                    label="Select Subject"
                    placeholder="Select Subject"
                    menuItems={[
                        { label: "Interface", value: "Interface" },
                        { label: "Poster", value: "Poster" },
                        { label: "Download poster", value: "Download poster" },
                        { label: "Frames", value: "Frames" },
                        { label: "Account", value: "Account" },
                    ]}
                />

                <InputArea label="Description" placeholder="Enter description" value={formData.description} onChange={(value) => handleChange(value, "description")} />
                <InputArea
                    label="Steps to Reproduce"
                    placeholder="Describe steps to reproduce"
                    value={formData.stepsToReproduce}
                    onChange={(value) => handleChange(value, "stepsToReproduce")}
                />
                <Dropdown
                    setSelected={(selection) => handleChange(selection.value, "severity")}
                    label="Select Severity"
                    placeholder="Select Severity"
                    menuItems={[
                        { label: "Low", value: "low" },
                        { label: "Medium", value: "medium" },
                        { label: "High", value: "high" },
                    ]}
                />
            </div>
            <div className="mt-1 mb-4 px-6">
                {message && <p className={`mb-2 ${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>}
                <Button label="Submit Bug" onClick={handleSubmit} />
            </div>
        </>
    );
};

export default BugReportForm;

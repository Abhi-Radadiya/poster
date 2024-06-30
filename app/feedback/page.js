"use client";
import React, { useState } from "react";
import BackIcon from "../../assets/chevron-down.svg";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/APIHelper/axios";

function FeedbackForm() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const ratings = [
        { label: "Amazing", emoji: "😃" },
        { label: "Good", emoji: "🙂" },
        { label: "Okay", emoji: "😐" },
        { label: "Bad", emoji: "😟" },
        { label: "Terrible", emoji: "😡" },
    ];

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!selectedRating) {
            setError("Please select a rating.");
            return;
        }

        const feedbackData = {
            rating: selectedRating,
            description: feedback,
        };

        try {
            const response = await axiosInstance.post("/feedback", feedbackData);

            if (response.status === 201) {
                setSuccess("Thank you for your feedback!");
                setSelectedRating(null);
                setFeedback("");
                router.push("/menu", { scroll: false });
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }

        console.log("Rating:", selectedRating);
        console.log("Feedback:", feedback);
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full">
                <Link href="/menu" className="flex gap-2 flex-row items-center">
                    <BackIcon className="rotate-90 h-3" />
                    <span>Back</span>
                </Link>

                <div className="flex justify-center mb-4 h-20 mt-12"></div>
                <h2 className="text-xl font-semibold text-center mb-4">Rate Your Experience</h2>
                <p className="text-center mb-6">How would you rate your experience with our product/service?</p>
                <div className="flex justify-between mb-6">
                    {ratings.map((rating) => (
                        <button
                            key={rating.label}
                            className={`flex flex-col items-center p-2 rounded-lg ${selectedRating === rating.label ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                            onClick={() => handleRatingClick(rating.label)}
                        >
                            <div className="text-2xl">{rating.emoji}</div>
                            <span className="text-xs mt-1">{rating.label}</span>
                        </button>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border h-36 rounded-lg mb-4"
                        placeholder="Describe Here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>

                    <Button label="Send Feedback" />

                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}
                </form>
            </div>
        </div>
    );
}

export default FeedbackForm;

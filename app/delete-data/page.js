"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.mobile) {
            alert("Mobile number is compulsory.");
            return;
        }
        try {
            const response = await axios.post("/logout/delete-data", formData);
            alert("Data submitted successfully!");
        } catch (error) {
            alert("Error submitting data.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="mobile">
                        Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
}

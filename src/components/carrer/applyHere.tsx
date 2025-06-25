"use client";

import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    country: string;
    appliedFor: string;
    resume: File | null;
}

function ApplyHereForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        country: '',
        appliedFor: '',
        resume: null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            resume: file
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#1A1818] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl container mx-auto">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Apply here!
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for solution or want to explore opportunities, we're here to collaborate with you.
                    </p>
                </div>

                <div className="space-y-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="appliedFor"
                                placeholder="Applied for"
                                value={formData.appliedFor}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b-2 border-white text-white placeholder-white py-3 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="file"
                                id="resume"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx"
                            />
                            <div className="w-full border-b-2 border-white py-3 cursor-pointer">
                                <span className="text-red-500">Upload</span>
                                <span className="text-white ml-1">your Resume</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pt-8">
                        <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-10 rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyHereForm;

'use client';

import React from 'react';
import Image from 'next/image';
import mans from '../../../public/assets/images/contact/man.png';

const countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
const interests = ['Web Development', 'App Development', 'UI/UX Design', 'Consulting', 'Other'];

const ContactUs = () => {
    return (
        <div className="w-full bg-[#1A1818] py-16 px-4">
            <div className="container mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center relative">
                    <span
                        className="absolute left-1/2 -translate-x-1/2 -top-2 w-20 h-8 bg-gradient-to-r from-[#FF6A3D] to-[#FF2A68] opacity-30 blur-lg rounded-full"/>
                    Let&apos;s Get in Touch
                </h2>

                {/* Content Block */}
                <div
                    className="flex flex-col md:flex-row items-center justify-center mx-auto bg-[#18171C] rounded-[32px] overflow-hidden shadow-xl max-w-7xl">
                    {/* Left Image */}
                    <div className="relative w-full md:w-[45%] h-[320px] md:h-[505px]">
                        <Image
                            src={mans}
                            alt="Contact"
                            fill
                            className="object-cover w-full h-full rounded-e-[32px] rounded-r-[32px] "
                            priority
                        />
                    </div>

                    {/* Right Form */}
                    <div className="w-full md:w-[55%] p-6 md:p-10 text-white bg-[#18171C] flex flex-col justify-center">
                        <form className="flex flex-col gap-6">
                            {/* Input Grid 6-6 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className={inputClass}/>
                                <input type="email" placeholder="Your Email" className={inputClass}/>
                                <input type="text" placeholder="Phone Number" className={inputClass}/>
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>Country</option>
                                    {countries?.map(c => <option key={c} className="bg-black" value={c}>{c}</option>)}
                                </select>
                                <input type="text" placeholder="Company Name" className={inputClass}/>
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>Interested in</option>
                                    {interests?.map(i => <option key={i} className="bg-black" value={i}>{i}</option>)}
                                </select>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Message"
                                className={inputClass + ' min-h-[70px] resize-vertical'}
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-[262px] h-[57px] mt-10 rounded-full bg-gradient-to-r from-[#FF6A3D] to-[#FF2A68] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const inputClass =
    'w-full px-4 py-3 bg-transparent border-b border-[#444] text-white text-base outline-none placeholder-gray-400 focus:border-[#FF6A3D] transition-colors duration-200';

export default ContactUs;

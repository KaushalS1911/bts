'use client'; // required for useRouter in app directory

import React from 'react';
import {useRouter} from 'next/navigation';
import {NavigationProps} from '../../types/navigation';
import Image from 'next/image';

export const DesktopNavigation: React.FC<NavigationProps> = ({
                                                                 items,
                                                                 currentPath,
                                                                 onItemClick
                                                             }) => {
    const router = useRouter();

    return (
        <div className="bg-[#1A1818]">
            <header className="hidden lg:block bg-transparent text-white fixed w-full top-0 z-50 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                            <Image
                                src="/assets/images/logo.png"
                                alt="Beyond Solution Logo"
                                width={211}
                                height={62}
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center">
                            <nav className="flex space-x-10">
                                {items.map((item) => {
                                    const isActive = currentPath === item.href;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                onItemClick?.(item);
                                                router.push(item.href);
                                            }}
                                            className={`text-lg font-medium transition-colors duration-200 ${
                                                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Contact Us Button */}
                            <button
                                onClick={() => router.push('/contact')}
                                className="ml-7 text-lg bg-gradient-to-r from-[#ff705b] to-[#e23375] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:opacity-90"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="pb-18"></div>
        </div>
    );
};

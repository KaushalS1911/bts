import React from 'react';
import { NavigationProps } from '../../types/navigation';
import Image from 'next/image';

export const DesktopNavigation: React.FC<NavigationProps> = ({
                                                               items,
                                                               currentPath,
                                                               onItemClick
                                                             }) => {
  return (
      <header className="hidden lg:block bg-[#1A1818] text-white sticky z-9999 top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
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
              <div className={"flex items-center"}>
              <nav className="flex space-x-10">
                  {items.map((item) => {
                      const isActive = currentPath === item.href;
                      return (
                          <a
                              key={item.id}
                              href={item.href}
                              onClick={(e) => {
                                  e.preventDefault();
                                  onItemClick?.(item);
                              }}
                              className={`text-lg font-medium transition-colors duration-200 ${
                                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                              }`}
                          >
                              {item.label}
                          </a>
                      );
                  })}
              </nav>
                  <button
                      className="ml-7 text-lg bg-gradient-to-r from-[#ff705b] to-[#e23375] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:opacity-90">
                      Contact Us
                  </button>
              </div>

          </div>
        </div>
      </header>
  );
};

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaGitlab } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        // Centering and spacing for a clean look
        <div className='flex flex-wrap justify-center items-center py-8 px-4 gap-6 sm:gap-10 md:gap-14'>
            {/* Facebook Icon */}
            <a
                href="https://www.facebook.com/hummam.yag?mibextid=kFxxJD"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block p-3 rounded-full transition-all duration-300 ease-in-out
                           hover:bg-blue-100 hover:shadow-lg transform hover:-translate-y-1" // Added hover effects
                aria-label="Facebook Profile"
            >
                <FaFacebook
                    size="48px"
                    className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 sm:size-[60px]"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                                  bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Facebook
                </span>
            </a>

            {/* GitHub Icon */}
            <a
                href="https://github.com/HomamAlyaghshi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block p-3 rounded-full transition-all duration-300 ease-in-out
                           hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1" // Added hover effects
                aria-label="GitHub Profile"
            >
                <FaGithub
                    size="48px"
                    className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300 sm:size-[60px]"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                                  bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    GitHub
                </span>
            </a>

            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/homam-alyaghshi-ab78351a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block p-3 rounded-full transition-all duration-300 ease-in-out
                           hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1" // Added hover effects
                aria-label="LinkedIn Profile"
            >
                <FaLinkedin
                    size="48px"
                    className="text-blue-700 group-hover:text-blue-800 transition-colors duration-300 sm:size-[60px]"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                                  bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    LinkedIn
                </span>
            </a>

            {/* Instagram Icon */}
            <a
                href="https://www.instagram.com/homam_yaghshi/profilecard/?igsh=YTB4dXN2ZDV3cWE0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block p-3 rounded-full transition-all duration-300 ease-in-out
                           hover:bg-pink-50 hover:shadow-lg transform hover:-translate-y-1" // Added hover effects
                aria-label="Instagram Profile"
            >
                <FaInstagram
                    size="48px"
                    className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300 sm:size-[60px]"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                                  bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Instagram
                </span>
            </a>

            {/* GitLab Icon */}
            <a
                href="https://gitlab.com/homamalyaghshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block p-3 rounded-full transition-all duration-300 ease-in-out
                           hover:bg-orange-50 hover:shadow-lg transform hover:-translate-y-1" // Added hover effects
                aria-label="GitLab Profile"
            >
                <FaGitlab
                    size="48px"
                    className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300 sm:size-[60px]"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1
                                  bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    GitLab
                </span>
            </a>
        </div>
    );
};

export default SocialMedia;
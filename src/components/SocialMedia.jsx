import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaGitlab } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='flex flex-wrap justify-center items-center w-full h-full gap-4 sm:gap-10 p-4'> {/* تقليل الفراغ على الموبايل وزيادته على الشاشات الكبيرة */}
            <a href="https://www.facebook.com/hummam.yag?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"
               className="relative group transform transition-transform duration-300 hover:scale-110">
                {/* حجم الأيقونة: 48px على الموبايل (افتراضي) و 60px على الشاشات الكبيرة */}
                <FaFacebook size="48px" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 sm:size-[60px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Facebook
                </span>
            </a>
            <a href="https://github.com/HomamAlyaghshi" target="_blank" rel="noopener noreferrer"
               className="relative group transform transition-transform duration-300 hover:scale-110">
                {/* حجم الأيقونة: 48px على الموبايل (افتراضي) و 60px على الشاشات الكبيرة */}
                <FaGithub size="48px" className="text-gray-800 hover:text-gray-900 transition-colors duration-300 sm:size-[60px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub
                </span>
            </a>
            <a href="https://www.linkedin.com/in/homam-alyaghshi-ab78351a6/" target="_blank" rel="noopener noreferrer"
               className="relative group transform transition-transform duration-300 hover:scale-110">
                {/* حجم الأيقونة: 48px على الموبايل (افتراضي) و 60px على الشاشات الكبيرة */}
                <FaLinkedin size="48px" className="text-blue-700 hover:text-blue-900 transition-colors duration-300 sm:size-[60px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LinkedIn
                </span>
            </a>
            <a href="https://www.instagram.com/homam_yaghshi/profilecard/?igsh=YTB4dXN2ZDV3cWE0" target="_blank" rel="noopener noreferrer"
               className="relative group transform transition-transform duration-300 hover:scale-110">
                {/* حجم الأيقونة: 48px على الموبايل (افتراضي) و 60px على الشاشات الكبيرة */}
                <FaInstagram size="48px" className="text-pink-500 hover:text-purple-700 transition-colors duration-300 sm:size-[60px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Instagram
                </span>
            </a>
            <a href="https://gitlab.com/homamalyaghshi/" target="_blank" rel="noopener noreferrer"
               className="relative group transform transition-transform duration-300 hover:scale-110">
                {/* حجم الأيقونة: 48px على الموبايل (افتراضي) و 60px على الشاشات الكبيرة */}
                <FaGitlab size="48px" className="text-orange-500 hover:text-orange-700 transition-colors duration-300 sm:size-[60px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitLab
                </span>
            </a>
        </div>
    );
};

export default SocialMedia;
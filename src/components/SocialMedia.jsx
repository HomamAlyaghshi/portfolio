import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaGitlab } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='flex justify-center items-center w-full h-full gap-4 sm:gap-8'>
            <a href="https://www.facebook.com/hummam.yag?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaFacebook size="60px" />
                </button>
            </a>
            <a href="https://github.com/HomamAlyaghshi" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaGithub size="60px" />
                </button>
            </a>
            <a href="https://www.linkedin.com/in/homam-alyaghshi-ab78351a6/" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaLinkedin size="60px" />
                </button>
            </a>
            <a href="https://www.instagram.com/homam_yaghshi/profilecard/?igsh=YTB4dXN2ZDV3cWE0" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaInstagram size="60px" />
                </button>
            </a>
            <a href="https://gitlab.com/homamalyaghshi/" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaGitlab size="60px " />
                </button>
            </a>
        </div>
    );
};

export default SocialMedia;

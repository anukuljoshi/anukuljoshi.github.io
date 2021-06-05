import React from 'react'

function SocialLinks() {
    const handleLinkClick = () => {
        console.log('link');
    }
    return (
        <div className="hidden z-10 fixed left-5 md:flex flex-col justify-center items-center text-gray-500">
            <div className="h-28 w-1 bg-gray-500"></div>
            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-3xl hover:text-secondary" onClick={handleLinkClick}></i>
            </a>
            <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square text-3xl hover:text-secondary"></i>
            </a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square text-3xl hover:text-secondary"></i>
            </a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram-square text-3xl hover:text-secondary"></i>
            </a>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square text-3xl hover:text-secondary"></i>
            </a>
        </div>
    );
}

export default SocialLinks

import React, { useState, useEffect } from "react";
import telegramIcon from '../../img/telegram.png';
import instagramIcon from '../../img/instagram.png';
import scrollUp from '../../img/upload.png';





import './social.css'

export default function SocialLinks () {
    const [isVisible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleScroll = () => {
        if (window.scrollY > 300)
        {
            setVisible(true);
        } else {
            setVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <div className="social-link">
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} className="social-icon"/></a>
                <a href="https://www.instagram.com/art_pannochka?igsh=MWRhcjh2b2ttb3E4Yg==" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} className="social-icon"/></a>

                
            </div>
            <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}>
            <button onClick={scrollToTop}><img src={scrollUp} alt="scroll-up" className="scrollUpImg"/></button>
        </div>
        </div>
    )
}
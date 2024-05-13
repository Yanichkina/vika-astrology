import React, { useState, useEffect } from 'react';

const AboutAstrology = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const columnElements = document.querySelectorAll('.column');
            const btnElement = document.querySelector('.btn_astro');

            columnElements.forEach((element, index) => {
                if (scrollTop > element.offsetTop - windowHeight + 100) {
                    setTimeout(() => setIsVisible(true), index * 200);
                }
            });

            if (scrollTop > btnElement.offsetTop - windowHeight + 100) {
                setTimeout(() => setIsVisible(true), columnElements.length * 200);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about_astrology">
            <div className={isVisible ? "column show" : "column"}>
                {/* Контент первого блока */}
            </div>
            <div className={isVisible ? "column show" : "column"}>
                {/* Контент второго блока */}
            </div>
            <div className={isVisible ? "column show" : "column"}>
                {/* Контент третьего блока */}
            </div>
            <a href="#" className={isVisible ? "btn_astro show" : "btn_astro"}>ПОЛУЧИТЬ РАЗБОР</a>
        </div>
    );
};

export default AboutAstrology;
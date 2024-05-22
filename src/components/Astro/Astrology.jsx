import React, { useState, useEffect } from 'react';
import './astro.css'

export default function Astrology() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
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
        <div>
            <div className="about_astrology" id="about_astrology">
                <div className={isVisible ? "column show" : "column"}>
                    {'Добро пожаловать в мир астрологии — где волшебство переплетается с звездами, а судьба раскрывается на небесном полотне. Это древнее искусство, взгляд на звезды и планеты, чтобы понять тайны времени и пространства. Она помогает нам раскрыть смысл нашего бытия, осветить темные уголки души и найти гармонию в своей жизни.'}
                </div>
                <div className={isVisible ? "column show" : "column"}>
                    {'Астрология — это не просто предсказание будущего, это путешествие к пониманию себя и своей судьбы. Она дарует нам инсайты и подсказки, позволяющие принимать решения с уверенностью и мудростью. Погружаясь в магию звездного неба, мы обретаем ключи к нашей личной эволюции и самопознанию.'}
                </div>
                <div className={isVisible ? "column show" : "column"}>
                    {'В чем же суть астрологии? Это созерцание небесных тел и их влияния на нашу жизнь земную. Ваши рожденные в момент времени и месте, когда планеты выстроились в уникальную гармонию, несут в себе глубокие послания и откровения. Я, как астролог, могу помочь вам расшифровать эту невидимую паутину судьбы и обрести ясность в своем пути.'}
                </div>
            </div>
            <a href="#" className={isVisible ? "btn_astro show" : "btn_astro"}>ПОЛУЧИТЬ АСТРОЛОГИЧЕСКИЙ РАЗБОР</a>
        </div>
    );
};


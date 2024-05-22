import React from 'react';
import './homepage.css';

export default function HomePage() {
    return (
        <div className="home_page" id="home_page">
            
            <div className='home_text'>
                <p className='p-vika'>ВИКТОРИЯ </p>
                <p>УЧИТЕЛЬ ЙОГИ 200</p>
                <p className='p-astro'>ВЕДИЧЕСКАЯ АСТРОЛОГИЯ 10 ЛЕТ</p> 
                <p>ТАРО 10 ЛЕТ</p>

            </div>
            
            <div className="btn">
                <ul>
                    <li><a href="#about_astrology">АСТРОЛОГИЯ</a></li>
                    <li><a href="#tarot">ТАРО</a></li>
                    <li><a href="#yoga">ЙОГА</a></li>
                </ul>
            </div>
            
        </div>
    );
};


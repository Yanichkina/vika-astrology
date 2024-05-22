import React from 'react';
import './header.css'

export default function Header() {
    return (
        <div className='header-container'>
            <header>
                <div className="all_header_menu">
                    <div className="top_menu">
                        <ul>
                            <li><a href="#tarot">ТАРО</a></li>
                            <li><a href="#about_astrology">АСТРОЛОГИЯ</a></li>
                            <li><a href="#yoga">ЙОГА</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};


import React, { useState, useEffect } from 'react';
import "./taro.css";

export default function Tarot() {
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const taroElements = document.querySelectorAll('.text_taro, .btn_taro');

            taroElements.forEach((element, index) => {
                if (scrollTop > element.offsetTop - windowHeight + 100) {
                    if (!visibleIndexes.includes(index)) {
                        setTimeout(() => {
                            setVisibleIndexes(prev => [...prev, index]);
                        }, index * 200);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleIndexes]);

    useEffect(() => {
        const par = document.querySelectorAll('p');
        par.forEach((element, index) => {
            element.style.marginLeft = '${index*50}px';
        });
    }, []);

    return (
        <div className="tarot" id="tarot">
            {["Глубокое Погружение", "Быстрое Решение", "Соляр"].map((title, index) => (
                <div key={index} className={visibleIndexes.includes(index) ? "text_taro show" : "text_taro"}>
                    <h2>{title}</h2>
                    <p>{index === 0 
                        ? "Этот сеанс включает детальный анализ текущих жизненных ситуаций, предоставляя глубокое понимание и мудрые советы для вашего пути вперед."
                        : index === 1 
                        ? "Идеально подходит для тех, кто ищет быстрые и точные ответы на конкретные вопросы. Сеанс позволяет получить ясность по ключевым аспектам вашей жизни."
                        : "Анализ вашего соляра на текущий год с акцентом на основные темы и события, которые будут влиять на вашу жизнь, давая возможность максимально использовать благоприятные моменты."}
                    </p>
                    <a href='#' className={visibleIndexes.includes(index) ? "btn_taro show" : "btn_taro"}>
                        {index === 0 ? "60 минут - $120" : index === 1 ? "30 минут - $70" : "45 минут - $90"}
                    </a>
                </div>
            ))}
        </div>
    );
}
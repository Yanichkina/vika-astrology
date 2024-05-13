import React from 'react';
import Header from './components/Header';
import HomePage from './components/Homepage';
import AboutAstrology from './components/Aboutastrologi'
import './style.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <AboutAstrology />
        </div>
    );
};

export default App;
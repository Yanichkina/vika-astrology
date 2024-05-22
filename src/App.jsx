import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Astrology from './components/Astro/Astrology'
import Tarot from './components/Taro/Tarot';
import Info from './components/Info/Info';
import Yoga from './components/Yoga/Yoga';
import SocialLinks from './components/SocialLink/SocialLink';
import { initializeApp } from "firebase/app";

const App = () => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6tb8wSNLEv70jF2inydhvNqEa-LRoPk",
  authDomain: "js-constructor-gina.firebaseapp.com",
  projectId: "js-constructor-gina",
  storageBucket: "js-constructor-gina.appspot.com",
  messagingSenderId: "845965272254",
  appId: "1:845965272254:web:9f5f629a27f1b3e6cbaaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    return (
        <div className='site-content'>
            <Header />
            <div className="container">
            
                <HomePage />
                <Astrology />
                <Info />
                <Tarot />
                <Yoga />
                <SocialLinks />
            </div>
        </div>
    );
};

export default App;
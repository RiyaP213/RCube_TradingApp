import React from 'react';
import OpenAccount from '../OpenAccount';// going out of home folder to get OpenAccount.jsx
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import Navbar from '../Navbar';// going out of home folder to get Navbar.jsx
import Footer from '../Footer';// going out of home folder to get Footer.jsx

function HomePage() {
    return (
        <> 
            
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
           
        </>
    );
}

export default HomePage; 
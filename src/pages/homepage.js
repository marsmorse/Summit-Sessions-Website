import Hero from '../components/hero.js';
import HomeOverlay from '../components/homeoverlay';
import React from 'react';

function HomePage() {

    return(
        <div className="homepage-cont">
            <HomeOverlay/>
            <Hero/>
        </div>
    )
}
export default HomePage
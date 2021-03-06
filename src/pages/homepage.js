import Hero from '../components/hero.js';
import HomeOverlay from '../components/homeoverlay';
import React, { useState } from 'react';

function HomePage() {
    const [browserWidth, SetBrowserWidth] = useState(window.innerWidth);

    const update = () => {
        SetBrowserWidth(window.innerWidth);
    }
    window.addEventListener('resize', update);
    if (browserWidth < 900) {
        return(
            <div>
                <div className="homepage-cont">
                    <Hero/>
                </div>
                <div className="homepage-cont">
                    <HomeOverlay/>
                </div>
                
            </div>
        )
    }
    else {
        return(
            <div className="homepage-cont">
                <HomeOverlay/>
                <Hero/>
            </div>
        )
    }
}
export default HomePage
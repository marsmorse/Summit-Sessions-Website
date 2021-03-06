import React from 'react';
import NeonHeader from './text.js';
import LightBar from './light_bar.js';
import SocialBar from './social.js';
import config from '../config';

function HomeOverlay() {

    return(
        <div className="overlay-cont">
            <img src="./assets/logo.png" alt="Summit Sessions Logo" width="80" height="42" className="mb-30"/>
            <NeonHeader content='SUMMIT SESSIONS' size='2'/>
            <LightBar width='100%' margins="mt-20 mb-40"/>
            <div className="f-col home-info">
                <NeonHeader content='Every Saturday @ 7pm PST' size='3' margins="mb-10"/>
                
                <div className="f-center">
                    <NeonHeader content='Upcoming artist:' size='3' margins="mt-5 mr-20"/>
                    <div className="inline-header-cont">
                        <h2 className={`headerlayer1`}>{config.newArtistName}</h2>
                        <h2 className={`headerlayer2`}>{config.newArtistName}</h2>
                    </div>
                </div>
                
            </div>
            <LightBar width='100%' margins="mt-40 mb-20"/>
            <div className="f-col col-center">
                <div className="f home-nav">
                    <NeonHeader size="link" link="/Shows" content="SHOWS" margins="mr-20"/>
                    <NeonHeader size="link" link="/About" content="ABOUT" margins="mr-20"/>
                    <NeonHeader size="a" link={config.mailLink} content="CONTACT" margins="mr-20"/>
                    <NeonHeader size="a" link={config.signupLink}  content="SIGN UP"/>
                </div>
                
            </div>
            <LightBar width='100%' margins="mt-20 mb-30"/>
            <SocialBar/>
            
        </div>
    )
}
export default HomeOverlay;
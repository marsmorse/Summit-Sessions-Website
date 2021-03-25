import { useHistory } from "react-router-dom";
import React from 'react';
import NeonHeader from './text.js';

let icons = {
    ClickableLogo: function() {
        const history = useHistory();
        return(
            <div className="f" onClick={() => {history.push('/')}}>
                <img src="./assets/logo.png" alt="Summit Sessions Logo" className="mr-20" />
                <NeonHeader size="1" content="SUMMIT SESSIONS"/>
            </div>
        );
    },
    MenuIcon: function() {
        return(
            <div className="header-cont">
                <svg className="headerlayer1" width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.863281" y="0.00683594" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="11.0068" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="22.0068" width="41" height="4" fill="white"/>
                </svg>
                <svg className="headerlayer2" width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.863281" y="0.00683594" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="11.0068" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="22.0068" width="41" height="4" fill="white"/>
                </svg>  
                <svg className="headerlayer3" width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.863281" y="0.00683594" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="11.0068" width="41" height="4" fill="white"/>
                    <rect x="0.863281" y="22.0068" width="41" height="4" fill="white"/>
                </svg>
            </div>
        );
    },
    ExitIcon: function() {
        return(
            <div className="header-cont">   
                <svg className="headerlayer1" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.433594" y="23.7705" width="33.5008" height="3.26837" transform="rotate(-45 0.433594 23.7705)" fill="white"/>
                    <rect width="33.5008" height="3.26837" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26.4336 23.7705)" fill="white"/>
                </svg>
                <svg className="headerlayer2" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.433594" y="23.7705" width="33.5008" height="3.26837" transform="rotate(-45 0.433594 23.7705)" fill="white"/>
                    <rect width="33.5008" height="3.26837" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26.4336 23.7705)" fill="white"/>
                </svg>
                <svg className="headerlayer3" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.433594" y="23.7705" width="33.5008" height="3.26837" transform="rotate(-45 0.433594 23.7705)" fill="white"/>
                    <rect width="33.5008" height="3.26837" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26.4336 23.7705)" fill="white"/>
                </svg>
            </div>
        );
    }

}
export default icons;
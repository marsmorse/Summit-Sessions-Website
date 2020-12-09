import React from 'react';
import NeonHeader from './Text.js'
import Artist from './Show.js'
import showData from './show.json';
import SocialBar from './Social.js';
function Footer() {
    return(
        <div id="footer-cont">
            <NeonHeader ml='20' content="SUMMIT SESSIONS" size='3'/>
            <svg width="100%" height="40"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f)">
                <rect x="0" y="0" width="1545" height="4" fill="white" fill-opacity="0.8"/>
                </g>
                <g filter="url(#filter1_f)">
                <rect x="0" y="0" width="1545" height="4" fill="white" fill-opacity="0.8"/>
                </g>
                <g filter="url(#filter2_f)">
                <rect x="0" y="0" width="1545" height="4" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_f" x="0" y="0" width="1561" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="filter1_f" x="0" y="0" width="1577" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="filter2_f" x="0" y="0" width="1547" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                </filter>
                </defs>
            </svg>
            <div className="f ml-20 mb-10">
                    <NeonHeader content="Legal" size='a' link=''/>
                    <NeonHeader content="Contact " size='a' link=''/>
                    <NeonHeader content="SIGN UP" size='a' link=''/>
            </div>
            <SocialBar/>
        </div>
    )
}


function App() {

    return(
        <div>
            <div className="body-cont h">
                <NeonHeader content="Upcoming Shows" headerColor="red" size='2'/>
                <div className="carousel-cont">
                    {showData.Shows.map((show, index) => {
                      return(
                          <Artist key={index} {...show}/>
                      )
                    })}
                </div>
                <NeonHeader content="Past Shows" headerStyle="headerlayer" size='2'/>
                <div className="carousel-cont">
                    {showData.Shows.map((show, index) => {
                      return(
                          <Artist key={index} {...show}/>
                      )
                    })}
                </div>
                <NeonHeader content="Interested In Performing With Us?" headerStyle="headerlayer" size='2'/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;

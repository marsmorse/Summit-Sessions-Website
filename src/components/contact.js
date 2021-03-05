import React from 'react';
import NeonHeader from './text.js';
class Contact extends React.Component {

    render() {
        return(
            <div className="single-page-cont">
                    <div className="contact-box mb-20">
                        <p>Interested in performing with us</p>
                        <NeonHeader size='a' content='Click Here' link='https://docs.google.com/forms/d/e/1FAIpQLScOJB2NEnSM3ZXCcRQIXY1GGZxJHtB80kv6RTXxmLzvcUFMAw/viewform'/>
                    </div>
                    { (window.innerWidth > 641) ?
                    <svg width="39" height="138" viewBox="0 0 39 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                        <rect x="22.6133" y="16.5" width="105.475" height="5.77947" transform="rotate(90 22.6133 16.5)" fill="white" fillOpacity="0.8"/>
                        </g>
                        <g filter="url(#filter1_f)">
                        <rect x="22.6133" y="16.5" width="105.475" height="5.77947" transform="rotate(90 22.6133 16.5)" fill="white" fillOpacity="0.8"/>
                        </g>
                        <g filter="url(#filter2_f)">
                        <rect x="22.6133" y="16.5" width="105.475" height="5.77947" transform="rotate(90 22.6133 16.5)" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_f" x="8.83203" y="8.5" width="21.7795" height="121.475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
                        </filter>
                        <filter id="filter1_f" x="0.832031" y="0.5" width="37.7795" height="137.475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur"/>
                        </filter>
                        <filter id="filter2_f" x="15.832" y="15.5" width="7.77947" height="107.475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
                        </filter>
                        </defs>
                    </svg> 
                    : null
                }
                    <div className="contact-box mb-20">
                        <p>Looking to get in touch?</p>
                        <NeonHeader size='a' content='Email Us' link='mailto:marcel@summitsessions.com'/>
                    </div>
          </div>
        )
    }
}
export default Contact;
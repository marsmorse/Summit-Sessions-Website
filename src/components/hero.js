import React from 'react';

class Hero extends React.Component {
    render(){
        return(
                <div id="hero-cont">
                  <video  id="hero-vid" playsInline loop muted autoPlay src="https://summitsessonsvideos.s3.amazonaws.com/hero.mp4" id="hero-vid" alt="promo video"/>
                  <div className="hero-overlay" id="top-overlay"/>
                  <div className="hero-overlay" id="bot-overlay"/>
                </div>
        );
    }
}
export default Hero;

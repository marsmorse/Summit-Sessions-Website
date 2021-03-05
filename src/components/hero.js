import React from 'react';

class Hero extends React.Component {
    render(){
        return(
            <section>
                <div id="hero-cont">
                  <video  loop muted autoPlay src="https://summitsessonsvideos.s3.amazonaws.com/hero.mp4" id="hero-vid" alt="promo video"/>
                  <div className="hero-overlay" id="top-overlay"/>
                  <div className="hero-overlay" id="bot-overlay"/>
                </div>
            </section>
        );
    }
}
export default Hero;

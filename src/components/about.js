import React from 'react';
import NeonHeader from './text.js';
class About extends React.Component {

    StaffSection(){
        
        return(
            <div className="about-section-cont">
                <NeonHeader content='THE TEAM' size='2'/>
                <div className="mt-30" id="staff-box">
                    <div className="member-box">
                        <NeonHeader content='Production Head' size='5'/>
                        <p className="mt-5">Marcel Scott</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Audio Engineer' size='5'/>
                        <p className="mt-5">Andre Baca</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Host' size='5'/>
                        <p className="mt-5">Bobby Berry</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Photographer' size='5'/>
                        <p className="mt-5">Sharif Hassan</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Financial Manager' size='5'/>
                        <p className="mt-5">Valerie Burleigh</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Artist Operations' size='5'/>
                        <p className="mt-5">Fairy Kwong</p>
                    </div>
                    <div className="member-box">
                        <NeonHeader content='Developer' size='5'/>
                        <p className="mt-5">Marshall Morse</p>
                    </div>
                    
                </div>
            </div>
        )
    }
    render() {
        return(
            <div className="about-container">
                <div id="about">
                    <img src="./assets/logo-md.png" alt="Summit Sessions Logo" className="mb-30"/>
                    <div className="about-section-cont">
                        <NeonHeader content='WHO WE ARE' size='2'/>
                        <div className="mt-30 about-p-cont">
                        <p>
                            At Summit Sessions, we take away the stress of conducting a live stream from the artist, and provide a natural space that caters to their music and who they are. We provide artists with the best audio and video that live streaming has to offer.   
                        </p>
                        </div>
                    </div>
                    <div className="about-section-cont">
                        <NeonHeader content='OUR STORY' size='2'/>
                        <div className="mt-30 about-p-cont">
                            <p>
                                Summit Sessions found its start because of the Covid-19 crisis. Andre Baca, a professional in the music industry, and Marcel Scott, a professional in the film industry, both found themselves unemployed without any sight of future productions or recordings. After consulting one another, they came to the consensus that musicians of all kinds were struggling to produce high quality live video performances. With their combined industry expertise in audio and video production, Andre and Marcel knew they were able to curate top quality live music streams. Together, they created High Rize Summit Sessions to provide safe and professional grade live music streams for fans and musicians.  
                            </p>
                        </div>
                    </div>
                    <this.StaffSection/>
                    <div className="about-section-cont">
                        <NeonHeader content='PARTNERS' size='2'/>
                        <div className="mt-30 about-p-cont">
                            <a href="https://music.com/story/search?q=summit%20sessions"  target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.09 37" width="64" height="37" >
                                    <path fill="#fff" fillRule="evenodd" stroke="#fff" d="M54.41,36.54H49.88a.78.78,0,0,1-.53-.2.72.72,0,0,1-.23-.55V18.24L46.15,32H43L40,18.24V35.79c0,.5-.24.75-.71.75H.51V.54H39.24c.37,0,.61.23.71.7l4.23,20,.36,1.5.4-1.5,4.18-20c.1-.47.34-.7.71-.7H63.59v36Zm.11-.83h8.25V1.36H54.52V35.71Zm-20-34.35H1.33V35.71H34.51V1.36Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
export default About;
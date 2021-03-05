import React from 'react';
import SocialBar from './social.js';
import NeonHeader from './text.js';
import LigtBar from './light_bar.js'
/**
 * returns the footer
 * @constructor
 * @return {JSX} footer div element
 */
function Footer() {
    return(
        <div id="footer-cont">
            <NeonHeader ml='20' content="SUMMIT SESSIONS" size='3'/>
            <LigtBar width='100%' margin="ml-20"/>
            <div className="f split" id="footer-body">
                    <div className="f">
                        <NeonHeader margins="mr-30" content="About" size='link' link='/About'/>
                        <NeonHeader margins="mr-30" content="Contact" size='a' link='mailto:info@summitsessionsofficial.com'/>
                        <NeonHeader margins="mr-30" content="SIGN UP" size='a' link='https://docs.google.com/forms/d/e/1FAIpQLSdz3F22O1Wfln-ezUgNhti6nKG24VsO_WYIlJQZVxH1rczq4g/viewform'/>
                    </div>
                    <SocialBar/>
            </div>
            
        </div>
    )
}

export default Footer;
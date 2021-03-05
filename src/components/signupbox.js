import React from 'react';
import LightBar from './light_bar.js';
import NeonHeader from './text.js';

function SignUpBox() {

    return(
        <div>
            <LightBar width='100%' margins="mb-30"/>
            <div id="sign-up-box">
                <NeonHeader size='3' content='Past Performances' link=''/>
            </div>
            <LightBar width='100%' margins="mt-30"/>
        </div>
    )
}
export default SignUpBox

/*
            <div id="sign-up-box">
                
                <p>Interested in performing with us?</p>
                <NeonHeader size='a' content='Click Here' link='https://docs.google.com/forms/d/e/1FAIpQLScOJB2NEnSM3ZXCcRQIXY1GGZxJHtB80kv6RTXxmLzvcUFMAw/viewform'/>

            </div>
*/
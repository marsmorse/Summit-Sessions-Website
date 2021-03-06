import React, {useEffect, useState} from 'react';
import NeonHeader from './text.js';

import LightBar from './light_bar.js';
import config from '../config';
import icons from './topNav_icons';
import { useHistory } from 'react-router-dom';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function useCurrentWidth() {
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth());
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return width;
}

function TopNavv() {
    let width = useCurrentWidth();
    const [menuOpen, SetMenuOpen] = useState(false);
    let pages = ['About', 'Sessions', 'Contact'];
    const history = useHistory();
    let page = history.location.pathname;
    const toggleMenu = () => { SetMenuOpen(!menuOpen) };
    const MobileNav = () => {
        return(
            <section>
                <nav className="nav-bar">
                    <div className='f nav-cont'>
                        { icons.ClickableLogo()}
                        <div id="menu-icon" onClick={ toggleMenu }>
                            {(menuOpen) ? icons.ExitIcon() : icons.MenuIcon()}
                        </div>
                    </div>
                    <LightBar width='100%'/>
                </nav>
                <div className="mobile-menu" id={(menuOpen) ? 'show-off-screen': null}>
                    <LightBar width='100%' margins='mb-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="link" link="/Sessions" color={(page === '/Sessions') ? "red": null} content="SESSIONS"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="link" link="/About" color={(page === '/About') ? "red": null} content="ABOUT"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="link" link="/Contact" color={(page === '/Contact') ? "red": null} content="CONTACT"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="a" link={config.signupLink} content="SUBMIT"/>
                    <LightBar width='100%' margins='mt-30'/>            
                </div>
            </section>
        )
    }
    const DesktopNav = () => {
        return(
            <nav className="nav-bar" id="nav-bar-desktop">
                <div className='f nav-cont'>
                { icons.ClickableLogo() }
                {
                    pages.map((v, i) =>{
                            return(
                                <div key={i} className="f">
                                    <LightBar/>
                                    <NeonHeader size='link' color={(history.location.pathname === ('/' + v)) ? "red": null} link={`/${v}`} content={v.toUpperCase()}/>
                                </div>
                            );
                    })
                }
                <div className="f">
                    <LightBar/>
                    <NeonHeader clickBehavior={() => {toggleMenu();}} size="a" link={config.signupLink} content="SUBMIT"/>
                </div>
                <LightBar width='100%' margins="ml-20"/>
                
                </div>
                <LightBar width='100%'/>
            </nav>
        );
    }
    return ((width < 1150)? <MobileNav/>:<DesktopNav/> );
}

export default TopNavv;
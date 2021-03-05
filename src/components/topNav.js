import React from 'react';
import NeonHeader from './text.js';
import {useHistory} from "react-router-dom";
import LightBar from './light_bar.js';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isDesktopView: ((window.innerWidth > 961) ? true: false),
            page: 'Shows'
            
        }
        this.pages = ['About', 'Shows'];
        this.DesktopMenu = this.DesktopMenu.bind(this);
        this.updateNav = this.updateNav.bind(this);
        this.MobileNav = this.MobileNav.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.updateState = this.updatePage.bind(this);
    }
    displayExitIcon() {
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
    displayMenuIcon() {
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
    }
    toggleMenu() {
        this.setState((state) => { return {isMenuOpen: !state.isMenuOpen};});
    }
    clickableLogo() {
        const history = useHistory();
        return(
            <div className="f" onClick={() => {history.push('/Shows')}}>
                <img src="./assets/logo.png" alt="Summit Sessions Logo" className="mr-20" />
                <NeonHeader size="1" content="SUMMIT SESSIONS"/>
            </div>
        );
    }

    updatePage(v) {
        this.setState({page: v})
    }
    DesktopMenu() {
        return(
            <nav className="nav-bar" id="nav-bar-desktop">
                <div className='f nav-cont'>
                <this.clickableLogo/>
                {
                    this.pages.map((v, i) =>{
                            return(
                                <div key={i} className="f">
                                    <LightBar/>
                                    <NeonHeader size='link' color={(this.state.page === v) ? "red": null} click_behavior={() => { return this.updatePage(v);}} link={`/${v}`} content={v.toUpperCase()}/>
                                </div>
                            );
                    })
                }
                <div className="f">
                    <LightBar/>
                    <NeonHeader clickBehavior={() => {this.toggleMenu('Contact');}} size="a" link="mailto:info@summitsessionsofficial.com" content="CONTACT"/>
                </div>
                <div className="f">
                    <LightBar/>
                    <NeonHeader clickBehavior={() => {this.toggleMenu('Shows');}} size="a" link="https://docs.google.com/forms/d/e/1FAIpQLSdz3F22O1Wfln-ezUgNhti6nKG24VsO_WYIlJQZVxH1rczq4g/viewform" content="SIGN UP"/>
                </div>
                <LightBar width='100%'/>
                
                </div>
                <LightBar width='100%'/>
            </nav>
        );
    }
    MobileNav() {
        return(
            <section>
                <nav className="nav-bar">
                    <div className='f nav-cont'>
                        <this.clickableLogo/>
                        <div id="menu-icon" onClick={this.toggleMenu}>
                            {(this.state.isMenuOpen) ? this.displayExitIcon() : this.displayMenuIcon()}
                        </div>
                    </div>
                    <LightBar width='100%'/>
                </nav>
                <div className="mobile-menu" id={(this.state.isMenuOpen) ? 'show-off-screen': null}>
                    <LightBar width='100%' margins='mb-30'/>
                    <NeonHeader click_behavior={() => { this.toggleMenu();this.updatePage('Shows'); }} size="link" link="/Shows" color={(this.state.page === 'Shows') ? "red": null} content="ARTISTS"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={() => { this.toggleMenu();this.updatePage('About'); }} size="link" link="/About" color={(this.state.page === 'About') ? "red": null} content="ABOUT"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ this.toggleMenu } size="a" link="mailto:info@summitsessionsofficial.com" content="CONTACT"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ this.toggleMenu } size="a" link="https://docs.google.com/forms/d/e/1FAIpQLSdz3F22O1Wfln-ezUgNhti6nKG24VsO_WYIlJQZVxH1rczq4g/viewform" color={(this.state.page === 'Submit') ? "red": null} content="SIGN UP"/>
                    <LightBar width='100%' margins='mt-30'/>            
                </div>
            </section>
        )
    }
    render() {
        if (!this.state.isDesktopView){
                return(
                    <this.MobileNav/>
                )
        } else {

            return(
                <this.DesktopMenu/>
            );
        }
    }
    updateNav() {
        if (window.innerWidth > 1150) {
            this.setState(() => { return {isDesktopView: true};});
        } else {
            this.setState(() => { return {isDesktopView: false};});
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateNav);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNav);
    }
}
export default TopNav;
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
    let pages = ['About', 'Sessions'];
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
                    <NeonHeader click_behavior={ toggleMenu } size="link" link="/Shows" color={(page === '/Shows') ? "red": null} content="SHOWS"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="link" link="/About" color={(page === '/About') ? "red": null} content="ABOUT"/>
                    <LightBar width='100%' margins='mb-30 mt-30'/>
                    <NeonHeader click_behavior={ toggleMenu } size="a" link={config.mailLink} content="CONTACT"/>
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
                    <NeonHeader clickBehavior={() => {toggleMenu();}} size="a" link={config.mailLink} content="CONTACT"/>
                </div>
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

function toggleMenu() {
    this.setState((state) => { return {isMenuOpen: !state.isMenuOpen};});
}

/*
class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isDesktopView: ((window.innerWidth > 961) ? true: false),
            page: 'Home'
            
        }
        this.pages = ['About', 'Shows'];
        this.DesktopMenu = this.DesktopMenu.bind(this);
        this.updateNav = this.updateNav.bind(this);
        this.MobileNav = this.MobileNav.bind(this);
        this.updateState = this.updatePage.bind(this);
    }


    updatePage(v) {
        this.setState({page: v})
    }
    
    DesktopMenu() {
        

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
}*/
export default TopNavv;
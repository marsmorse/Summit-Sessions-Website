import React from 'react';
import TopNav from './components/topNav.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import {Redirect, Route} from "react-router-dom";
import Footer from './components/footer.js'
import Shows from './components/shows.js';
import Contact from './components/contact.js';
import SignUpBox from './components/signupbox.js';
import HomePage from './pages/homepage';

function App() {
    return(
        <div id='app'>
            
            <Route exact path="/"><HomePage/></Route>
            <Route path="/Shows"><TopNav/><Hero/><SignUpBox/><Shows/><Footer/></Route>
            <Route path="/About"><TopNav/><About/><Footer/></Route>
            <Route path="/Contact"><Contact/><Footer/></Route>
            
        </div>
    )
}
export default App;
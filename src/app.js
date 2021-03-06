import React from 'react';
import Hero from './components/hero.js';
import About from './components/about.js';
import {Redirect, Route} from "react-router-dom";
import Footer from './components/footer.js'

import Contact from './components/contact.js';
import SignUpBox from './components/signupbox.js';
import HomePage from './pages/homepage';
import ShowsPage from './pages/showspage';
import AboutPage from './pages/aboutpage';

function App() {
    return(
        <div id='app'>
            
            <Route exact path="/"><HomePage/></Route>
            <Route path="/Shows"><ShowsPage/></Route>
            <Route path="/About"><AboutPage/></Route>
            <Route path="/Contact"><Contact/><Footer/></Route>
            
        </div>
    )
}
export default App;
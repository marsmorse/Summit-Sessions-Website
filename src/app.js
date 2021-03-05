import React from 'react';
import TopNav from './components/topNav.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import {Redirect, Route} from "react-router-dom";
import Footer from './components/footer.js'
import Shows from './components/shows.js';
import Contact from './components/contact.js';
import SignUpBox from './components/signupbox.js';

function App() {
    return(
        <div>
            <TopNav/>
            <Route exact path="/"><Hero/><SignUpBox/><Shows/></Route>
            <Route path="/Shows"><Redirect to="/"/></Route>
            <Route path="/About"><About/></Route>
            <Route path="/Contact"><Contact/></Route>
            <Footer/>
        </div>
    )
}
export default App;
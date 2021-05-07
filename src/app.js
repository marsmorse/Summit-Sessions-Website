import React from 'react';
import { Route} from "react-router-dom";
import HomePage from './pages/homepage';
import ShowsPage from './pages/showspage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage.js';

function App() {
    
    return(
        <div id='app'>
            
            <Route exact path="/"><HomePage/></Route>
            <Route path="/Sessions"><ShowsPage/></Route>
            <Route path="/About"><AboutPage/></Route>
            <Route path="/Contact"><ContactPage/></Route>
            
        </div>
    )
}
export default App;
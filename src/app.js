import React from 'react';
import { Route} from "react-router-dom";
import Footer from './components/footer.js'

import Contact from './components/contact.js';
import HomePage from './pages/homepage';
import ShowsPage from './pages/showspage';
import AboutPage from './pages/aboutpage';

function App() {
    
    return(
        <div id='app'>
            
            <Route exact path="/"><HomePage/></Route>
            <Route path="/Sessions"><ShowsPage/></Route>
            <Route path="/About"><AboutPage/></Route>
            <Route path="/Contact"><Contact/><Footer/></Route>
            
        </div>
    )
}
export default App;
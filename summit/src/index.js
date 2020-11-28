import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function load() {
  return(
   /* <div className="carousel-cont">
        {showData.Shows.map((show, index) => {
          return(
              <Artist key={index} {...show}/>
          )
        })}
      </div>
  */
     <App/>
  )
}
ReactDOM.render(load(), document.getElementById('root'));
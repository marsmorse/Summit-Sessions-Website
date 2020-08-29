import React from 'react';
import ReactDOM from 'react-dom';
import Artist from './Show.js'
import showData from './show.json';

function load() {
  return(
    <div className="carousel-cont">
        {showData.Shows.map((show, index) => {
          return(
              <Artist key={index} {...show}/>
          )
        })}
    </div>
  ) 
}
ReactDOM.render(load(), document.getElementById('root'));
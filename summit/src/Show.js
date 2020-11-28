
import React from 'react';
//import ReactDOM from 'react-dom';
import './Show.css';
import './format.js';
import { formatDate } from './format.js';

class Show extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          date: new Date('August 8, 2020 19:00:00'),
          upcoming: false
          };
    }

    render() {
      var dateLine = formatDate(this.state.date, this.state.upcoming);
      return(
        <div className="card">
          <img className="artist-photo" src={this.props.img_path} alt="artist"/>
          <h5 className="date date-card">{dateLine}</h5>
          <a href={this.props.headliner.link} id="show-headliner">{this.props.headliner.name + ' '}</a>
          <div className="headliner-guest ">{((this.props.headliner.guests)? 'ft ':'')}{

              this.props.headliner.guests.map((guest, index) => {
                return(
                  <a key={index} className="headliner-guest" href={guest.link}>
                    {guest.name + (index < (this.props.headliner.guests.length -1)? ', ' : ' ')}
                  </a>
                );
              })
          }         
          </div>
          <div>{
              this.props.warmups.map((warmup,index) => {
                return(
                  <div key={index}>
                    <a className="warmup" href={warmup.link}>
                      +{warmup.name + ((this.props.warmups.guests)?' ft':'')}
                    </a>
                    <div>{
                        warmup.guests.map((guest, index) => {
                        return(
                          <a key={index} className="warmup-guest" href={guest.link}>
                          {(index < this.props.warmups.guests.length -1) ? guest.name:guest.name+','}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })
              }
          </div>
        </div>
      );
    }
  }

export default Show

import React from 'react';
//import ReactDOM from 'react-dom';
import './Show.css';


class Show extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          date: new Date('August 8, 2020 19:00:00'),
          flipped: false
          };
    }
    render() {
      var dateLine = '';
      if (this.state.upcoming === true) {
        dateLine = this.state.date.getDate() + '/' + this.state.date.getDay() + '/' + this.state.date.getFullYear();
        let date = this.state.date.getDate() + '/' + this.state.date.getDay() + '/' + this.state.date.getFullYear();
        this.date = date
      }else{
        let date = this.state.date.getDate() + '/' + this.state.date.getDay() + '/' + this.state.date.getFullYear();
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayofWeek = days[this.state.date.getDay()];
        let hours = 0;
        let ampm = (this.state.date.getHours() >=12 && this.state.date.getHours() <24) ? "pm" : "am";
        if(this.state.date.getHours()%12 === 0){
          hours = 12;
        }else{
          hours = ((this.state.date.getHours()<12) ? this.state.date.getHours(): this.state.date.getHours() - 12)
        }
       // hours = ((this.state.date.getHours()<12) ? hours = this.state.date.getHours(): hours = this.state.date.getHours() - 12)
        let time = hours + ":" + ((this.state.date.getMinutes()<10) ? "0": "") + this.state.date.getMinutes();
        dateLine = dayofWeek + ' ' + date + ', ' + time + ampm;
      }
  
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
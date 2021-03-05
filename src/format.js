



 export function formatDate(date, upcoming) {
    let dateLine = '';
    if (upcoming === true) {
      dateLine = date.getDate() + '/' + date.getDay() + '/' + date.getFullYear();
      let daymoyr = date.getDate() + '/' + date.getDay() + '/' + date.getFullYear();
      return daymoyr;
    }else{
      let daymoyr = date.getDate() + '/' + date.getDay() + '/' + date.getFullYear();
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let dayofWeek = days[date.getDay()];
      let hours = 0;
      let ampm = (date.getHours() >=12 && date.getHours() <24) ? "pm" : "am";
      if(date.getHours()%12 === 0){
        hours = 12;
      }else{
        hours = ((date.getHours()<12) ? date.getHours(): date.getHours() - 12)
      }
      // hours = ((this.state.date.getHours()<12) ? hours = this.state.date.getHours(): hours = this.state.date.getHours() - 12)
      let time = hours + ":" + ((date.getMinutes()<10) ? "0": "") + date.getMinutes();
      dateLine = dayofWeek + ' ' + daymoyr + ', ' + time + ampm;
    }
    return dateLine;
  }
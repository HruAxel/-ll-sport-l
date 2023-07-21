function clockNow() {
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (seconds < 10) {
        seconds = '0' + seconds;
      }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }  
    if (hours < 10) {
        hours = '0' + hours;
    }
    
    let clockFace = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clockFace;
    setTimeout(function() {
    clockNow();
  }, 1000);
}

clockNow();
const myHeading = document.querySelector(clock);
myHeading.textContent = clockNow;
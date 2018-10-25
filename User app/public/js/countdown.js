///////////////////////////////////////////////////StartCountdown

startCountDown();
function ProgressCountdown(timeleft, bar, text) {
    return new Promise((resolve, reject) => {
      var countdownTimer = setInterval(() => {
        timeleft--;
  
        document.getElementById(bar).value = timeleft;
        document.getElementById(text).textContent = timeleft;
  
        if (timeleft <= 0) {
          clearInterval(countdownTimer);
          resolve(true);
          skipAuto();
          startCountDown();
        }
      }, 1000);
    });
    
  }
  
  function startCountDown(){
      var timeleftStart = 50;
      ProgressCountdown(timeleftStart, 'pageBeginCountdown', 'pageBeginCountdownText').then;
  }


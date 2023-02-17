export function Timer({
  minutes,
  seconds,
  Sounds,
  controls
}){

  let countDownTimer 

  function countDown(){
   
      countDownTimer = setTimeout(()=>{

      let minutesDisplay = Number(minutes.textContent)
      let secondsDisplay = Number(seconds.textContent)
      let isFinished = minutesDisplay <= 0 && secondsDisplay <= 0

      if(isFinished){
        Sounds.timeOff()
        updateTimerDisplay(minutesDisplay,secondsDisplay)
        controls.endToggleCards()
        Sounds.stopCafeteriaSound()
        Sounds.stopFireplaceSound()
        Sounds.stopForestSound()
        Sounds.stopRainSound()
        return
      }

      if(secondsDisplay <= 0){
        secondsDisplay = 60
        --minutesDisplay
      }

      updateTimerDisplay(minutesDisplay, String(secondsDisplay - 1).padStart(2, "0"));

      
    countDown()

    },1000)

  }

  function updateTimerDisplay(minutesDisplay,secondsDisplay){
    minutes.innerText = String(minutesDisplay).padStart(2, "0");
    seconds.innerText = String(secondsDisplay).padStart(2, "0");
  }

  function hold() {
    clearTimeout(countDownTimer)
  }

  return {
  countDown,
  updateTimerDisplay,
  hold
  }
}
export function Events({
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard,
  bgForestCard,
  bgRainCard,
  bgCafeteriaCard,
  bgFireplaceCard,
  Sounds,
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  controls,
  timer
}){

  // Card events

  forestCard.addEventListener('click', () => {
    controls.toggleForestCard()
    if(bgForestCard.classList.contains('activeBg')){
      Sounds.playForestSound()
    }else {
      Sounds.stopForestSound()
    }  

  })

  rainCard.addEventListener('click', () => {
    controls.toggleRainCard()
    if(bgRainCard.classList.contains('activeBg')){
      Sounds.playRainSound()
    }else{
      Sounds.stopRainSound()
    }

  })

  cafeteriaCard.addEventListener('click', () => {
    controls.toggleCafeteriaCard()
    if(bgCafeteriaCard.classList.contains('activeBg')){
      Sounds.playCafeteriaSound()
    }else {
      Sounds.stopCafeteriaSound()
    }
   
  })

  fireplaceCard.addEventListener('click', () => {
    controls.toggleFireplaceCard()
    if(bgFireplaceCard.classList.contains('activeBg')){
      Sounds.playFireplaceSound()
    }else {
      Sounds.stopFireplaceSound()
    }
   
  })

  // Timer Events

  btnPlay.addEventListener('click', () => {
    timer.countDown()
   
  })

  btnStop.addEventListener('click', () => {
    timer.hold()
    Sounds.stopCafeteriaSound()
    Sounds.stopFireplaceSound()
    Sounds.stopForestSound()
    Sounds.stopRainSound()
    controls.endToggleCards()
   
    minutes.innerText = '25'
    seconds.innerText = '00'

  })

  btnPlus.addEventListener('click', () => {
    seconds.innerText = Number(seconds.innerText) + 5
    if(seconds.innerText >= 60){
      seconds.innerText = 0
      minutes.innerText = Number(minutes.innerText) + 1
    }
    timer.updateTimerDisplay(minutes.innerText,seconds.innerText)
    
  })

  btnMinus.addEventListener('click', () => {

    if(seconds.innerText > 0){
      seconds.innerText = Number(seconds.innerText) - 5
  
    }

    if(seconds.innerText == 0){
      minutes.innerText = Number(minutes.innerText) - 1
      seconds.innerText = 59
    }

    if(seconds.innerText < 0 && minutes.innerText >= 0){
      minutes.innerText = Number(minutes.innerText) - 1
      seconds.innerText = 59
    }


    timer.updateTimerDisplay(minutes.innerText,seconds.innerText)
  })


}


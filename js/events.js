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
  timer,
  rainCardPath,
  forestCardPath,
  cafeteriaCardPath,
  fireplaceCardPath
}){

  // Card events

  forestCard.addEventListener('click', () => {
    controls.toggleForestCard()
    forestCardPath.style.fill ='#323238'
    if(bgForestCard.classList.contains('activeBg')){
      Sounds.soundForestStart()
      forestCardPath.style.fill ='#fff'
      rainCardPath.style.fill ='#323238'
      cafeteriaCardPath.style.fill ='#323238'
      fireplaceCardPath.style.fill ='#323238'
      bgRainCard.classList.remove('activeBg')
      bgCafeteriaCard.classList.remove('activeBg')
      bgFireplaceCard.classList.remove('activeBg')
      
    }else {
      Sounds.stopForestSound()
    }  

  })

  rainCard.addEventListener('click', () => {
    controls.toggleRainCard()
    rainCardPath.style.fill ='#323238'
    if(bgRainCard.classList.contains('activeBg')){
      rainCardPath.style.fill ='#fff'
      forestCardPath.style.fill ='#323238'
      cafeteriaCardPath.style.fill ='#323238'
      fireplaceCardPath.style.fill ='#323238'
      Sounds.soundRainStart()
      bgForestCard.classList.remove('activeBg')
      bgCafeteriaCard.classList.remove('activeBg')
      bgFireplaceCard.classList.remove('activeBg')
      
    }else{
      Sounds.stopRainSound()
    }

  })

  cafeteriaCard.addEventListener('click', () => {
    controls.toggleCafeteriaCard()
    cafeteriaCardPath.style.fill ='#323238'
    if(bgCafeteriaCard.classList.contains('activeBg')){
      cafeteriaCardPath.style.fill ='#fff'
      forestCardPath.style.fill ='#323238'
      rainCardPath.style.fill ='#323238'
      fireplaceCardPath.style.fill ='#323238'
      Sounds.soundCoffeeStart()
      bgForestCard.classList.remove('activeBg')
      bgRainCard.classList.remove('activeBg')
      bgFireplaceCard.classList.remove('activeBg')
    }else {
      Sounds.stopCafeteriaSound()
    }
   
  })

  fireplaceCard.addEventListener('click', () => {
    controls.toggleFireplaceCard()
    fireplaceCardPath.style.fill ='#323238'
   
    if(bgFireplaceCard.classList.contains('activeBg')){
      fireplaceCardPath.style.fill ='#fff'
      forestCardPath.style.fill ='#323238'
      rainCardPath.style.fill ='#323238'
      cafeteriaCardPath.style.fill ='#323238'
      Sounds.soundFireplaceStart()
      bgForestCard.classList.remove('activeBg')
      bgRainCard.classList.remove('activeBg')
      bgCafeteriaCard.classList.remove('activeBg')
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


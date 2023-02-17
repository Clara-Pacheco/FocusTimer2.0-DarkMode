export function sounds () {
  const cafeteriaSound = new Audio('assets/sounds/Cafeteria.wav')
  const rainSound = new Audio('assets/sounds/Chuva.wav')
  const forestSound = new Audio('assets/sounds/Floresta.wav')
  const fireplaceSound = new Audio('assets/sounds/Lareira.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  cafeteriaSound.loop = true
  rainSound.loop = true
  forestSound.loop = true
  fireplaceSound.loop = true

  function playCafeteriaSound(){
    cafeteriaSound.play()
  }

  function stopCafeteriaSound(){
    cafeteriaSound.pause()
  }

  function playRainSound(){
    rainSound.play()
  }

  function stopRainSound(){
    rainSound.pause()
  }

  function playForestSound(){
    forestSound.play()
  }

  function stopForestSound(){
    forestSound.pause()
  }

  function playFireplaceSound(){
    fireplaceSound.play()
  }

  function stopFireplaceSound(){
    fireplaceSound.pause()
  }

  function timeOff() {
    kitchenTimer.play()
   }

  return {
    playCafeteriaSound,
    stopCafeteriaSound,
    playRainSound,
    stopRainSound,
    playForestSound,
    stopForestSound,
    playFireplaceSound,
    stopFireplaceSound,
    timeOff
  }



}
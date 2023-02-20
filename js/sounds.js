export function sounds ({
  inputForest,
  inputRain,
  inputCoffee,
  inputFireplace
}) {
  const cafeteriaSound = new Audio('assets/sounds/Cafeteria.wav')
  const rainSound = new Audio('assets/sounds/Chuva.wav')
  const forestSound = new Audio('assets/sounds/Floresta.wav')
  const fireplaceSound = new Audio('assets/sounds/Lareira.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


  function stopCafeteriaSound(){
    cafeteriaSound.pause()
  }

  function stopRainSound(){
    rainSound.pause()
  }

  function stopForestSound(){
    forestSound.pause()
  }

  function stopFireplaceSound(){
    fireplaceSound.pause()
  }

  function timeOff() {
    kitchenTimer.play()
   }

   let soundsOff = (soundOne, soundTwo, soundThree) => {
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
  }

  const soundForestStart = () => {
    soundsOff(rainSound, cafeteriaSound, fireplaceSound)
    forestSound.play()
    forestSound.volume = inputForest.value / 100
    forestSound.loop = true
  
  }
  
  const soundRainStart = () => {
    soundsOff(forestSound, cafeteriaSound, fireplaceSound)
    rainSound.play()
    rainSound.volume = inputRain.value / 100
    rainSound.loop = true
  }
  
  const soundCoffeeStart = () => {
    soundsOff(rainSound, forestSound, fireplaceSound)
    cafeteriaSound.play()
    cafeteriaSound.volume = inputCoffee.value / 100
    cafeteriaSound.loop = true
  }
  
  const soundFireplaceStart = () => {
    soundsOff(rainSound, forestSound, cafeteriaSound)
    fireplaceSound.play()
    fireplaceSound.volume = inputFireplace.value / 100
    fireplaceSound.loop = true
  }

  return {
    stopCafeteriaSound,
    stopRainSound,
    stopForestSound,
    stopFireplaceSound,
    timeOff,
    soundForestStart,
    soundRainStart,
    soundCoffeeStart,
    soundFireplaceStart
  }



}
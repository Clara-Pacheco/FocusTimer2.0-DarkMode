import { elements } from './elements.js'

import { Events } from './events.js'

import { sounds } from './sounds.js'

import { Controls } from './controls.js'  

import { Timer } from './timer.js'

import { DarkMode } from './darkMode.js'

const {
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard,
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
  inputForest,
  inputRain,
  inputCoffee,
  inputFireplace
} = elements 

const Sounds = sounds({
  inputForest,
  inputRain,
  inputCoffee,
  inputFireplace
})

const controls = Controls({
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard
})

const timer = Timer({
  minutes,
  seconds,
  Sounds,
  controls
})

Events({
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard,
  Sounds,
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  controls,
  timer
  
})


DarkMode({
  minutes,
  seconds,
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
  
})







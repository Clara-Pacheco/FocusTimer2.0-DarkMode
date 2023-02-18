export function DarkMode({
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
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
  btnMinusPath
}){

  const sun = document.querySelector('.light-icon')
  const moon = document.querySelector('.dark-icon')
  const sunPath = document.querySelector('.light-icon-path')
  const moonPath = document.querySelector('.dark-icon-path')

  const documentBody = document.querySelector('body')
  const separationMinutesSeconds = document.querySelector('.separation-minuts-seconds') 

  function switchLightDarkModes(){
    sun.classList.toggle('notActiveIcon')
    moon.classList.toggle('notActiveIcon')
    
  }


  sun.addEventListener('click',()=>{
    switchLightDarkModes()
    minutes.style.color = '#fff'   
    separationMinutesSeconds.style.color = '#fff' 
    seconds.style.color = '#fff' 
    btnPlayPath.style.fill = '#C4C4CC'
    btnStopPath.style.fill = '#C4C4CC'
    btnPlusPath.style.fill = '#C4C4CC'
    btnMinusPath.style.fill = '#C4C4CC'
    bgForestCard.style.fill = '#29292E'
    bgRainCard.style.fill = '#29292E'
    bgCafeteriaCard.style.fill = '#29292E'
    bgFireplaceCard.style.fill = '#29292E'
    forestCardPath.style.fill = '#C4C4CC'
    rainCardPath.style.fill = '#C4C4CC'
    cafeteriaCardPath.style.fill = '#C4C4CC'
    fireplaceCardPath.style.fill = '#C4C4CC'

    document.body.style.backgroundColor = '#121214'

  })

  moon.addEventListener('click',()=>{
    switchLightDarkModes()
    minutes.style.color = '#323238' 
    separationMinutesSeconds.style.color = '#323238' 
    seconds.style.color = '#323238' 
    btnPlayPath.style.fill = '#323238'
    btnStopPath.style.fill = '#323238'
    btnPlusPath.style.fill = '#323238'
    btnMinusPath.style.fill = '#323238'
    bgForestCard.style.fill = '#E1E1E6'
    bgRainCard.style.fill = '#E1E1E6'
    bgCafeteriaCard.style.fill = '#E1E1E6'
    bgFireplaceCard.style.fill = '#E1E1E6'
    forestCardPath.style.fill = '#323238'
    rainCardPath.style.fill = '#323238'
    cafeteriaCardPath.style.fill = '#323238'
    fireplaceCardPath.style.fill = '#323238'

    document.body.style.backgroundColor = '#FFF'
  })

 

}


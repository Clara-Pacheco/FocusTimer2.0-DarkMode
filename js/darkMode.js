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
  })

 

}


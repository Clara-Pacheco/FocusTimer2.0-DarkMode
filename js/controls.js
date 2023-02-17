export function Controls({
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath
  
}){

  function toggleForestCard(){
    bgForestCard.classList.toggle('activeBg')
    forestCardPath.classList.toggle('activePath')
  }

  function toggleRainCard(){
    bgRainCard.classList.toggle('activeBg')
    rainCardPath.classList.toggle('activePath')
  }

  function toggleCafeteriaCard() {
    bgCafeteriaCard.classList.toggle('activeBg')
    cafeteriaCardPath.classList.toggle('activePath')
  }

  function toggleFireplaceCard() {
    bgFireplaceCard.classList.toggle('activeBg')
    fireplaceCardPath.classList.toggle('activePath')
  }

  function endToggleCards(){
    if(bgForestCard.classList.contains('activeBg')){
      toggleForestCard()
    }

    if(bgRainCard.classList.contains('activeBg')){
      toggleRainCard()
    }

    if(bgCafeteriaCard.classList.contains('activeBg')){
      toggleCafeteriaCard()
    }

    if(bgFireplaceCard.classList.contains('activeBg')){
      toggleFireplaceCard()
    }
  }

  return {
    toggleForestCard,
    toggleRainCard,
    toggleCafeteriaCard,
    toggleFireplaceCard,
    endToggleCards 
  }

}
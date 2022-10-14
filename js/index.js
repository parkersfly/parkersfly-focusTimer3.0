import {
   treeCard,
   rainCard,
   coffeeCard,
   fireCard,
   buttonPlay,
   buttonStop,
   buttonAdd,
   buttonRemove,
   secondsDisplay,
   minutesDisplay,
   lightMode,
   darkMode,
   body,
   timerDisplay,
   playSvgColor,
   addSvgColor,
   removeSvgColor,
   stopSvgColor,
   treeSvgColor,
   rainSvgColor,
   coffeeSvgColor,
   fireSvgColor,
   treeInput,
   rainInput,
   coffeeInput,
   fireInput,
} from "./elements.js"

import  Timer  from "./timer.js"

import Sounds from "./sounds.js"

const sounds = Sounds ({
  
})

const timer = Timer ({ 
  secondsDisplay,
  minutesDisplay
})

treeCard.addEventListener('click', () => {

  treeSvgColor.classList.add('svgWhite')
  sounds.treePlay()
  toggleCardColor(treeCard, "treeCardOn", treeSvgColor)
  
  if(!treeCard.classList.contains('treeCardOn')){
    sounds.treePause()
  }

  if(treeCard.classList.contains('treeCardOn')){
    treeInput.classList.remove("rangeLightMode")
    treeInput.classList.add("rangeDarkMode")
  } else {
    treeInput.classList.add("rangeLightMode")
    treeInput.classList.remove("rangeDarkMode")
  }

  if(lightMode.classList.contains('hide')){
    treeInput.classList.add("rangeDarkMode")
  }

})

rainCard.addEventListener('click', () => {
  sounds.rainPlay()
  rainSvgColor.classList.add('svgWhite')
  toggleCardColor(rainCard, "rainCardOn", rainSvgColor)

  if(!rainCard.classList.contains('rainCardOn')){
    sounds.rainPause()
  }

  if(rainCard.classList.contains('rainCardOn')){
    rainInput.classList.remove("rangeLightMode")
    rainInput.classList.add("rangeDarkMode")
  } else {
    rainInput.classList.add("rangeLightMode")
    rainInput.classList.remove("rangeDarkMode")
  }

  if(lightMode.classList.contains('hide')){
    rainInput.classList.add("rangeDarkMode")
  }
  
})

coffeeCard.addEventListener('click', () => {
  sounds.coffeePlay()
  coffeeSvgColor.classList.add('svgWhite')
  toggleCardColor(coffeeCard, "coffeeCardOn", coffeeSvgColor)

  if(!coffeeCard.classList.contains('coffeeCardOn')){
    sounds.coffeePause()
  }

  if(coffeeCard.classList.contains('coffeeCardOn')){
    coffeeInput.classList.remove("rangeLightMode")
    coffeeInput.classList.add("rangeDarkMode")
  } else {
    coffeeInput.classList.add("rangeLightMode")
    coffeeInput.classList.remove("rangeDarkMode")
  }

  if(lightMode.classList.contains('hide')){
    coffeeInput.classList.add("rangeDarkMode")
  }
})

fireCard.addEventListener('click', () => {
  sounds.firePlay()
  fireSvgColor.classList.add('svgWhite')
  toggleCardColor(fireCard, "fireCardOn", fireSvgColor)

  if(!fireCard.classList.contains('fireCardOn')){
    sounds.firePause()
  }

  if(fireCard.classList.contains('fireCardOn')){
    fireInput.classList.remove("rangeLightMode")
    fireInput.classList.add("rangeDarkMode")
  } else {
    fireInput.classList.add("rangeLightMode")
    fireInput.classList.remove("rangeDarkMode")
  }

  if(lightMode.classList.contains('hide')){
    fireInput.classList.add("rangeDarkMode")
  }
})

buttonPlay.addEventListener('click', () => {
  sounds.pressButton()
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  sounds.pressButton()
  timer.stop()
})

buttonAdd.addEventListener('click', () => {
  sounds.pressButton()
  timer.addMinutes()
})

buttonRemove.addEventListener('click', () => {
  sounds.pressButton()
  timer.removeMinutes()
})

lightMode.addEventListener('click', () => {
  toggleLightDarkMode()
  
  body.style.background = "#121214"

  timerDisplay.style.color = "#FFFFFF"

  playSvgColor.classList.add('darkModeSvgColor')
  stopSvgColor.classList.add('darkModeSvgColor')
  removeSvgColor.classList.add('darkModeSvgColor')
  addSvgColor.classList.add('darkModeSvgColor')

  treeCard.classList.add('cardColorDarkMode')
  rainCard.classList.add('cardColorDarkMode')
  coffeeCard.classList.add('cardColorDarkMode')
  fireCard.classList.add('cardColorDarkMode')

  treeSvgColor.classList.add('darkModeSvgColor')
  rainSvgColor.classList.add('darkModeSvgColor')
  coffeeSvgColor.classList.add('darkModeSvgColor')
  fireSvgColor.classList.add('darkModeSvgColor')
  
  treeInput.classList.remove('rangeLightMode')
  treeInput.classList.add('rangeDarkMode')
  rainInput.classList.remove('rangeLightMode')
  rainInput.classList.add('rangeDarkMode')
  coffeeInput.classList.remove('rangeLightMode')
  coffeeInput.classList.add('rangeDarkMode')
  fireInput.classList.remove('rangeLightMode')
  fireInput.classList.add('rangeDarkMode')

  treeInput.classList.remove('rangeLightMode')
  treeInput.classList.add('rangeDarkMode')

})

darkMode.addEventListener('click', () => {
  toggleLightDarkMode()

  playSvgColor.classList.remove('darkModeSvgColor')
  stopSvgColor.classList.remove('darkModeSvgColor')
  removeSvgColor.classList.remove('darkModeSvgColor')
  addSvgColor.classList.remove('darkModeSvgColor')

  body.style.background = "#FFFFFF"

  timerDisplay.style.color = "#323238"

  treeCard.classList.add('cardLightMode')
  rainCard.classList.add('cardLightMode')
  coffeeCard.classList.add('cardLightMode')
  fireCard.classList.add('cardLightMode')

  treeSvgColor.classList.remove('darkModeSvgColor')
  rainSvgColor.classList.remove('darkModeSvgColor')
  coffeeSvgColor.classList.remove('darkModeSvgColor')
  fireSvgColor.classList.remove('darkModeSvgColor')

  treeInput.classList.add('rangeLightMode')
  treeInput.classList.remove('rangeDarkMode')
  rainInput.classList.add('rangeLightMode')
  rainInput.classList.remove('rangeDarkMode')
  coffeeInput.classList.add('rangeLightMode')
  coffeeInput.classList.remove('rangeDarkMode')
  fireInput.classList.add('rangeLightMode')
  fireInput.classList.remove('rangeDarkMode')

  treeCard.classList.remove('cardColorDarkMode')
  rainCard.classList.remove('cardColorDarkMode')
  coffeeCard.classList.remove('cardColorDarkMode')
  fireCard.classList.remove('cardColorDarkMode')

  if(treeCard.classList.contains('treeCardOn')){
    treeInput.classList.add('rangeDarkMode')
    treeInput.classList.remove('rangeLightMode')
  }
  if(rainCard.classList.contains('rainCardOn')){
    rainInput.classList.add('rangeDarkMode')
    rainInput.classList.remove('rangeLightMode')
  }
  if(coffeeCard.classList.contains('coffeeCardOn')){
    coffeeInput.classList.add('rangeDarkMode')
    coffeeInput.classList.remove('rangeLightMode')
  }
  if(fireCard.classList.contains('fireCardOn')){
    fireInput.classList.add('rangeDarkMode')
    fireInput.classList.remove('rangeLightMode')
  }
  
})

function toggleLightDarkMode() {
  if(darkMode.classList.contains('hide')){
    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
  } else {
    lightMode.classList.remove('hide')
    darkMode.classList.add('hide')
  }
}

 function toggleCardColor (element, classe, svgColor) {
  if(element.classList.contains(classe)){
    element.classList.remove(classe)
    svgColor.classList.remove("svgWhite")
  } else {
    element.classList.add(classe)
  }
 }
  
import Sounds from "./sounds.js"

const sounds = Sounds({})

export default function Timer ({
    secondsDisplay,
    minutesDisplay

}) {

    let timerTimeOut

    function countdown(){
    
        timerTimeOut = setTimeout(() => {
          
          let seconds =  Number(secondsDisplay.textContent)
          let minutes = Number(minutesDisplay.textContent)
          let isFinished = minutes <= 0 && seconds <= 0
          
        if(seconds <= 0){
          seconds = 60
          --minutes
        }
    
        if(isFinished){
          sounds.timerFinished()
          minutesDisplay.textContent = 25
          return
        }
    
        
        secondsDisplay.textContent = String(--seconds).padStart(2, "0") 
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        
        
        countdown()
       }, 1000)
    
     }
    
    function stop() {
      clearTimeout(timerTimeOut)
    }
    
    function addMinutes() {
      let newMinutes = Number(minutesDisplay.textContent) + 5
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    }
    
    function removeMinutes() {
      let newMinutes = Number(minutesDisplay.textContent) - 5
      if(minutesDisplay.textContent < 5){
        newMinutes = Number(minutesDisplay.textContent) - Number(minutesDisplay.textContent)
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        return
      } else {
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
      }
        
    }

    return {
        countdown,
        stop,
        addMinutes,
        removeMinutes
    }

}


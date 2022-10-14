import { treeInput, rainInput, coffeeInput, fireInput } from "./elements.js"

export default function Sounds ({
    
}) {

    const tree = new Audio("sounds/Floresta.wav")
    const rain = new Audio("sounds/Chuva.wav")
    const coffee = new Audio("sounds/Cafeteria.wav")
    const fire = new Audio("sounds/Lareira.wav")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timerIsFinished = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true") 

    
    function setVolume(sound, value) {
    sound.volume = value / 100
    }

    treeInput.addEventListener( 'input', () => {
         setVolume(tree, treeInput.value)
      })

      treeInput.addEventListener( 'change', () => {
        setVolume(tree, treeInput.value)
     })

     rainInput.addEventListener('change', () => {
        setVolume(rain, rainInput.value)
     })
 
     rainInput.addEventListener('input', () => {
        setVolume(rain, rainInput.value)
      })

      coffeeInput.addEventListener('change', () => {
        setVolume(coffee, coffeeInput.value)
     })
 
     coffeeInput.addEventListener('input', () => {
        setVolume(coffee, coffeeInput.value)
      })

      fireInput.addEventListener('change', () => {
        setVolume(fire, fireInput.value)
     })
 
     fireInput.addEventListener('input', () => {
         setVolume(fire, fireInput.value)
      })

    

    tree.loop = true
    rain.loop = true
    coffee.loop = true
    fire.loop = true

    function treePlay() {
        tree.play()
    }

    function treePause() {
        tree.pause()
    }

    function rainPlay() {
        rain.play()
    }

    function rainPause() {
        rain.pause()
    }
    
    function coffeePlay() {
        coffee.play()
    }
    
    function coffeePause() {
        coffee.pause()
    }
    
    function firePlay() {
        fire.play()
    }

    function firePause() {
        fire.pause()
    }

    function pressButton(){
        buttonPressAudio.play()
    }

    function timerFinished (){
        timerIsFinished.play()
    }

    return{
        pressButton,
        timerFinished,
        treePlay,
        rainPlay,
        coffeePlay,
        firePlay,
        treePause,
        rainPause,
        coffeePause,
        firePause
    }

}
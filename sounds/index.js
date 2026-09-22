const button = document.querySelector("button")
button.addEventListener("click", function(){
    const audio = new Audio("./sounds/snare.mp3")
    audio.play()
})

document.addEventListener("keydown" , function(e){

    if(e.key == "k"){
        const audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    }
})
document.addEventListener("keydown" , function(e){
    
    if(e.key == "l"){
        const audio = new Audio("sounds/tom-2.mp3")
        audio.play()
    }
})
document.addEventListener("keydown" , function(e){
    
    if(e.key == "m"){
        const audio = new Audio("sounds/tom-3.mp3")
        audio.play()
    }
})
document.addEventListener("keydown" , function(e){
    
    if(e.key == "n"){
        const audio = new Audio("sounds/tom-4.mp3")
        audio.play()
    }
})
document.addEventListener("keydown" , function(e){
    
    if(e.key == "o"){
        const audio = new Audio("sounds/crash.mp3")
        audio.play()
    }
})
document.addEventListener("keydown" , function(e){
    
    if(e.key == "p"){
        const audio = new Audio("sounds/kick-bass.mp3")
        audio.play()
    }
})

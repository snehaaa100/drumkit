const button = document.querySelector("div")
button.addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-1.mp3")
    audio.play()
})
document.addEventListener("keydown" , function(e){

    if(e.key == "j"){
        const audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    }else if(e.key == "k"){
        const audio = new Audio("sounds/tom-2.mp3")
        audio.play()
    }else if(e.key == "l"){
        const audio = new Audio("sounds/tom-3.mp3")
        audio.play()
    }else if(e.key == "m"){
        const audio = new Audio("sounds/tom-4.mp3")
        audio.play()
    }else if(e.key == "n"){
        const audio = new Audio("sounds/snare.mp3")
        audio.play()
    }else if(e.key == "o"){
        const audio = new Audio("sounds/crash.mp3")
        audio.play()
    }else if(e.key == "p"){
        const audio = new Audio("sounds/tom-4.mp3")
        audio.play()
    }
})

const k = document.getElementById("k")
k.addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-2.mp3")
    audio.play()
})

const l = document.getElementById("l")
l.addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-3.mp3")
    audio.play()
})

const m = document.getElementById("m")
m.addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-4.mp3")
    audio.play()
})

const n = document.getElementById("n")
n.addEventListener("click", function(){
    const audio = new Audio("./sounds/snare.mp3")
    audio.play()
})

const o = document.querySelector("#o")
o.addEventListener("click", function(){
    const audio = new Audio("./sounds/crash.mp3")
    audio.play()
})

const p = document.getElementById("p")
p.addEventListener("click", function(){
    const audio = new Audio("./sounds/tom-4.mp3")
    audio.play()
})



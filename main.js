let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let timer = document.querySelector("#time");
let scoreDisplay = document.querySelector("#score");

let s = 0
let time = 5

const word = [
    "India",
    "Russia",
    "China",
    "America",
    "Japan",
    "Spain",
    "Canada",
    "UAE",
    "Srilanka"
]




window.addEventListener("DOMContentLoaded",function(){

    showWord();
    wordInput.addEventListener("input",match)
    setInterval(count,1000)
})



function showWord(){

let randomNumber=Math.floor(Math.random()*word.length);
    currentWord.innerHTML= word[randomNumber]
}



function match(e){

    if(e.target.value === currentWord.innerHTML){

        showWord();
        wordInput.value = ""
        s++
        scoreDisplay.innerHTML = s
        time=5
    }
}

function count() {

    if(time >= 0){
        timer.innerHTML = time
    time--
    }
    
}
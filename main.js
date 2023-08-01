let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let timer = document.querySelector("#time");
let scoreDisplay = document.querySelector("#score");
let intervalId;
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
    intervalId=setInterval(count,1000)
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

    if(time > 0){
        time--

        timer.innerHTML = time
    }

    else if(time==0){
        let pan = document.getElementById("message")
        pan.innerHTML="GAME OVER"
        clearInterval(intervalId);
        console.log("close")



        document.getElementById("word-input").style.display="none";




         
    }
    
}
 
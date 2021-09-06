let counterPM = 1
let counter = document.getElementById("counter")
let counterValue = parseInt(counter.innerText)
let isPaused = false

//getting elements
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const likesList = document.querySelector(".likes")
const commentButton = document.getElementById("comment-form")
const commentList = document.getElementById("list")

//increments counter through buttons
function counterIncrement(operator){
    if(operator === 1){
     counterValue += counterPM
}  else{
        counterValue -= counterPM
}
    counter.innerText = counterValue
}



//increments the counterValue every second
function countUp(x) {
// while(isPaused === false){
// setInterval(function() {counterIncrement(1)}, 1000);
// }
setInterval(function() {counterIncrement(1)}, 1000);
}

function like(){  //neds edit!

    const counterNumber = counterValue
    //
    if(document.getElementById(counterNumber)){
        ++document.getElementById(counterNumber).value
        document.getElementById(counterNumber).innerText = document.getElementById(counterNumber).id + ` has ${document.getElementById(counterNumber).value} likes`
    }
    else{
        const currentNumEle = document.createElement('li')
        currentNumEle.id = counterNumber
        currentNumEle.value = 0
        currentNumEle.innerText = currentNumEle.id + ` has ${currentNumEle.value} likes` 
        document.querySelector('ul').append(currentNumEle)
    }
}

function comment(event){
    event.preventDefault()

    const newComment = document.createElement("p")
    newComment.innerText = event.target.querySelector(`#comment-input`).value

    commentList.append(newComment)
    
}

function pauseSite(){
    isPaused = !isPaused
    

    if(isPaused === true){
        pause.innerText = "resume"
        counterPM = 0
    }
    else{
        pause.innerText = "pause"
        counterPM = 1

    }
    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled
    heart.disabled = !heart.disabled
    console.log(isPaused)
    //disable minus, plus, heart and counterUp
}

function init(){
    console.log(counterValue)

    plus.addEventListener("click", () => counterIncrement(1))
    minus.addEventListener("click",() => counterIncrement(0))
    heart.addEventListener("click",() => like())
    pause.addEventListener("click", () => pauseSite())


    commentButton.addEventListener("submit", comment)

    countUp()
}

init()
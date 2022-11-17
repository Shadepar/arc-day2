let userscore = 0;
let compscore = 0;
const audio = new Audio("Winter.mp3")
const splash = document.querySelector(".splash");
const userscore_span = document.getElementById("score-user");
const compscore_span = document.getElementById("score-comp");
const score_div = document.querySelector(".score");
const splash_h1 = document.querySelector(".splash > h1");
const outcome_h1 = document.querySelector(".outcome > h1");
const message_h1 = document.querySelector(".message > h1");
const pstart_div = document.getElementById("pstart");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function start(){
    pstart_div.addEventListener('click', function() {
    splash.classList.add("display-none");
    pstart.remove()
})
}


audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('click', () => {
          audio.play()
       }, { once: true })
    })
 })

function comprandom(){
    const option = ["rock","paper","scissor"]
    const random = Math.floor(Math.random() * 3)
    return option[random]
}

function play(userinput) {
    const output = userinput + comprandom()
    console.log(output)
    if (output == "rockscissor"){
        userscore++
        outcome_h1.innerHTML = "rock(user) blunt scissor(comp). You Win!"
    }
    else if (output == "paperrock"){
        userscore++
        outcome_h1.innerHTML = "paper(user) cover rock(comp). You Win!"
    }
    else if (output == "scissorpaper"){
        userscore++
        outcome_h1.innerHTML = "scissor(user) cut paper(comp). You Win!"
    }
    else if (output == "scissorrock"){
        outcome_h1.innerHTML = "rock(comp) blunt scissor(user). You Lose!"
    }
    else if (output == "rockpaper"){
        outcome_h1.innerHTML = "paper(comp) cover rock(comp). You Lose!"
    }
    else if (output == "paperscissor"){
        outcome_h1.innerHTML = "scissor(comp) cut paper(user). You Lose!"
    }
    else if (output == "rockrock"){
        outcome_h1.innerHTML = "rock(user) against rock(comp). Its a draw!"
    }
    else if (output == "paperpaper"){
        outcome_h1.innerHTML = "paper(user) against paper(comp). Its a draw!"
    }
    else if (output == "scissorscissor"){
        outcome_h1.innerHTML = "scissor(user) against scissor(comp). Its a draw!"
    }
    compscore_span .innerHTML = compscore
    userscore_span .innerHTML = userscore

    setTimeout(()=>{
    compscore++
    userscore = 0
    compscore_span .innerHTML = compscore
    userscore_span .innerHTML = userscore
    
    if (compscore <= 4) {
        message_h1.innerHTML = "You can do better"
    } else if (compscore == 9) {
        message_h1.innerHTML = "Ok you cant. Just stop!"
    } else if (compscore == 17) {
        message_h1.innerHTML = "Oh you still here. truly a dimwit...bye"
    } else if (compscore == 38) {
        userscore = 6
        compscore = 66
        compscore_span .innerHTML = compscore
        userscore_span .innerHTML = userscore
    } else if (compscore == 67){
        splash_h1.innerHTML = "The End?"
        splash.classList.add("end");
        splash.classList.remove("display-none");
        startbut.classList.add("display-none");
    }

    }, 500)
} 

function main() {
    rock_div.addEventListener('click', function() {
        play("rock")
    })

    paper_div.addEventListener('click', function() {
        play("paper")
    })

    scissor_div.addEventListener('click', function() {
        play("scissor")
    })
}

start()
main()
const btn = document.querySelector(".start");
const intro = document.querySelector(".intro");
const game = document.querySelector(".game");
const nameInput = document.querySelector(".name");
const warn = document.querySelector(".warn");
const msg = document.querySelector("#welcome-msg");
const vs = document.querySelector(".vs");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const winMsg = document.querySelector(".win-msg");
const computerSel = document.querySelector(".computer-selection");
const currRound = document.querySelector(".curr-round");
const scoreTable = document.querySelector(".score-table");
const result = document.querySelector(".result");

let roundNumber = 0;

result.children[0].innerText = "round played: "+(roundNumber);

// rock.getAttribute('id');

btn.addEventListener('click', () => {

    if(nameInput.value.trim() == "") {
        warn.style.display = "block";
        return;
    }

    intro.style.display = "none";
    game.style.display = "block";

    document.body.style.background = "white";

    vs.innerText = nameInput.value+" vs Computer"

    // document.body.backgroundColor = "linear-gradient(90deg, linen, lightSteelBlue)";
    msg.style.fontFamily = "'Times New Roman', Times, serif";

    msg.innerText = "Hello "+nameInput.value+" !";
});

const arr = ["rock", "paper", "scissor"];

const obj = {
    "rock": "✊",
    "paper": "🖐️",
    "scissor": "✌️"
};

let userCount = 0;
let computerCount = 0;
let drawCount = 0;

const decision = () => {
    console.log("hello world");
    console.log(event.target);
    console.log(event.target.getAttribute('id'));

    let user = event.target.getAttribute('id');
    // computer's turn:

    let random = Math.ceil(Math.random() * 3);
    console.log(random);

    random -= 1;
    console.log(arr[random]);

    let computer = arr[random];
    let isUserWin = getResult(user, computer);

    computerSel.innerText = ""

    if(user === computer) {
        winMsg.innerText = "match draw: "+ obj[user+""] + " x "+ obj[computer];
        drawCount++;
    }
    else if(isUserWin) {
        winMsg.innerText = "You win: "+ obj[user] + " x "+ obj[computer];
        userCount++;
    } else {
        winMsg.innerText = "You lose: "+ obj[user] + " x "+ obj[computer];
        computerCount++;
    }

    roundNumber++;
    currRound.innerText = "ROUND "+roundNumber;
    result.children[0].innerText = "round played: "+(roundNumber);

    if(userCount === computerCount) {
        result.children[1].style.color = "green";
        result.children[2].style.color = "green"
    } else if(computerCount > userCount) {
        result.children[1].style.color = "red";
    } else {
        result.children[2].style.color = "red";
    }
    result.children[1].innerText =  nameInput.value+"'s Score: "+userCount;
    result.children[2].innerText = "Computer's Score: "+computerCount;
    if(drawCount > 0) {
        result.children[3].innerText = "total draws: "+drawCount
    }
}

const getResult = (user, computer) => {
    if(user === "rock") {
        if(computer === "paper") return false;
        return true;
    } 
    else if(user === "paper") {
        if(computer === "scissor") return false;
        return true;
    } else {
        if(computer === "rock") return false;
        return true;
    }
}

rock.addEventListener('click', decision);

paper.addEventListener('click', decision);

scissor.addEventListener('click', decision);
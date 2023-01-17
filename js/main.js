const arr = [
  {
    image: "lizard.png",
    name: "Lizard",
  },
  {
    image: "paper.png",
    name: "Paper",
  },
  {
    image: "rock.png",
    name: "Rock",
  },
  {
    image: "scissor.png",
    name: "Scissor",
  },
  {
    image: "spock.png",
    name: "Spock",
  },
];

const rule = {
  Lizard: ["Spock", "Paper"],

  Paper: ["Rock", "Spock"],

  Rock: ["Lizard", "Scissor"],

  Scissor: ["Paper", "Lizard"],

  Spock: ["Scissor", "Rock"],
};

const player1Options = document.querySelectorAll(
  "#player1 .available-options .option"
);

const botOptions = document.querySelectorAll(
  "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
  "#player1 .selected-option .option"
);

const botShowArea = document.querySelector("#player2 .selected-option .option");

const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

const roundMessage = document.querySelector("#round-message");

player1Options.forEach((e) => {
  e.addEventListener("click", () => {
    play(e);
  });
});

function reset() {
  botShowArea.innerHTML = "";
  playerShowArea.innerHTML = "";
  roundMessage.innerHTML = "Choose your option";
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1Options.forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
  botOptions.forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
}

document.querySelector(".reset").addEventListener("click", reset);

function play(e) {
  const player1 = e.getAttribute("data-index");

  const length = arr.length;

  const player2 = Math.floor(Math.random() * length);

  showPlayerOption(player1, playerShowArea);
  highlightSelectedOption(player1, player1Options);

  showPlayerOption(player2, botShowArea);
  highlightSelectedOption(player2, botOptions);

  calculateScore(player1, player2);
}

const imageFolderPath = "assets";

//! Generate an image element (generateImgElement with index)
function generateImgElement(index) {
  const { image, name } = arr[index];
  const imgElement = document.createElement("img");
  imgElement.src = `${imageFolderPath}/${image}`;
  imgElement.alt = name;
  imgElement.title = name;
  return imgElement;
}

//! Show selected option (showPlayerOption with index and showArea)
function showPlayerOption(index, showArea) {
  const imgElement = generateImgElement(index);
  showArea.innerHTML = "";
  showArea.append(imgElement);
}

//! highlightSelectedOption function with index and options array
function highlightSelectedOption(index, options) {
  options.forEach((e) => {
    e.classList.remove("active");
  });
  options[index].classList.add("active");
}

//! Show the message (showMessage with msg)
function showMessage(msg) {
  roundMessage.innerHTML = "";
  roundMessage.innerHTML = msg;
}

//! Claculate function for player 1, player 2 scores (calculateScore with player1, player2)
function calculateScore(player1, player2) {
  const player1Choice = arr[player1].name;
  const player2Choice = arr[player2].name;

  const player1Strength = rule[player1Choice];

  if (player1Choice === player2Choice) {
    showMessage("Draw!");
  } else if (player1Strength.includes(player2Choice)) {
    showMessage("Player is winner !");
    addScore(player1Score);
    start();
    setTimeout(stop,2000);
    start1();
    setTimeout(stop1,2000);
    // startConfetti()
    // setTimeout(stopConfetti,2000);
    
   
   
  } else {
    showMessage("Bot is winner !");
    addScore(player2Score);
    start2();
    setTimeout(stop2,1800);
  }
 
}

const  a=sessionStorage.getItem("aa")
const  c=sessionStorage.getItem("cc")

//! Change the score (addScore with player)
function addScore(player) {
  const { innerHTML } = player;
   player.innerHTML = Number(innerHTML) + 1;

   sessionStorage.setItem("aa",Number(player1Score.textContent))
   sessionStorage.setItem("cc",Number(player2Score.textContent))
}

if(player1Score.textContent!==""){

  player1Score.textContent=a
};
if(player2Score.textContent!==""){

  player2Score.textContent=c
}

// if(player2Score.textContent!==""){

//   player2Score.textContent=s
// }

//TODO:: *** confity, alert message, storage score, if the difference is 15 and biger, then reset game and new game start, if I want to add a third player option add it ***


// 5 ferq
// if(Number(player1Score)==Number(player2Score)+2){
// alert("slaam")
// } else if(Number(player1Score)==Number(player2Score)-2){
//   alert("heps")
// }


// window.addEventListener('beforeunload', function (e) { 
//   e.preventDefault(); 
//   e.returnValue = 'slam'; 
 
// });



// confity
var sign=document.querySelector('.content');
function start(){
  sign.classList.remove('hidden')

};

function stop(){
  sign.classList.add('hidden')

};


// alerts
var sag=document.querySelector('.cart');
function start1(){
  sag.classList.remove('hidden2')

};

function stop1(){
  sag.classList.add('hidden2')

};


var sol=document.querySelector('.cart1');
function start2(){
  sol.classList.remove('hidden2')

};

function stop2(){
  sol.classList.add('hidden2')

};









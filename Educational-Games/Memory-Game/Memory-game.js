let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard"); 
let clickBoard = document.querySelector(".clickBoard"); 
let message = document.getElementById('message')
let imgs; 
let cardsId = []; 
let cardsSelected = []; 
let cardsWon = 0; 
let clicks = 0;
let gameMsg;

// fisher yates shuffle for the array responses
function shuffle(array) {
  let remainingElements = array.length; let temp; let i;

  while (remainingElements) {
    i = Math.floor(Math.random() * remainingElements--);

    temp = array[remainingElements];
    array[remainingElements] = array[i];
    array[i] = temp;
  }
  const randomNum = Math.floor(Math.random() * array.length);
  gameMsg = array[randomNum];

  return gameMsg;
}

const gotAMatchResponses = [
  "You're Awesome!",
  "Keep it up",
  "Rockstar",
  "Loving it",
  "You rock!",
  "Way to go!"
]

const noMatchResponses = [
  "Not quite",
  "Keep trying!",
  "Try again",
  "Better luck next time",
  "Darn!",
  "Rats!",
  "Ooops",
  "You can do it"
]

let imgArr = [
  { name: "Nina Simone", img: "../../Composers/Nina-Simone/nina-profile.jpg", alt:"Nina Simone Picture" }, 
  { name: "Nina Simone", img: "../../Composers/Nina-Simone/nina-profile.jpg", alt:"Nina Simone Picture" }, 
  { name: "Harry Burleigh", img: "../../Composers/Harry-Burleigh/harry-burleigh.jpeg", alt:"Harry Burleigh Picture" }, 
  { name: "Harry Burleigh", img: "../../Composers/Harry-Burleigh/harry-burleigh.jpeg", alt:"Harry Burleigh Picture" },
  { name: "Duke Ellington", img: "../../Composers/Duke-Ellington/duke-profile.jpg", alt:"Duke Ellington Picture" }, 
  { name: "Duke Ellington", img: "../../Composers/Duke-Ellington/duke-profile.jpg", alt:"Duke Ellington Picture" },
  { name: "Eleanor Alberga", img: "../../Composers/Eleanor-Alberga/eleanor-alberga-1.jpg", alt:"Eleanor Alberga Picture" },
  { name: "Eleanor Alberga", img: "../../Composers/Eleanor-Alberga/eleanor-alberga-1.jpg", alt:"Eleanor Alberga Picture" }, 
  { name: "Eubie Blake", img: "../../Composers/Eubie-Blake/eubie-blake-profile.jpg", alt:"Eubie Blake Picture" },
  { name: "Eubie Blake", img: "../../Composers/Eubie-Blake/eubie-blake-profile.jpg", alt:"Eubie Blake Picture" }, 
  { name: "Florence Price", img: "../../Composers/Florence-Price/Price-color.png", alt:"Florence Price Picture" },
  { name: "Florence Price", img: "../../Composers/Florence-Price/Price-color.png", alt:"Florence Price Picture" },
  { name: "Francis B. Johnson", img: "../../Composers/Francis-B-Johnson/francis-johnson-profile.jpg", alt:"Francis B. Johnson Picture" },
  { name: "Francis B. Johnson", img: "../../Composers/Francis-B-Johnson/francis-johnson-profile.jpg", alt:"Francis B. Johnson Picture" },
  { name: "Margaret Bonds", img: "../../Composers/Margaret-Bonds/Margaret-Bonds.jpg", alt:"Margaret Bonds Picture" },
  { name: "Margaret Bonds", img: "../../Composers/Margaret-Bonds/Margaret-Bonds.jpg", alt:"Margaret Bonds Picture"  }, 
]; 

//add event listeners to each image
document.addEventListener("DOMContentLoaded", function () {
    createBoard(grid, imgArr); 
    arrangeCard();
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flip)
    ) 
});

//create the game board 
function createBoard(grid, array) { 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "../Memory-Game/music-notes.png");
    img.setAttribute("data-id", index);
    img.addEventListener("click", flip) 
    grid.appendChild(img); 
    })
}

//randomly sort cards after each game
function arrangeCard() { 
    imgArr.sort(() => 0.5 - Math.random())
}


function flip() { 
    let selected = this.dataset.id;
    let clicked =imgArr[selected].name
    cardsSelected.push(clicked); 
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", imgArr[selected].img); 
    if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
    } 
}

function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
        shuffle(gotAMatchResponses)
        message.innerHTML = gameMsg
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(winner,500) 
    } else { 
        shuffle(noMatchResponses)
        message.innerHTML = gameMsg
        imgs[firstCard].setAttribute("src", "../Memory-Game/music-notes.png");
        imgs[secondCard].setAttribute("src", "../Memory-Game/music-notes.png"); 
        imgs[firstCard].classList.remove("flip"); 
        imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
}

function winner() {
    if (cardsWon == imgArr.length / 2) {
        window.scrollTo(0, 0);
        message.innerHTML = `You found all ${cardsWon} matches! It took you ${clicks} tries to win the game`    
    }
}

function reset() { 
    arrangeCard(); 
    grid.innerHTML = "";
    message.innerHTML = "";
    createBoard(grid, imgArr);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
}

const button = document.getElementById('custom-btn');
button.addEventListener('click', reset)
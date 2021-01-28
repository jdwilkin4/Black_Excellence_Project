let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard"); 
let playAgain = document.querySelector(".playAgain"); 
let clickBoard = document.querySelector(".clickBoard"); 
let winnerMessage = document.getElementById('winner-msg')
let imgs; 
let cardsId = []; 
let cardsSelected = []; 
let cardsWon = 0; 
let clicks = 0;


let cardArray = [
  { name: "Nina Simone", img: "Composers/Nina-Simone/nina-profile.jpg", alt:"Nina Simone Picture" }, 
  { name: "Nina Simone", img: "Composers/Nina-Simone/nina-profile.jpg", alt:"Nina Simone Picture" }, 
  { name: "Harry Burleigh", img: "Composers/Harry-Burleigh/harry-burleigh.jpeg", alt:"Harry Burleigh Picture" }, 
  { name: "Harry Burleigh", img: "Composers/Harry-Burleigh/harry-burleigh.jpeg", alt:"Harry Burleigh Picture" },
  { name: "Duke Ellington", img: "Composers/Duke-Ellington/duke-profile.jpg", alt:"Duke Ellington Picture" }, 
  { name: "Duke Ellington", img: "Composers/Duke-Ellington/duke-profile.jpg", alt:"Duke Ellington Picture" },
  { name: "Eleanor Alberga", img: "Composers/Eleanor-Alberga/eleanor-alberga-1.jpg", alt:"Eleanor Alberga Picture" },
  { name: "Eleanor Alberga", img: "Composers/Eleanor-Alberga/eleanor-alberga-1.jpg", alt:"Eleanor Alberga Picture" }, 
  { name: "Eubie Blake", img: "Composers/Eubie-Blake/eubie-blake-profile.jpg", alt:"Eubie Blake Picture" },
  { name: "Eubie Blake", img: "Composers/Eubie-Blake/eubie-blake-profile.jpg", alt:"Eubie Blake Picture" }, 
  { name: "Florence Price", img: "Composers/Florence-Price/Price-color.png", alt:"Florence Price Picture" },
  { name: "Florence Price", img: "Composers/Florence-Price/Price-color.png", alt:"Florence Price Picture" },
  { name: "Francis B. Johnson", img: "Composers/Francis-B-Johnson/francis-johnson-profile.jpg", alt:"Francis B. Johnson Picture" },
  { name: "Francis B. Johnson", img: "Composers/Francis-B-Johnson/francis-johnson-profile.jpg", alt:"Francis B. Johnson Picture" },
  { name: "Margaret Bonds", img: "Composers/Margaret-Bonds/Margaret-Bonds.jpg", alt:"Margaret Bonds Picture" },
  { name: "Margaret Bonds", img: "Composers/Margaret-Bonds/Margaret-Bonds.jpg", alt:"Margaret Bonds Picture"  }, 
]; 

//add event listeners to each image
document.addEventListener("DOMContentLoaded", function () {
    createBoard(grid, cardArray); 
    arrangeCard();
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
});

//create the game board 
function createBoard(grid, array) { 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "Resources/Educational-Games/Memory-Game/music-notes.png");
    img.setAttribute("data-id", index);
    img.addEventListener("click", flipCard) 
    grid.appendChild(img); 
    })
}

//randomly sort cards after each game
function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
}


function flipCard() { 
    let selected = this.dataset.id;
    let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
        setTimeout(checkForMatch, 500);
    } 
}

function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
        cardsWon += 1; 
        scoreBoard.innerHTML = cardsWon; 
        setTimeout(checkWon,500) 
    } else { 
        imgs[firstCard].setAttribute("src", "Resources/Educational-Games/Memory-Game/music-notes.png");
        imgs[secondCard].setAttribute("src", "Resources/Educational-Games/Memory-Game/music-notes.png"); 
        imgs[firstCard].classList.remove("flip"); 
        imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
}

function checkWon() {
    if (cardsWon == cardArray.length / 2) {
        winnerMessage.innerHTML = `You found all ${cardsWon} matches! It took you ${clicks} tries to win the game`
    }
}

function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    winnerMessage.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
}

const button = document.getElementById('custom-btn');
button.addEventListener('click', replay)
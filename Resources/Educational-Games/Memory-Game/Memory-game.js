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
    { name: "Duke Ellington", img: "/Composers/Duke-Ellington/duke-images/duke-profile.jpg", }, 
    { name: "Duke Ellington", img: "/Composers/Duke-Ellington/duke-images/duke-profile.jpg", },
    { name: "Eleanor Alberga", img: "/Composers/Eleanor-Alberga/eleanor-images/eleanor-alberga-1.jpg", },
    { name: "Eleanor Alberga", img: "/Composers/Eleanor-Alberga/eleanor-images/eleanor-alberga-1.jpg", }, 
    { name: "Eubie Blake", img: "/Composers/Eubie-Blake/eubie-images/eubie-blake-profile.jpg", },
    { name: "Eubie Blake", img: "/Composers/Eubie-Blake/eubie-images/eubie-blake-profile.jpg", }, 
    { name: "Florence Price", img: "/Composers/Florence-Price/florence-images/Price-color.png", },
    { name: "Florence Price", img: "/Composers/Florence-Price/florence-images/Price-color.png", },
    { name: "Francis B. Johnson", img: "/Composers/Francis-B-Johnson/francis-images/francis-johnson-profile.jpg", },
    { name: "Francis B. Johnson", img: "/Composers/Francis-B-Johnson/francis-images/francis-johnson-profile.jpg", },
    { name: "Margaret Bonds", img: "/Composers/Margaret-Bonds/margaret-images/Margaret-Bonds.jpg", },
    { name: "Margaret Bonds", img: "/Composers/Margaret-Bonds/margaret-images/Margaret-Bonds.jpg", }, 
]; 


document.addEventListener("DOMContentLoaded", function () {
    createBoard(grid, cardArray); 
    arrangeCard();
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
});


function createBoard(grid, array) { 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "https://lh3.googleusercontent.com/proxy/6sv2LNyK-kTtsBTCwLvfhFeHgrLhIsS3s15BWSAr6kOTFcZso98V4AqLX1r5Nci_Rf3zNI65L8DL27ZxghQkb8uLTklXmRE");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
}


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
        imgs[firstCard].setAttribute("src", "https://lh3.googleusercontent.com/proxy/6sv2LNyK-kTtsBTCwLvfhFeHgrLhIsS3s15BWSAr6kOTFcZso98V4AqLX1r5Nci_Rf3zNI65L8DL27ZxghQkb8uLTklXmRE");
        imgs[secondCard].setAttribute("src", "https://lh3.googleusercontent.com/proxy/6sv2LNyK-kTtsBTCwLvfhFeHgrLhIsS3s15BWSAr6kOTFcZso98V4AqLX1r5Nci_Rf3zNI65L8DL27ZxghQkb8uLTklXmRE"); 
        imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
}

function checkWon() {
    if (cardsWon == cardArray.length / 2) {
        winnerMessage.innerHTML = `Winner! It took you ${clicks} tries to win the game`
    }
}

function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
}
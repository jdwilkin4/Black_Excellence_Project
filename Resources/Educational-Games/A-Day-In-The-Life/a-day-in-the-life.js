const message = document.getElementById("message");
const earnings = document.getElementById("earnings")
let weeks = 0
let money = 0
const home = document.getElementById("home");
const button1 = document.getElementById("btn1");
const button2  = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");


/* const locations = [
    {
        name:'Grand Concert Hall',
        'button text':['Rehearse', 'Perform', 'Negotiate Rates', 'Go Home'],
        'button functions' : [rehearse, perform, negotiate, home],
        text:'Welcome to Grand Concert Hall'
    }
] */

//onclick options for main buttons
home.onclick = goHome;
button1.onclick = goOnTour;
button2.onclick = getGigs;
button3.onclick = teaching;
button4.onclick = getEducated;

//home button
function goHome() {
    message.innerHTML = "Welcome home";
    earnings.innerHTML = `Total earnings after week ${weeks}: $ ${money}`
    button1.innerHTML = "Go on Tour";
    button2.innerHTML = "Local gigs";
    button3.innerHTML = "Teaching";
    button4.innerHTML = "Higher Education";
    button1.onclick = goOnTour;
    button2.onclick = getGigs;
    button3.onclick = teaching;
    button4.onclick = getEducated;
}

//tour buttons
function goOnTour() {
    message.innerHTML = "Where would you like to tour?"
    button1.innerHTML = "West Coast";
    button2.innerHTML = "Midwest";
    button3.innerHTML = "South";
    button4.innerHTML = "East Coast";
    button1.onclick = westCoast;
    button2.onclick = midwest;
    button3.onclick = south;
    button4.onclick = eastCoast;
} 

//west coast options
function westCoast() {
    message.innerHTML = "Pick a state";
    button1.innerHTML = "California";
    button2.innerHTML = "Nevada";
    button3.innerHTML = "Utah";
    button4.innerHTML = "Arizona";
    button1.onclick = california;
    button2.onclick = nevada;
    button3.onclick = utah;
    button4.onclick = arizona;

}

function california() {
    message.innerHTML = "Pick a city";
    button1.innerHTML = "Los Angeles";
    button2.innerHTML = "San Francisco";
    button3.innerHTML = "Fresno";
    button4.innerHTML = "San Diego";
    button1.onclick = la;
    button2.onclick = sanFran;
    button3.onclick = fresno;
    button4.onclick = sanDiego;

}

function la() {
    message.innerHTML = "Welcome to Los Angeles";

}

function sanFran() {
    message.innerHTML = "Welcome to San Francisco";

}

function fresno() {
    message.innerHTML = "Welcome to Fresno";

}

function sanDiego() {
    message.innerHTML = "Welcome to San Diego";

}

function nevada() {
    message.innerHTML = "Pick a city";

}

function utah() {
    message.innerHTML = "Pick a city";

}

function arizona() {
    message.innerHTML = "Pick a city";

}



function midwest() {
    message.innerHTML = "Pick a state";

}

function south() {
    message.innerHTML = "Pick a state";

}

function eastCoast() {
    message.innerHTML = "Pick a state";

}

function getGigs() {

}

function teaching() {
    let teachingResponses = [
        "You were sick and didn't teach this week", 
        "You made $5 this week teaching", 
        "You made $10 teaching this week"
    ]
    let randomNum = Math.floor(Math.random() * teachingResponses.length);
    let randomMsg = teachingResponses[randomNum];

    if(randomMsg === teachingResponses[0]){
        message.innerHTML = teachingResponses[0]
        weeks++
        earnings.innerHTML = `Total earnings after week ${weeks}: $ ${money}`
    }else if(randomMsg === teachingResponses[1]){
        message.innerHTML = teachingResponses[1]
        weeks++
        money += 5
        earnings.innerHTML = `Total earnings after week ${weeks}: $ ${money}`
    }else {
        message.innerHTML = teachingResponses[2]
        weeks++
        money += 10
        earnings.innerHTML = `Total earnings after week ${weeks}: $ ${money}`
    }
}


function getEducated() {
    message.innerHTML = "You were denied acceptance to the conservatory because of your color"
}









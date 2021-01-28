/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
const message = document.getElementById('message');
const earnings = document.getElementById('earnings');
const img = document.getElementById('img');
const home = document.getElementById('home');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
let money = 0;
let randomMsg;

// function for smooth transitions for images
const fadeIn = (el, time) => {
  el.style.opacity = 0;
  el.style.display = 'block';

  let last = +new Date();

  const tick = () => {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
};

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
  randomMsg = array[randomNum];

  return randomMsg;
}

// array for performance outcomes
const gigResponses = [
  'You were late to the gig and not allowed to perform.',
  'You tried out a new song but the audience hated it',
  'A local musician heard your show and asked to collaborate in the future',
  'You tried out a new song and the audience loved it',
  'Your show started off strong but the ending was bad',
  'Your show started off rocky but you ended strong',
  'A little kid came up to you after the gig and congratulated you',
  'A local bar owner saw your show and asked if you could play at their bar',
  'The gig went well but the club manager was a jerk',
  'Someone approaches you after the show and asks for an autograph',
  'Your performance was ok and received a chilly reception from the audience',
  'People were dancing the whole time and really enjoyed your set',
  'You ran into an old jazz friend and got drinks after the show',
  'There was a heckler in the audience but you kept performing anyway',
  'You were running late to the gig but the performance went well',
  'You got sick before the show so you did not perform well',
  'You got into an argument with the manager of the club and they cut your set short.',
  'You were not allowed to use the bathroom because it is for whites only.',
  'You received a standing ovation!',
  'You stumbled a little bit during the set and received a few boos onstage.',
  'You were mugged outside after the gig and they took all of your money.',
  'An agent was impressed by your set and wants to speak with you.',
  'A record executive was impressed by your set and want to speak with you.',
  'A local celebrity heard you perform and was really impressed.',
  'A major celebrity heard you perform and invited you to hang with them afterwards.',
  'A publishing executive heard your performance and wants to speak with you.',
  'A famous jazz musician was impressed by your set and wants to speak with you.',
];

// this is for the tour and local gig functions
function performanceOutcomes() {
  shuffle(gigResponses);
  if (randomMsg === 'You were late to the gig and not allowed to perform.' || randomMsg === 'You were mugged outside after the gig and they took all of your money.') {
    message.innerHTML = randomMsg;
    money += 0;
    // earnings;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  } else {
    message.innerHTML = randomMsg;
    money += 5;
    // earnings;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  }
}

// pick a club
function selectAClub() {
  message.innerHTML = 'Choose a spot';
}

function downbeat() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/jazz-club1.jpg');
  fadeIn(img, 1000);
}

function dunbar() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/live-music-sign.jpg');
  fadeIn(img, 1000);
}

function purcells() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano2.jpg');
  fadeIn(img, 1000);
}

function clubFlamingo() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano3.jpg');
  fadeIn(img, 1000);
}

// west coast options
function westCoast() {
  selectAClub();
  button1.innerHTML = 'The Downbeat';
  button2.innerHTML = 'Dunbar Hotel';
  button3.innerHTML = "Purcell's Venue";
  button4.innerHTML = 'Club Flamingo';
  button1.onclick = downbeat;
  button2.onclick = dunbar;
  button3.onclick = purcells;
  button4.onclick = clubFlamingo;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/west-coast.jpg');
  fadeIn(img, 1000);
}

// Midwest performance options

function bakersLounge() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/jazz-club1.jpg');
  fadeIn(img, 1000);
}

function clubDeLisa() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/live-music-sign.jpg');
  fadeIn(img, 1000);
}

function kellysStables() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano2.jpg');
  fadeIn(img, 1000);
}

function friarsInn() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano3.jpg');
  fadeIn(img, 1000);
}

function midwest() {
  selectAClub();
  button1.innerHTML = "Baker's Lounge";
  button2.innerHTML = 'Club DeLisa';
  button3.innerHTML = "Kelly's Stables";
  button4.innerHTML = "Friar's Inn";
  button1.onclick = bakersLounge;
  button2.onclick = clubDeLisa;
  button3.onclick = kellysStables;
  button4.onclick = friarsInn;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/midwest.jpg');
  fadeIn(img, 1000);
}

// south performance options

function saengerTheatre() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/jazz-club1.jpg');
  fadeIn(img, 1000);
}

function Tabernacle() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/live-music-sign.jpg');
  fadeIn(img, 1000);
}

function douglassTheatre() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano2.jpg');
  fadeIn(img, 1000);
}

function carverTheatre() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano3.jpg');
  fadeIn(img, 1000);
}

function south() {
  selectAClub();
  button1.innerHTML = 'Saenger Theatre';
  button2.innerHTML = 'Tabernacle Venue';
  button3.innerHTML = 'Douglass Theatre';
  button4.innerHTML = 'Carver Theatre';
  button1.onclick = saengerTheatre;
  button2.onclick = Tabernacle;
  button3.onclick = douglassTheatre;
  button4.onclick = carverTheatre;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/south.jpg');
  fadeIn(img, 1000);
}

// east coast performance options

function pearlTheatre() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/jazz-club1.jpg');
  fadeIn(img, 1000);
}

function harlemAlhambra() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/live-music-sign.jpg');
  fadeIn(img, 1000);
}

function southland() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano2.jpg');
  fadeIn(img, 1000);
}

function bohemianCaverns() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano3.jpg');
  fadeIn(img, 1000);
}

function eastCoast() {
  selectAClub();
  button1.innerHTML = 'Pearl Theatre';
  button2.innerHTML = 'Harlem Alhambra';
  button3.innerHTML = 'Southland Venue';
  button4.innerHTML = 'Bohemian Caverns';
  button1.onclick = pearlTheatre;
  button2.onclick = harlemAlhambra;
  button3.onclick = southland;
  button4.onclick = bohemianCaverns;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/east-coast.jpg');
  fadeIn(img, 1000);
}

// tour buttons
function goOnTour() {
  message.innerHTML = 'Where would you like to tour?';
  button1.innerHTML = 'West';
  button2.innerHTML = 'Midwest';
  button3.innerHTML = 'South';
  button4.innerHTML = 'East';
  button1.onclick = westCoast;
  button2.onclick = midwest;
  button3.onclick = south;
  button4.onclick = eastCoast;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/statue-of-liberty.jpg');
  fadeIn(img, 1000);
}

// local gigs option
function famousDoor() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/jazz-club1.jpg');
  fadeIn(img, 1000);
}

function jimmmyRyan() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/live-music-sign.jpg');
  fadeIn(img, 1000);
}

function onyx() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano2.jpg');
  fadeIn(img, 1000);
}

function villageVanguard() {
  performanceOutcomes();
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano3.jpg');
  fadeIn(img, 1000);
}

function getGigs() {
  message.innerHTML = 'Choose a club';
  button1.innerHTML = "Jimmy Ryan's";
  button2.innerHTML = 'Onyx Club';
  button3.innerHTML = 'Famous Door';
  button4.innerHTML = 'Village Vanguard';
  button1.onclick = jimmmyRyan;
  button2.onclick = onyx;
  button3.onclick = famousDoor;
  button4.onclick = villageVanguard;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/nyc-cityscape.jpg');
  fadeIn(img, 1000);
}

// teaching function
function teaching() {
  const teachingResponses = [
    "You were sick and didn't teach this week",
    'You made $5 this week teaching',
    'You made $10 teaching this week',
  ];

  shuffle(teachingResponses);

  if (randomMsg === "You were sick and didn't teach this week") {
    message.innerHTML = randomMsg;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  } else if (randomMsg === 'You made $5 this week teaching') {
    message.innerHTML = randomMsg;
    money += 5;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  } else {
    message.innerHTML = randomMsg;
    money += 10;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  }
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/piano.jpg');
  fadeIn(img, 1000);
}

// higher ed function
function getEducated() {
  message.innerHTML = 'You were denied acceptance to the conservatory because you are black';
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/music-hall1.jpg');
  fadeIn(img, 1000);
}

// onclick options for main buttons

button1.onclick = goOnTour;
button2.onclick = getGigs;
button3.onclick = teaching;
button4.onclick = getEducated;

// home button
function goHome() {
  message.innerHTML = 'Welcome home!';
  earnings.innerHTML = `Total earnings: $ ${money}`;
  img.setAttribute('src', 'Resources/Educational-Games/A-Day-In-The-Life/images/new-york-cityscape.jpg');
  fadeIn(img, 1000);
  button1.innerHTML = 'Tour';
  button2.innerHTML = 'Local';
  button3.innerHTML = 'Teaching';
  button4.innerHTML = 'School';
  button1.onclick = goOnTour;
  button2.onclick = getGigs;
  button3.onclick = teaching;
  button4.onclick = getEducated;
}

home.onclick = goHome;

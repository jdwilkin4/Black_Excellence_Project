let money = 300;
let imgs = document.getElementById('imgs');
let message = document.getElementById('message');
const tour = document.getElementById('tour');
const gigs = document.getElementById('gigs');
const publishing = document.getElementById('publishing');
const education = document.getElementById('education');


//initialize the buttons with onclick functions
tour.onclick = goOnTour;
gigs.onclick = getGigs;
publishing.onclick = publish;
education.onclick = getEducated;

const locations = [
    {
        name:'Grand Concert Hall',
        'button text':['Rehearse', 'Perform', 'Negotiate Rates', 'Go Home'],
        'button functions' : [rehearse, perform, negotiate, home],
        text:'Welcome to Grand Concert Hall'
    }
]


const goOnTour = () => {
    
}

const getGigs = () => {
   message.innerText = "hi"
}

const publish = () => {

}

const getEducated = () => {
    
}

//concert hall functions
const rehearse = () => {

}

const perform = () => {

}

const negotiate = () => {

}

const home = () => {

}

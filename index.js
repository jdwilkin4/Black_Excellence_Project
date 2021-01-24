//main navigation menu
document.getElementById("navMenu").innerHTML = `
<nav class="nav-bar" id="mobile-nav">
    <a class="nav-links" href="#logo">BEMP</a>
    <a class="nav-links active" href="/index.html">Home</a>
    <a class="nav-links" href="/about.html">About</a>
    <a class="nav-links" href="/Composers/composers.html">Composers</a>
    <a class="nav-links" href="/Resources/resources.html">Resources</a>
    <a class="nav-links" href="/contact.html">Contact</a>
    <a href="javascript:void(0);" class="mobile-bars" onclick="mobileNav()">
        <i class="fas fa-bars"></i>
    </a>
</nav> 
`;


// mobile nav bar toggle

function mobileNav(){
    let toggleBar = document.getElementById("mobile-nav");
    if (toggleBar.className === "nav-bar") {
        toggleBar.className += "responsive";
    } else {
       toggleBar.className = "nav-bar"; 
    }

}

//fadin for homepage title
let el = document.getElementById("homeTitle");

function fadeIn(el, time) {
  el.style.opacity = 0;

  let last = +new Date();
  let tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el, 5000);


//footer
document.getElementById("footer").innerHTML = `
    <footer class="footer-container">
        <div class="footer-styles">
            <a class="footer-links" href="/about.html">About Us</a>
            <a class="footer-links" href="https://www.youtube.com/watch?v=FIWELCEBG0E&list=PLqHdMZJ08WM11cAx7YqdmvHb5YawvM0sq" target="_blank">Black Excellence Youtube Series</a>
        </div>
        
        <div class="footer-styles">
            <a class="footer-links" href="/Resources/Educational-Games/A-Day-In-The-Life/a-day-in-the-life.html">A day in the Life Game</a>
            <a class="footer-links" href="/Resources/Educational-Games/Memory-Game/Memory-game.html">Black Excellence Memory Game</a>
        </div>
        <a class="footer-links" href="/contact.html">Contact Us</a>
    </footer>
`
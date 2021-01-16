//main navigation menu
document.getElementById("navMenu").innerHTML = `
<nav class="nav-bar" id="mobile-nav">
<a class="nav-links" href="#logo">BEMP</a>
<a class="nav-links active" href="/index.html">Home</a>
<a class="nav-links" href="#about">About</a>
<a class="nav-links" href="/Composers/composers.html">Composers</a>
<a class="nav-links" href="/Resources/resources.html">Resources</a>
<a class="nav-links" href="#contact">Contact</a>
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
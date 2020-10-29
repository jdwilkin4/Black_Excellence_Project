//main navigation menu
const template = document.createElement('template');
template.innerHTML = `
<nav class="nav-bar" id="mobile-nav">
<a class="nav-links" href="#logo">BEP</a>
<a class="nav-links active" href="/index.html">Home</a>
<a class="nav-links" href="#about">About</a>
<a class="nav-links" href="#artists">Artists</a>
<a class="nav-links" href="#resources">Resources</a>
<a class="nav-links" href="#contact">Contact</a>
<a href="javascript:void(0);" class="mobile-bars" onclick="mobileNav()">
    <i class="fas fa-bars"></i>
</a>
</nav> 
`

document.body.appendChild(template.content);


// mobile nav bar toggle

function mobileNav(){
    let toggleBar = document.getElementById("mobile-nav");
    if (toggleBar.className === "nav-bar") {
        toggleBar.className += "responsive";
    } else {
       toggleBar.className = "nav-bar"; 
    }

}
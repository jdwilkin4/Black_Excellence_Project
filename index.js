// mobile nav bar toggle

function mobileNav(){
    let toggleBar = document.getElementById("mobile-nav");
    if (toggleBar.className === "nav-bar") {
        toggleBar.className += "responsive";
    } else {
       toggleBar.className = "nav-bar"; 
    }

}
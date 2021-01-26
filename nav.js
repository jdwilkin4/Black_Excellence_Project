//main navigation menu
document.getElementById("navMenu").innerHTML = `
<nav class="nav-bar" id="mobile-nav">
    <a class="nav-links" href="#logo">BEMP</a>
    <a class="nav-links" id='index-link' href="/index.html">Home</a>
    <a class="nav-links" id='about-link' href="/about.html">About</a>
    <a class="nav-links" id='composers-link' href="/Composers/composers.html">Composers</a>
    <a class="nav-links" id='resources-link' href="/Resources/resources.html">Resources</a>
    <a class="nav-links" id='contact-link' href="/contact.html">Contact</a>
</nav> 
`;
/**
 * Sets the active class on the nav link with an id matching
 * the given string
 * @param {String} fileName ID name to find (followed by `-link`) 
 */
const setActive = (fileName) => {
  const activeLink = document.getElementById(`${fileName}-link`);
  activeLink.classList.add("active");
};

/**
 * 
 * @param {String} filePath
 */
const determineNav = (filePath) => {
  console.log(filePath);
  if (filePath.includes("Composers")) {
    setActive('composers')
  }
  if (filePath.includes("Resources")) {
    setActive('resources')
  }
};

(() => {
  const location = window.location.pathname;
  const fileName = location.split("/").reverse()[0];
  const fileNameNoExtension = fileName.replace(".html", "");
  const activeLink = document.getElementById(`${fileNameNoExtension}-link`);
  activeLink ? activeLink.classList.add("active") : determineNav(location);
})();

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});

 // Get the current year
 const currentYear = new Date().getFullYear();

// Display the current year in the element with ID "current-year"
document.getElementById('currentyear').textContent = currentYear;

const lastModified= document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`
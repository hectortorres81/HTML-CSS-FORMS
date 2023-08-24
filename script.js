
function toggleMenu() {
    var menu = document.getElementById("menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}

// Get the menu icon element
var menuIcon = document.querySelector('.menu-icon');

// Add a click event listener to toggle the "active" class
menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
});

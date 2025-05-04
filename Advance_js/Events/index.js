// NAvbar toggle function
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Toggle dropdown on small screens
function toggleDropdown(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = e.target.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
}

// Hide nav-links when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('nav-links');
    const toggle = document.querySelector('.menu-toggle');

    const clickedInsideMenu = nav.contains(event.target);

    if (!clickedInsideMenu && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});



// Custom alert Box Functions
function showCustomAlert(message) {
    document.getElementById("alert-msg").textContent = message;
    document.getElementById("custom-alert").style.display = "flex";
    document.getElementById("alert-btn").focus();
}

function hideCustomAlert() {
    document.getElementById("custom-alert").style.display = "none";
}
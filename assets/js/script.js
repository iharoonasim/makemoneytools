// Passive Income Calculator
function calculateIncome() {
    const investment = document.getElementById('investment').value;
    const rate = document.getElementById('rate').value;
    const income = (investment * (rate / 100)).toFixed(2);

    document.getElementById('result').innerText = `Estimated yearly income: $${income}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (menuToggle && navMenu) {
        // Toggle menu on hamburger click
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active"); // Optional: animate icon
        });

        // Close menu when any link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }
});

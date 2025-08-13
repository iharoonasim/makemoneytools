// Passive Income Calculator
function calculateIncome() {
    const investment = document.getElementById('investment').value;
    const rate = document.getElementById('rate').value;
    const income = (investment * (rate / 100)).toFixed(2);

    document.getElementById('result').innerText = `Estimated yearly income: $${income}`;
}

// Auto Year in Footer
// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});

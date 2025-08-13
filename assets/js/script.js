// Passive Income Calculator
function calculateIncome() {
    const investment = document.getElementById('investment').value;
    const rate = document.getElementById('rate').value;
    const income = (investment * (rate / 100)).toFixed(2);

    document.getElementById('result').innerText = `Estimated yearly income: $${income}`;
}

// Auto Year in Footer
document.getElementById('year').innerText = new Date().getFullYear();
// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

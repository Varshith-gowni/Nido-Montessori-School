// Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-item").forEach(item => {
        item.addEventListener("click", () => {
            let answer = item.querySelector(".accordion-answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('open');
    });
});

function toggleMenu(){

const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const hamburger = document.querySelector(".hamburger");

menu.classList.toggle("active");
overlay.classList.toggle("active");
hamburger.classList.toggle("active");

}
function toggleMenu() {
    const menu = document.querySelector(".top-menu");
    menu.classList.toggle("active");
}
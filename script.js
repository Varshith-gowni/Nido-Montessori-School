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
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
document.addEventListener("DOMContentLoaded", function() {
    const donateBtn = document.getElementById("donateBtn");
    const donateModal = document.getElementById("donateModal");
    const closeBtn = document.getElementById("closeBtn");
    const donateForm = document.getElementById("donateForm");

    donateBtn.addEventListener("click", function() {
        donateModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        donateModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == donateModal) {
            donateModal.style.display = "none";
        }
    });

    donateForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const donationAmount = document.getElementById("donationAmount").value;
        alert("Thank you for your donation of $" + donationAmount + "!");
        donateModal.style.display = "none";
        donateForm.reset();
    });
});



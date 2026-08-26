// ================================
// AMAZRA COLLECTION JAVASCRIPT
// ================================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// CLOSE MOBILE MENU AFTER CLICKING LINK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// SHOP BUTTON

const shopButtons = document.querySelectorAll(".shop-btn");

shopButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Thank you for choosing AMAZRA Collection. Our store is coming soon!"
        );

    });

});


// CONTACT FORM

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for contacting AMAZRA Collection. We will get back to you soon."
    );

    contactForm.reset();

});
// ==============================
// MOBILE MENU
// ==============================

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


// Close menu after clicking a link

const navigationLinks = document.querySelectorAll("#navMenu a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


// ==============================
// SCROLL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


// ==============================
// MOUSE GLOW EFFECT
// ==============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "300px";
glow.style.height = "300px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle, rgba(100,220,255,0.08), transparent 65%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);


window.addEventListener("mousemove", function (event) {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
    "🚀 Akshay KS Portfolio loaded successfully!"
);
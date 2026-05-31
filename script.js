document.addEventListener("DOMContentLoaded", () => {

    /* ================= TYPING EFFECT ================= */

    const roles = [
        "Senior BI Developer",
        "Power BI Specialist",
        "Data Analyst",
        "Automation Engineer"
    ];

    const typingText = document.getElementById("typing-text");

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );
    }

    typeEffect();

    /* ================= SCROLL SPY ================= */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-link");

    function activateNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {
                currentSection =
                    section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener(
        "scroll",
        activateNav
    );

    activateNav();

});

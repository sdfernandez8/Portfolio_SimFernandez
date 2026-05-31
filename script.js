document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       TYPING EFFECT
    ========================== */

    const roles = [
        "Senior Business Intelligence Developer",
        "Power BI Specialist",
        "Reports Analyst",
        "Data Analyst",
        "Automation Developer"
    ];

    const typingText =
        document.getElementById("typing-text");

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingText) return;

        const current =
            roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                current.substring(
                    0,
                    charIndex++
                );

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typingText.textContent =
                current.substring(
                    0,
                    charIndex--
                );

            if (charIndex < 0) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) %
                    roles.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 45 : 85
        );
    }

    typeEffect();

    /* ==========================
       NAVIGATION ACTIVE STATE
    ========================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-link");

    function activateNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

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

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add(
                    "active"
                );
            }

        });

    }

    window.addEventListener(
        "scroll",
        activateNav
    );

    activateNav();

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements =
        document.querySelectorAll(
            ".section-container, .hero-card"
        );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ==========================
       PROJECT CAROUSEL
    ========================== */

    const track =
        document.querySelector(
            ".projects-track"
        );

    const leftArrow =
        document.querySelector(
            ".left-arrow"
        );

    const rightArrow =
        document.querySelector(
            ".right-arrow"
        );

    if (
        track &&
        leftArrow &&
        rightArrow
    ) {

        function getScrollAmount() {

            const projectPanel =
                document.querySelector(
                    ".project-panel"
                );

            if (!projectPanel)
                return 0;

            const gap = 30;

            return (
                projectPanel.offsetWidth +
                gap
            );

        }

        rightArrow.addEventListener(
            "click",
            () => {

                track.scrollBy({

                    left:
                        getScrollAmount(),

                    behavior: "smooth"

                });

            }
        );

        leftArrow.addEventListener(
            "click",
            () => {

                track.scrollBy({

                    left:
                        -getScrollAmount(),

                    behavior: "smooth"

                });

            }
        );

    }

    /* ==========================
       KEYBOARD SUPPORT
    ========================== */

    document.addEventListener(
        "keydown",
        e => {

            const track =
                document.querySelector(
                    ".projects-track"
                );

            if (!track) return;

            const amount =
                document.querySelector(
                    ".project-panel"
                )?.offsetWidth || 0;

            if (
                e.key === "ArrowRight"
            ) {

                track.scrollBy({

                    left: amount + 30,

                    behavior: "smooth"

                });

            }

            if (
                e.key === "ArrowLeft"
            ) {

                track.scrollBy({

                    left:
                        -(amount + 30),

                    behavior: "smooth"

                });

            }

        }
    );

    /* ==========================
       TIMELINE FADE-IN
    ========================== */

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );

    const timelineObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    timelineItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(40px)";

        item.style.transition =
            "0.7s ease";

        timelineObserver.observe(item);

    });

});

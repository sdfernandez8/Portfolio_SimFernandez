document.addEventListener("DOMContentLoaded", () => {

    // Typing effect (Netflix intro style)
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

            typingText.textContent = current.substring(0, charIndex++);
            
            if (charIndex > current.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingText.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, deleting ? 50 : 90);
    }

    typeEffect();

});
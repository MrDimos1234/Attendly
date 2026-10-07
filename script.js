const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {
    button.addEventListener("click", () => {
        const original = button.innerHTML;

        button.innerHTML = `
            <span class="download-icon">✓</span>
            <span>Starting download...</span>
        `;

        setTimeout(() => {
            button.innerHTML = original;
        }, 1800);
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".feature-card, .cta").forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(element);
});

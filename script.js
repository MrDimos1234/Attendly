document.addEventListener("DOMContentLoaded", () => {

    const downloadButtons = document.querySelectorAll(".download-button");

    downloadButtons.forEach(button => {
        button.addEventListener("click", () => {
            const original = button.innerHTML;

            button.innerHTML = `
                <span class="download-symbol">✓</span>
                <span>
                    <small>Starting</small>
                    Download...
                </span>
            `;

            setTimeout(() => {
                button.innerHTML = original;
            }, 1800);
        });
    });


    const revealItems = document.querySelectorAll(
        ".feature, .download-card, .app-preview"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        item.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(item);
    });


    const style = document.createElement("style");

    style.textContent = `
        .feature.visible,
        .download-card.visible,
        .app-preview.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);

});

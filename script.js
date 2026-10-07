document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".hero > *, .statement, .features > div, .final > *"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 60}ms`;
        observer.observe(element);
    });

    document.querySelectorAll(".download").forEach(button => {
        button.addEventListener("click", () => {
            const original = button.innerHTML;

            button.innerHTML = `
                <span class="download-icon">✓</span>
                <span>
                    <small>STARTING DOWNLOAD</small>
                    Downloading...
                </span>
            `;

            setTimeout(() => {
                button.innerHTML = original;
            }, 1800);
        });
    });
});

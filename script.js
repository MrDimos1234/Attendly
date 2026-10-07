document.addEventListener("DOMContentLoaded", () => {
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

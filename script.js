document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".download").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const original = button.innerHTML;
            const url = button.href;

            button.innerHTML = `
                <span class="download-icon">✓</span>
                <span>
                    <small>STARTING DOWNLOAD</small>
                    Downloading...
                </span>
            `;

            // Create a fresh download request every time
            const link = document.createElement("a");
            link.href = url + "?download=" + Date.now();
            link.download = "Attendly.apk";
            document.body.appendChild(link);
            link.click();
            link.remove();

            setTimeout(() => {
                button.innerHTML = original;
            }, 1800);
        });
    });
});

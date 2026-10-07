const downloadButtons = [
    document.getElementById("downloadBtn"),
    document.getElementById("downloadBtn2")
];

downloadButtons.forEach(button => {
    if (!button) return;

    button.addEventListener("click", () => {
        button.classList.add("downloading");

        setTimeout(() => {
            button.classList.remove("downloading");
        }, 700);
    });
});

const version = document.getElementById("version");

if (version) {
    version.textContent = "Latest Android release • APK";
}

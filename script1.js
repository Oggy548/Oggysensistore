document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // Set a temporary flag in localStorage
        localStorage.setItem("showSuccess", "true");
        // Redirect back to ioscodes.html
        window.location = "ioscodes.html";
    }, 3000);
});

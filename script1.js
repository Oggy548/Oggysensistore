document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // Set a temporary flag in sessionStorage
        sessionStorage.setItem("showSuccess", "true");
        // Redirect back to ioscodes.html
        window.location = "ioscodes.html";
    }, 3000);
});

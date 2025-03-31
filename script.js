document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedText = document.getElementById("animated-home");

    function animateText(newText) {
        animatedText.classList.remove("show"); // Start fade-out
        setTimeout(() => {
            animatedText.textContent = newText; // Change text after fade-out
            animatedText.classList.add("show"); // Start fade-in
        }, 300); // Adjust this delay to match the CSS transition time
    }

    automateBtn.addEventListener("click", function (event) {
        event.preventDefault();
        animateText("Unlock efficiency with AI-driven automation!");
    });

    optimizeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        animateText("Streamline workflows for maximum productivity!");
    });
});

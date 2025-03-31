document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedText = document.getElementById("animated-home");

    function animateText(text) {
        animatedText.classList.remove("show"); // Reset animation
        void animatedText.offsetWidth; // Reflow hack
        animatedText.textContent = text;
        animatedText.classList.add("show");
    }

    automateBtn.addEventListener("click", function () {
        animateText("Unlock efficiency with AI-driven automation!");
    });

    optimizeBtn.addEventListener("click", function () {
        animateText("Streamline workflows for maximum productivity!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedText = document.getElementById("animated-text");

    automateBtn.addEventListener("click", function (e) {
        e.preventDefault();
        animatedText.textContent = "Unlock efficiency with AI-driven automation!";
        animatedText.classList.add("show");
    });

    optimizeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        animatedText.textContent = "Streamline workflows for maximum productivity!";
        animatedText.classList.add("show");
    });
});

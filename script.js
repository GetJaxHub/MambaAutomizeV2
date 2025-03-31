document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedText = document.getElementById("animated-home");

    function animateText(element, newText) {
        if (!element) return; // Prevent errors if the element is missing

        element.classList.remove("show"); // Start fade-out
        setTimeout(() => {
            element.textContent = newText; // Change text after fade-out
            element.classList.add("show"); // Start fade-in
        }, 300); // Adjust delay to match CSS transition time
    }

    automateBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedText, "Unlock efficiency with process or AI-driven automation!");
    });

    optimizeBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedText, "Streamline workflows for maximum productivity with our process improvement or custom solutions tailored to fit for your business!");
    });

});

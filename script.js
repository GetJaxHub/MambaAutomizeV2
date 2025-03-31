document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedHomeText = document.getElementById("animated-home");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const emailBtn = document.getElementById("email-btn");
    const animatedContactText = document.getElementById("animated-contact");

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
        animateText(animatedHomeText, "Unlock efficiency with process or AI-driven automation!");
    });

    optimizeBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedHomeText, "Streamline workflows for maximum productivity with our process improvement or custom solutions tailored to fit your business!");
    });

    whatsappBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedContactText, "+63923-7341224");
    });

    emailBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedContactText, "Jakyz.Mamba@mambaautomize.com");
    });

});

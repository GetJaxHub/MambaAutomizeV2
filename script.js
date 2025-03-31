document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedText = document.getElementById("animated-home");
    const missionBtn = document.getElementById("mission-btn"); // Fix: Lowercase 'm'
    const animatedAbout = document.getElementById("animated-about");

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
        animateText(animatedText, "Streamline workflows for maximum productivity with our process improvement or custom solutions tailored to fit your business!");
    });

    missionBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedAbout, "We, at MambaAutomize, are on a mission to help businesses streamline operations, reduce costs, and improve efficiency through tailored automation and process improvement solutions. Let us help you unlock your business’s full potential.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const automateBtn = document.getElementById("automate-btn");
    const optimizeBtn = document.getElementById("optimize-btn");
    const animatedHomeText = document.getElementById("animated-home");
    const whatsappBtn = document.getElementById("whatsapp-btn");
    const emailBtn = document.getElementById("email-btn");
    const animatedContactText = document.getElementById("animated-contact");
    const animatedServiceText = document.getElementById("animated-services");
    const serviceBtn1 = document.getElementById("service1-btn");
    const serviceBtn2 = document.getElementById("service2-btn");
    const serviceBtn3 = document.getElementById("service3-btn");
    const serviceBtn4 = document.getElementById("service4-btn");
    const serviceBtn5 = document.getElementById("service5-btn");

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
        animateText(animatedContactText, "Jakyz.Mamba@MambaAutomize.com");
    });

    serviceBtn1?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedServiceText, "Streamline your workflows with our business process automation solutions. Reduce manual effort, minimize human errors, and free up valuable resources. Tailored strategies to fit your unique business needs.");
    });
    serviceBtn2?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedServiceText, "Identify inefficiencies and optimize your processes with our expert consulting services. Achieve measurable results and enhance overall productivity. Collaborative approach for lasting improvements.");
    });
    serviceBtn3?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedServiceText, "Our website creation services help businesses build a strong online presence with custom design, SEO optimization, and secure hosting. We deliver functional, responsive websites that enhance user experience and drive business growth.");
    });
    serviceBtn4?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedServiceText, "Our IT training and support services help you maximize the value of your technology investments. We offer a range of services, including end-user training, technical support, and software training to help you get the most from your technology.");
    });
    serviceBtn5?.addEventListener("click", function (event) {
        event.preventDefault();
        animateText(animatedServiceText, "We understand that every business is unique. Our custom solutions are designed to address your specific challenges and opportunities. Maximize efficiency and achieve your strategic objectives.");
    });
});

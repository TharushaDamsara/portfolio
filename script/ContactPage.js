// Smooth Scroll to Section on Button Click
document.getElementById("skillsBtn").addEventListener("click", function () {
    document.getElementById("skills").scrollIntoView({behavior: "smooth"});
});
document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});

document.getElementById("workBtn").addEventListener("click", function () {
    document.getElementById("work").scrollIntoView({behavior: "smooth"});
});

document.getElementById("aboutBtn").addEventListener("click", function () {
    window.location.href = "AboutPage.html";
});

document.getElementById("workBtn").addEventListener("click", function () {
    window.location.href = "Workpage.html";
});
document.getElementById("skillsBtn").addEventListener("click", function () {
    window.location.href = "SkillPage.html";
});

// Initialize EmailJS
(function() {
    emailjs.init("P9PjolI5zZf2lu9nC"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Send form data using EmailJS
        emailjs.sendForm("service_cb0lems", "template_9lg962f", this)
            .then(function () {
                alert("Message sent successfully!");
                form.reset(); // clear the form
            }, function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});



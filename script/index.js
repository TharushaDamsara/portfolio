// Smooth Scroll to Section on Button Click
document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("workBtn").addEventListener("click", function() {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("skillsBtn").addEventListener("click", function() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutBtn").addEventListener("click", function() {
    window.location.href = "./pages/AboutPage.html";
});

document.getElementById("workBtn").addEventListener("click", function() {
    window.location.href = "./pages/Workpage.html";
});

document.getElementById("contactBtn").addEventListener("click", function() {
    window.location.href = "./pages/ContactPage.html";
});
document.getElementById("skillsBtn").addEventListener("click", function() {
    window.location.href = "./pages/SkillPage.html";
});

// Smooth Scroll to Section on Button Click
document.getElementById("skillsBtn").addEventListener("click", function() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("workBtn").addEventListener("click", function() {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("skillsBtn").addEventListener("click", function() {
    window.location.href = "SkillPage.html";
});

document.getElementById("workBtn").addEventListener("click", function() {
    window.location.href = "Workpage.html";
});

document.getElementById("contactBtn").addEventListener("click", function() {
    window.location.href = "ContactPage.html";
});

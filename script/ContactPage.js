// Smooth Scroll to Section on Button Click
document.getElementById("skillsBtn").addEventListener("click", function() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("workBtn").addEventListener("click", function() {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("aboutBtn").addEventListener("click", function() {
    window.location.href = "AboutPage.html";
});

document.getElementById("workBtn").addEventListener("click", function() {
    window.location.href = "Workpage.html";
});
document.getElementById("skillsBtn").addEventListener("click", function() {
    window.location.href = "SkillPage.html";
});

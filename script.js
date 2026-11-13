document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section");
const toggleBtn = document.getElementById("toggle-btn");
const icon = toggleBtn.querySelector("i");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});
// Load mode from localStorage
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  document.body.classList.toggle("dark", isDark);
  icon.className = isDark ? "ri-bard-line" : "ri-moon-clear-line";

toggleBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark");
        const isDarkNow = document.body.classList.contains("dark");
        icon.className = isDarkNow ? "ri-bard-line" : "ri-moon-clear-line";
        localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    })
})
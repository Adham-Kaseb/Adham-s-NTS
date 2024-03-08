const mainContent = document.getElementById("mainContent");
const i = document.getElementById("i");

i.addEventListener("mouseenter", function () {
  mainContent.style.opacity = "0";
});

i.addEventListener("mouseleave", function () {
  mainContent.style.opacity = "1";
});

var titles = document.querySelectorAll("h2");
var icons = document.querySelectorAll(".collapse_clicker");

// Iterate through each title
titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    var icon = icons[index];
    // Toggle rotation
    icon.style.transform = icon.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.preloader').style.display = 'none';
  }, 2000); 
});

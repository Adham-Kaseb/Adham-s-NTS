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
  // Add click event listener to each title
  title.addEventListener("click", () => {
    // Get the corresponding icon for the clicked title
    var icon = icons[index];
    // Toggle rotation
    icon.style.transform = icon.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
  });
});
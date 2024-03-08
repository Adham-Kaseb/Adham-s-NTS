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
    icon.style.transform =
      icon.style.transform === "rotate(90deg)"
        ? "rotate(0deg)"
        : "rotate(90deg)";
  });
});

setTimeout(function () {
  document.querySelector(".preloader").style.display = "none";
}, 2600);








// editor related area
const ed_link1 = document.querySelector(".ed_link1");
const content = document.querySelectorAll(".content");

const ed_link2 = document.querySelector(".ed_link2");
const editor_related_mustRead = document.querySelector(".editor_related_mustRead");

const ed_link3 = document.querySelector(".ed_link3");
const editor_related_contact = document.querySelector(".editor_related_contact");

ed_link1.addEventListener("click", function() {
  content.style.height = "100%";
  editor_related_mustRead.style.height = "0px";
  editor_related_mustRead.style.left = "-150%";
  editor_related_contact.style.height = "0px";
  editor_related_contact.style.left = "-150%";
});

ed_link2.addEventListener("click", function() {
  editor_related_mustRead.style.height = "100%";
  editor_related_mustRead.style.left = "0";
  editor_related_contact.style.height = "0px";
  editor_related_contact.style.left = "-150%";
  content.style.height = "0px !important";
  content.style.left = "-150%";
});

ed_link3.addEventListener("click", function() {
  editor_related_contact.style.height = "100%";
  editor_related_contact.style.left = "0";
  editor_related_mustRead.style.height = "0px";
  editor_related_mustRead.style.left = "-150%";
  content.style.height = "0px";
  content.style.left = "-150%";
});

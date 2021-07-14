let body = document.body;
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem("currentTheme");

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  if (currentTheme) {
    body.classList.add("dark-theme");
  }
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

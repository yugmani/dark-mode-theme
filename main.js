const switchButton = document.getElementById("switch");

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  switchButton.classList.toggle("active");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

if (localStorage.getItem("darkMode") == "enabled") {
  document.body.classList.toggle("dark");
  switchButton.classList.toggle("active");
  // workContainer.classList.toggle("dark");
}

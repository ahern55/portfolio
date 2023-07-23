(function initTheme() {
  var theme = localStorage.colorTheme || "light";

  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();

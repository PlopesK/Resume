let dark;
window.addEventListener("DOMContentLoaded", function (event) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    changeTheme();
  }
});

function changeTheme() {
  if (!dark) {
    dark = true;
    localStorage.setItem("theme", "dark");

    document.documentElement.style.setProperty("--Page", "darkslategray");
    document.documentElement.style.setProperty("--Section", "#111919");
    document.documentElement.style.setProperty("--Text", "white");
    document.documentElement.style.setProperty("--Dark", "rgb(228, 228, 228)");
    document.documentElement.style.setProperty("--Link", "black");
    document.documentElement.style.setProperty("--Footer", "#093737");
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");
  } else {
    dark = false;
    localStorage.setItem("theme", "white");

    document.documentElement.style.setProperty("--Page", "rgb(228, 228, 228)");
    document.documentElement.style.setProperty("--Section", "white");
    document.documentElement.style.setProperty("--Text", "black");
    document.documentElement.style.setProperty("--Dark", "darkslategray");
    document.documentElement.style.setProperty("--Link", "white");
    document.documentElement.style.setProperty("--Footer", "darkcyan");
    document.getElementById("icon").classList.remove("fa-sun");
    document.getElementById("icon").classList.add("fa-moon");
  }
}

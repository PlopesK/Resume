const savedTheme = localStorage.getItem("theme");
let dark;
function changeTheme() {
  if (!dark) {
    dark = true;
    localStorage.setItem("theme", "dark");

    document.documentElement.style.setProperty("--Page", "darkslategray");
    document.documentElement.style.setProperty("--Section", "#111919");
    document.documentElement.style.setProperty("--Text", "white");
    document.documentElement.style.setProperty("--Dark", "rgb(228, 228, 228)");
    document.documentElement.style.setProperty("--Link", "black");
    document.getElementById("icon");
  } else {
    dark = false;
    localStorage.setItem("theme", "white");

    document.documentElement.style.setProperty("--Page", "rgb(228, 228, 228)");
    document.documentElement.style.setProperty("--Section", "white");
    document.documentElement.style.setProperty("--Text", "black");
    document.documentElement.style.setProperty("--Dark", "darkslategray");
    document.documentElement.style.setProperty("--Link", "white");
  }
}

import { navigate } from "./router.js";
import Navbar from "./components/Navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  navigate("/");

  document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {
    new Navbar();
  });
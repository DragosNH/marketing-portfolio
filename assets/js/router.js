import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import LogoProject from "./pages/LogoProject.js";
import Pej from "./pages/pej.js";
import Lingva from "./pages/Lingva.js";

const routes = {
  "/": Home,
  "/about": About,
  "/projects": Projects,
  // --- Projects ---
  "/logoProject": LogoProject,
  "/pej" : Pej,
  "/lingva": Lingva,
  
};

export function navigate(path) {
  const PageClass = routes[path];
  const page = new PageClass();

  document.querySelector("#app").innerHTML = page.render();
  page.afterRender();
}

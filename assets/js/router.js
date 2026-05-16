import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import LogoProject from "./pages/logo-project.js";

const routes = {
  "/": Home,
  "/about": About,
  "/projects": Projects,
  "/logoProject": LogoProject,
};

export function navigate(path) {
  const PageClass = routes[path];
  const page = new PageClass();

  document.querySelector("#app").innerHTML = page.render();
  page.afterRender();
}

export default class Home {
  constructor() {
    this.title = "Home";
  }

  render() {
    return `
      <section class="home">
        <h1>Welcome</h1>
        <p>I am a marketing assistant specializing in...</p>
      </section>
    `;
  }

  afterRender() {
    const menuArrow = document.querySelector(".menu-arrow");
    const menuContainer = document.querySelector(".menu-container");

    menuArrow.addEventListener("click", () => {
      if(menuContainer.style.width < "1vw"){
        menuContainer.style.width = "100vw"
      }
    });
  }
}

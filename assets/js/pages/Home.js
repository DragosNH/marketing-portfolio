export default class Home {
  constructor() {
    this.title = "Home";
  }

  render() {
    return `
      <section class="home">
        <div class="logo"><img src="assets/images/logo.webp" class="logo-img" alt="logo" /></div>
        <div class="info"> 
          <h1 class="home-title">Dragoş ENACHE</h1>
          <p class="home-txt">Apprenti en Marketing Digital & Webdesign</p>
        </div>
      </section>
    `;
  }

  afterRender() {

  }
}

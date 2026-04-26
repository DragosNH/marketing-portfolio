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
      
  }
}

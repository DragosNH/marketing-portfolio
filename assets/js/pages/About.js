export default class About {
  constructor() {
    this.title = "About Me";
  }

  render() {
    return `
      <section class="about">
        <h1>About Me</h1>
        <p>I am a marketing assistant specializing in...</p>
      </section>
    `;
  }

  afterRender() {
    // Add animations, event listeners, etc.
  }
}

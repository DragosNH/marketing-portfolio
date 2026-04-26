export default class Home {
  constructor() {
    this.title = "Projects";
  }

  render() {
    return `
      <section class="projects">
        <h1>Projects</h1>
        <p>Here is a list of my projects...</p>
      </section>
    `;
  }

  afterRender() {
    // Add animations, event listeners, etc.
  }
}

export default class Home {
  constructor() {
    this.title = "Projects";
  }

  render() {
    return `
      <section class="projects">
        <h1>Projects</h1>
        <p>Here is a list of my projects...</p>
        <!---
        <div class="scroll-item">Item 1</div>
        <div class="scroll-item">Item 2</div>
        <div class="scroll-item">Item 3</div>
        <div class="scroll-item">Item 4</div>
        --->
      </section>
    `;
  }

  afterRender() {
    // Add animations, event listeners, etc.
  }
}

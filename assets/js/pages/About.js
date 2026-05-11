export default class About {
  constructor() {
    this.title = "About Me";
  }

  render() {
    return `
      <section class="about">
      <!-- --------- Presentation ---------  -->
        <div class="presentation">
          <h1 class="about-title">À propos</h1>
          <p class="about-txt">Passionné par le développement web et le graphisme, je recherche une alternance en marketing digital afin de mettre mes compétences au service de projets créatifs et innovants.</p>
        </div>
      <!-- --------- Coding Skills ---------  -->
        <div class="coding-skills">
          <h2 class="sub-title">Competences web</h2>
        </div>

      </section>
    `;
  }

  afterRender() {
    // Add animations, event listeners, etc.
  }
}

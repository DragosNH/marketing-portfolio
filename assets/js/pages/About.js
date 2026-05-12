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
      <!-- --------- graphic Skills ---------  -->
        <div class="graphic-skills">
          <h2 class="sub-title">Competences logiciels graphiques</h2>
          <div class="icons">
            <img src="../../../assets/images/graphics/Photoshop.png" alt="Photoshop Logo" class="icon" />
            <img src="../../../assets/images/graphics/Illustrator.png" alt="Illustrator Logo" class="icon" />
            <img src="../../../assets/images/graphics/InDesign.png" alt="InDesign Logo" class="icon" />
            <img src="../../../assets/images/graphics/premiere-pro.png" alt="Premiere Pro Logo" class="icon" />
            <img src="../../../assets/images/graphics/figma.png" alt="Figma Logo" class="icon" />
            <img src="../../../assets/images/graphics/Photo.png" alt="Affinity Photo Logo" class="icon" />
            <img src="../../../assets/images/graphics/Designer.png" alt="Affinity Designer Logo" class="icon" />
            <img src="../../../assets/images/graphics/Publisher.png" alt="Affinity Publisher Logo" class="icon" />
            <img src="../../../assets/images/graphics/Clip_Studio_Paint.png" alt="Clip Studio Paint Logo" class="icon" />

          </div>
        </div>

      </section>
    `;
  }

  afterRender() {
    const icons = document.querySelectorAll(".icon");
    icons[0].style.marginLeft = "0px";

    icons.forEach(icon => {
      icon.addEventListener("mouseover", () => {
        const currentWidth = parseInt(window.getComputedStyle(icon).width);
        const currentMargin = parseInt(window.getComputedStyle(icon).margin);
        icon.style.width = currentWidth + 10 + "px";
        icon.style.margin = currentMargin - 5 + "px";
        icons[0].style.marginLeft = "0px";
      });

      icon.addEventListener("mouseout", () => {
        const originalWidth = parseInt(window.getComputedStyle(icon).width);
        const originalMargin = parseInt(window.getComputedStyle(icon).margin);
        icon.style.width = originalWidth - 10 + "px";
        icon.style.margin = originalMargin + 5 + "px";
        icons[0].style.marginLeft = "0px";
      });
    });



  }
}

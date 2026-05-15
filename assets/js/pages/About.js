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
        <br /><br />
        
      <!-- --------- Graphic Skills ---------  -->
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
        <br /><br />

      <!-- --------- Coding Skills ---------  -->
        <h2 class="sub-title">Competences languages de code</h2>
        <div class="icons">
          <img src="../../../assets/images/coding/html.png" alt="HTML5 Logo" class="icon" />
          <img src="../../../assets/images/coding/css3.png" alt="CSS3 Logo" class="icon" />
          <img src="../../../assets/images/coding/javascript.png" alt="JavaScript Logo" class="icon" />
          <img src="../../../assets/images/coding/react.png" alt="React.js Logo" class="icon" />
          <img src="../../../assets/images/coding/three.png" alt="Three.js Logo" class="icon" />
          <img src="../../../assets/images/coding/python.png" alt="Python Logo" class="icon" />
          <img src="../../../assets/images/coding/django.png" alt="Django Logo" class="icon" />
          <img src="../../../assets/images/coding/c.png" alt="C sharp Logo" class="icon" />
          <img src="../../../assets/images/coding/unity.png" alt="Unity Logo" class="icon" />
        </div>
        <br /><br />

      <!-- --------- Languages ---------  -->
      <h2 class="sub-title">Langues</h2>
      <div class="languages">
        <p><strong>Roumain</strong> (Langue maternelle)</p>
        <p><strong>Anglais</strong> (Courant)</p>
        <p><strong>Alleman</strong> (Bases)</p>
      </div>
      <br /><br />

      <!-- --------- Languages ---------  -->
      <h2 class="diplomas">Diplomes</h2>
      <h3>Titre pro (bac + 2) Développement web et web mobile — Greta Alsace Sud - Mulhouse</h3>
      <h3>Licence (bac + 3) Développement aplications orientée objet — Serfa - Mulhouse</h3>

      </section>
    `;
  }

  afterRender() {
    const icons = document.querySelectorAll(".icon");
    icons[0].style.marginLeft = "0px";
    icons[9].style.marginLeft = "0px";
    
    icons.forEach(icon => {
      icon.addEventListener("mouseover", () => {
        const currentWidth = parseInt(window.getComputedStyle(icon).width);
        const currentMargin = parseInt(window.getComputedStyle(icon).margin);
        icon.style.width = currentWidth + 10 + "px";
        icon.style.margin = currentMargin - 5 + "px";
      });

      icon.addEventListener("mouseout", () => {
        const originalWidth = parseInt(window.getComputedStyle(icon).width);
        const originalMargin = parseInt(window.getComputedStyle(icon).margin);
        icon.style.width = originalWidth - 10 + "px";
        icon.style.margin = originalMargin + 5 + "px";
        icons[0].style.marginLeft = "0px";
        icons[9].style.marginLeft = "0px";
      });
    });

  }
}

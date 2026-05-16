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

      <!-- --------- Skills ---------  -->

        <div class="skills">
          <h2 class="sub-title">Competences</h2>
          <ul>
            <li class="skill">Mise en page WordPress.</li>
            <li class="skill">Gestion des réseaux sociaux.</li>
            <li class="skill">Conception d'identités visuelles.</li>
            <li class="skill">Création de contenu visuel et digital.</li>
            <li class="skill">Conception des sites web & applications mobiles.</li>
            <li class="skill">Mise en page pour supports digitaux et imprimés.</li>
          </ul>
        </div>
        <br /><br />

      <!-- --------- Graphic Skills ---------  -->
        <div class="graphic-skills">
          <h2 class="sub-title">Competences logiciels graphiques</h2>
          <div class="icons">
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Photoshop.png" alt="Photoshop Logo" class="icon" />
              <p>Photoshop</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Illustrator.png" alt="Illustrator Logo" class="icon" />
              <p>Illustrator</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/InDesign.png" alt="InDesign Logo" class="icon" />
              <p>InDesign</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/premiere-pro.png" alt="Premiere Pro Logo" class="icon" />
              <p>Premiere Pro</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/figma.png" alt="Figma Logo" class="icon" />
              <p>Figma</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Photo.png" alt="Affinity Photo Logo" class="icon" />
              <p>Photo</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Designer.png" alt="Affinity Designer Logo" class="icon" />
              <p>Designer</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Publisher.png" alt="Affinity Publisher Logo" class="icon" />
              <p>Publisher</p>
            </div>
            <div class="icon-cont">
              <img src="../../../assets/images/graphics/Clip_Studio_Paint.png" alt="Clip Studio Paint Logo" class="icon" />
              <p>Clip Studio</p>
            </div>
          </div>
        </div>
        <br /><br />

      <!-- --------- Coding Skills ---------  -->
        <h2 class="sub-title">Competences languages de code</h2>
        <div class="icons">
          <div class="icon-cont">
            <img src="../../../assets/images/coding/html.png" alt="HTML5 Logo" class="icon" />
            <p>HTML</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/css3.png" alt="CSS3 Logo" class="icon" />
            <p>CSS</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/javascript.png" alt="JavaScript Logo" class="icon" />
            <p>JavaScript</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/react.png" alt="React.js Logo" class="icon" />
            <p>React.js</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/three.png" alt="Three.js Logo" class="icon" />
            <p>Three.js</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/python.png" alt="Python Logo" class="icon" />
            <p>Python</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/django.png" alt="Django Logo" class="icon" />
            <p>Django</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/c.png" alt="C sharp Logo" class="icon" />
            <p>C#</p>
          </div>
          <div class="icon-cont">
            <img src="../../../assets/images/coding/unity.png" alt="Unity Logo" class="icon" />
            <p>Unity</p>
          </div>
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
      <br /><br />

      <!-- --------- Hobbies ---------  -->
        <h2 class="hobbies">Loisirs</h2>
        <p><strong>Dessin :</strong> Conception d'un <a href="https://www.webtoons.com/en/canvas/humphreys-adventures/list?title_no=1077129" target="_blank">Webtoon</a>.</p>
        <p><strong>Sport :</strong> Entraînement à la salle trois fois par semaine.</p>
        <p><strong>Lecture :</strong> Passionné par l'univers de la fantasy.</p>
      </section>
    `;
  }

  afterRender() {
    const icons = document.querySelectorAll(".icon");
    
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
      });
    });

  }
}

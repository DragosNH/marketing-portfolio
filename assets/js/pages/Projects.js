export default class Home {
  constructor() {
    this.title = "Projects";
  }

  render() {
    return `
      <section class="projects">
        <h1>Mes projets</h1>

        <!-- My Logo -->
        <div class="scroll-item project-container">
          <h2 class="project-subtitle">Le logo actuel</h2>
          <div class="content">
              <img src="../../assets/images/logo.webp" class="project-img" />
              <div class="project-txts">
                <p class="project-txt">Le logo réprésent les initialles de mon prénom dans une façon abstracte.</p>
                <a href="/logoProject" data-link>Plus d'info ici.</a>
              </div>
            </div>
        </div>

        <!-- Pej -->
        <div class="scroll-item">
          <h2 class="project-subtitle">Patrimoine en jeu</h2>
          <div class="content">
            <img src="../../assets/images/pej-logo.png" class="project-img" />
            <div class="project-txts">
              <p class="project-txt">Ici ca se trouve tout ce que j'ai fait pendant mon stage effectuée dans le cadre de ma licence. Une aplication mobile, un site web mais aussi des affiches.</p>
              <a href="/pej" data-link>Plus d'infos ici.</a>
            </div>
           </div>
        </div>

      <!-- Lingva -->
        <div class="scroll-item">
        <h2 class="project-subtitle">Lingva</h2>
          <div class="content">
            <img src="../../assets/images/lingva/lingva_logo.webp" alt="Lingva Logo" class="project-img" />
            <div class="project-txts">
              <p class="project-txt">Ceci est un projet réalisé pendant ma licence, dans le cadre du cours d'anglais. Nous avons dû élaborer une stratégie de développement et de marketing pour une application d'apprentissage des langues, style Duolingo.</p>
              <a href="/lingva" data-link>Plus d'infos ici.</a>
            </div>
           </div>
        </div>

        <!-- <div class="scroll-item">Item 4</div> -->

      </section>
    `;
  }

  afterRender() {
    const items = document.querySelectorAll(".scroll-item");

    // Assign alternating directions
    items.forEach((item, index) => {
      item.classList.add(index % 2 === 0 ? "from-left" : "from-right");
    });

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => revealObserver.observe(item));

    // Parallax effect
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      items.forEach((item) => {
        const speed = item.dataset.speed || 0.5; // default parallax speed
        const offset = scrollY * speed;

        // Only apply parallax BEFORE reveal
        if (!item.classList.contains("show")) {
          item.style.transform += ` translateY(${offset}px)`;
        }
      });
    });

  }
}

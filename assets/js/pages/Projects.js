export default class Home {
  constructor() {
    this.title = "Projects";
  }

  render() {
    return `
      <section class="projects">
        <h1>Mes projets</h1>

        <div class="scroll-item project-container">
          <h2 class="project-subtitle">Le logo actuel</h2>
          <div class="content">
            <img src="../../assets/images/logo.webp" class="project-img" />
            <div class="project-txt">
              <p class="project-txt">La forme de logo represent mes initialles dans une façon abstracte.</p>
              <a href="#">Plus d'info ici.</a>
            </div>
          </div>
        </div>
        <div class="scroll-item">Item 2</div>
        <div class="scroll-item">Item 3</div>
        <div class="scroll-item">Item 4</div>

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
        const speed = item.dataset.speed || 0.2; // default parallax speed
        const offset = scrollY * speed;

        // Only apply parallax BEFORE reveal
        if (!item.classList.contains("show")) {
          item.style.transform += ` translateY(${offset}px)`;
        }
      });
    });

  }
}

export default class Pej {
    constructor() {
        this.title = "PEJ";
    }

    render() {
        return `
            <section class="pej">
                <h1>Patrimoine en jeu</h1>
                <br />

                <section>
                    <h2>Le projet</h2>
                    <p>Pendant mon stage chez Push Architecture, j’ai réalisé plusieurs projets sur une période d’environ trois mois, tels que :</p>
                    <ul>
                        <li>Une application mobile basée sur la réalité virtuelle.</li>
                        <li>Un site web sous WordPress pour présenter l’association « Patrimoine en jeu » et l’application.</li>
                        <li>L’identité visuelle de l’application et du site web.</li>
                        <li>Une affiche destinée à présenter l’association lors de l’assemblée générale de <a href="https://www.asma.fr" target="_blank">l’ASMA</a>.</li>
                    </ul>
                </section>
                <br /><br />

                <section>
                    <h2>Le logo</h2>
                    <div class="display-flex">
                        <img src="../../assets/images/pej-logo.png" alt="Logo Patrimoine en jeu" class="project-img" />
                        <p>Ce logo est très minimaliste, mais il contient les lettres « P » et « J » intégrées dans un carré.</p>
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>L’application mobile</h2>
                    <div class="display-flex">
                        <p>
                            L’application a pour but de faire revivre le patrimoine alsacien grâce à la réalité augmentée. 
                            À partir de modèles 3D réalisés dans SketchUp, je les ai intégrés dans Unity, puis j’ai développé les interactions en C#. 
                            J’ai ensuite créé le backend en Django avec une base de données PostgreSQL. 
                            L’application permet de faire réapparaître les bâtiments à leur emplacement d’origine en utilisant les coordonnées GPS du téléphone. 
                            La version réalisée est une démo, et l’association recherche actuellement des sponsors afin de finaliser l’application et de l’intégrer à <a href="https://glad.bretagne.bzh/" target="_blank">GLAD</a>, avec qui elle est en partenariat.
                        </p>
                        <img src="../../assets/images/ar.gif" alt="Aperçu de l'application en réalité augmentée" class="project-img" />
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>Le site web</h2>
                    <p>
                        Pour le site web de l’association « Patrimoine en jeu », je l’ai réalisé avec une mise en page WordPress, 
                        sur le thème « Twenty Twenty‑Three », afin de présenter l’association, ses projets de restitution de bâtiments alsaciens, 
                        ainsi que l’application mobile.  
                        Le site peut être consulté en <a href="https://pej.alsace/" target="_blank">cliquant ici</a>.
                    </p>
                </section>
                <br /><br />

                <section>
                    <h2>Les afiches</h2>
                    <div class="display-flex">
                        <div>
                            <img src="../../assets/images/poster-one.png" alt="Logo Patrimoine en jeu" class="project-img posters" />
                            <img src="../../assets/images/poster-two.png" alt="Logo Patrimoine en jeu" class="project-img posters hidden" />
                            <img src="../../assets/images/poster-three.png" alt="Logo Patrimoine en jeu" class="project-img posters hidden" />
                        </div>
                        <p>
                            Les affiches, je les ai réalisées car, vers la fin de mon stage, mon tuteur et moi avons participé à l’assemblée générale de l’ASMA. Pendant cette assemblée, nous avions un stand sur lequel nous avons pu présenter notre projet aux membres de l’ASMA, aux invités ainsi qu’aux autres visiteurs (Cliquez sur l’image pour afficher l’affiche suivante).
                        </p>
                    </div>
                </section>
                <br /><br />

                <a href="/projects" data-link class="returnBtn padding-7px">Revenir en arriere</a>
                <br /><br /><br />

            </section>

        `
    }

    afterRender() {
        const posters = document.querySelectorAll(".posters");
        let index = 0;

        const caroussel = () => {
            posters[index].classList.add("hidden");
            index = (index + 1) % posters.length;
            posters[index].classList.remove("hidden");
        }

        posters.forEach(poster => {
            poster.addEventListener("click", caroussel);
        });

    }
}
export default class Pej{
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
                    <p>Pendant mon stage chez Push Architecture, j'ai réalisé plusieurs projets sur une période d'environ trois mois, tels que :</p>
                    <ul>
                        <li>Une application mobile basée sur la réalité virtuelle.</li>
                        <li>Un site web sous WordPress pour présenter l'association « Patrimoine en jeu » et l'application.</li>
                        <li>L'identité visuelle de l'application et du site web.</li>
                        <li>Une affiche destinée à présenter l'association lors de l'assemblée générale de <a href="https://www.asma.fr" target="_blank">l’ASMA</a>.</li>
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
                    <h2>L'application mobile</h2>
                    <div class="display-flex">
                        <p>
                            L'application as pourbout de faire revivre le patrimone alsacien avec l'aide de la réalité augmentée. Avec des modèeles 3D realisées en SketchUp, je les ai integrée dans Unity et j'ai fait l'inetearaction en C# puis le Backend en Django avec une base de donnes en PoscreSQL. Cette application fait réaparetre les batimenst dans leurs endroit d'origine en prenent les coordonnées GPS du telephone. L'application réalisée est seulement un démo et l'association cherche a l'heure actuelle des sponosrisation afin de pouvoir finir l'application et l'integrer dans <a href="https://glad.bretagne.bzh/" target="_blank">GLAD</a> vue que l'association est en parteneriat avec eux..
                        </p>
                        <img src="../../assets/images/ar.gif" alt="Logo Patrimoine en jeu" class="project-img" />
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>Le site web</h2>
                    <p>
                        Pour le site web de l'association "Patrimoine en jeu" je l'ai rèalisée avec de la mise en page WordPress, sur la theme "Twenty-Twenty three" avec pourbut de presentaer l'association, les projets de l'association en restution des batiements alsaciennes mais aussi l'aplication mobile. Le site web peut etre consultée en <a href="https://pej.alsace/" target="_blank">cliquant ici</a>.
                    </p>
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>Les afiches</h2>
                    <div class="display-flex">
                        <div class="posters">
                            <img src="../../assets/images/poster-one.png" alt="Logo Patrimoine en jeu" class="project-img" />
                            <img src="../../assets/images/poster-two.png" alt="Logo Patrimoine en jeu" class="project-img" />
                            <img src="../../assets/images/poster-three.png" alt="Logo Patrimoine en jeu" class="project-img" />
                        </div>
                        <p>Ce logo est très minimaliste, mais il contient les lettres « P » et « J » intégrées dans un carré.</p>
                    </div>
                </section>
                <br /><br />

            </section>

        `
    }

    afterRender(){

    }
}
export default class Pej{
    constructor() {
        this.title = "PEJ";
    }

    render() {
        return `
            <section class="pej">
                <h1>Patrimoine en jeu</h1>
                <br />
                <h2>Le projet</h2>
                <p>Pendant mon stage chez Push Architecture, j'ai réalisé plusieurs projets sur une période d'environ trois mois, tels que :</p>
                <ul>
                    <li>Une application mobile basée sur la réalité virtuelle.</li>
                    <li>Un site web sous WordPress pour présenter l'association « Patrimoine en jeu » et l'application.</li>
                    <li>L'identité visuelle de l'application et du site web.</li>
                    <li>Une affiche destinée à présenter l'association lors de l'assemblée générale de <a href="https://www.asma.fr" target="_blank">l’ASMA</a>.</li>
                </ul>
                <h2>Le logo</h2>
                <div class="display-flex">
                    <img src="../../assets/images/pej-logo.png" alt="Logo Patrimoine en jeu" class="project-img" />
                    <p>Ce logo est très minimaliste, mais il contient les lettres « P » et « J » intégrées dans un carré.</p>
                </div>
            </section>

        `
    }

    afterRender(){

    }
}
export default class LogoProject {
    constructor() {
        this.title = "LogoProject";
    }

    render() {
        return `
            <section class="project">
                <h1>Le logo</h1>
                <section>
                    <h2>Le design</h2>
                    <div class="display-flex">
                        <img src="../../assets/images/logo.webp" class="project-img" />
                        <div class="column">
                            <h3>Description</h3>
                            <p>Ce logo réunit les initiales de mon nom et de mon prénom pour former une silhouette simple, épurée, presque instinctive. 
                            Derrière cette apparente simplicité se cache un jeu d'espace négatif qui révèle une flèche — un détail discret, mais volontaire. 
                            Un symbole qui ne saute pas aux yeux immédiatement, mais qui reste en mémoire.</p>

                            <h3>Pourquoi la flèche?</h3>
                            <p>Parce qu'elle incarne ma manière d'avancer: toujours un peu plus loin, toujours un peu plus haut. 
                            Chaque défi devient une occasion de progresser, et chaque projet une étape supplémentaire dans mon évolution. 
                            La flèche n'est pas seulement un élément graphique, c'est mon état d'esprit.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Les couleurs</h2>
                    <div class="display-flex">
                        <div class="circle blue margin-right"></div>
                        <div class="circle orange"></div>
                    </div>
                </section>
                
                <a href="/projects" data-link>Revenir en arriere.</a>
            </section>
        `
    }

    afterRender() {

    }
}
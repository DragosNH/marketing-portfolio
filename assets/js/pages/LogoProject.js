export default class LogoProject {
    constructor() {
        this.title = "LogoProject";
    }

    render() {
        return `
            <section class="project">
                <h1>Le logo</h1>
                <br />
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
                <br /><br />
                <section>
                    <h2>Les couleurs</h2>
                    <div class="display-flex column">
                        <div>
                            <div class="circle blue margin-bottom"></div>
                            <p><code>#0F1F3A</code> Un bleu foncé qui représente l'innovation et le progrès.</p>
                        </div>
                        <div>
                            <div class="circle orange"></div>
                            <p><code>#FF7A1A</code> Un orange qui représente la curiosité et la créativité.</p>
                        </div>
                    </div>

                </section>
                <br /><br />
                
                <a href="/projects" data-link class="returnBtn padding-7px">Revenir en arriere</a>
                <br /><br /><br />

            </section>
        `
    }

    afterRender() {

    }
}
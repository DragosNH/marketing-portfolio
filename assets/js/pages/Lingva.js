export default class Lingva {
    constructor() {
        this.title = "Lingva";
    };

    render() {
        return `
            <section class="lingva">
                <h1>Lingva</h1>
                <br />

                <section>
                    <h2>Le projet</h2>
                    <p>Pendant la licence, on a eu un projet pendant le cours d'anglais, a réaliser une strategie de marketing, avec des elements graphiques, une application concue pour apprendre une langue etrangere.</p>
                </section>
                <br /><br />

                <section>
                    <h2>Le logo</h2>
                    <div class="display-flex">
                        <img src="../../assets/images/lingva/lingva_logo.webp" alt="Lingva Logo" class="project-img" />
                        <p>Le logo est realisée avec le font "Birthstone" afin de lui donner un aspect elegant et moderne en meme temps, puis representer bien une application avec poubrut l'aprentisage. Le sylo est mis afin d'accentuer plus la partie d'apprentisage en lui donnant un detail en plus a cotée du police.</p>
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>La mascote</h2>
                    <div class="display-flex align-center">
                        <p>
                            Mr. Bulpkins, est la mascote que j'ai réalisée afin d'aider l'utilisateur pendant son voyage d'apprentisage, et pour donnéer une idéntitée visuelle. 
                            <br />
                            Nous avos chois l'empoule car c'est un objet qui represent le progress et l'inovation depuis tout le tmps et on as bien jouée avec les formes dong le fialement as un aspect de cravate et on lui as mis des lunettes afin de pusser le stereotype d'un professeur. 
                        </p>
                        <img src="../../assets/images/lingva/mascot.webp" alt="Lingva Logo" class="project-mascot" />
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>Les coulleurs</h2>
                    <div class="display-flex column">
                        <div class="display-flex wrap">
                            <div class="circle lingva-grey margin-20px"></div>
                            <div class="circle lingva-blue margin-20px"></div>
                            <div class="circle lingva-yellow margin-20px"></div>
                            <div class="circle lingva-lightgreen margin-20px"></div>
                            <div class="circle lingva-darkgreen margin-20px"></div>
                        </div>
                        <p>
                            Chaque couleur as un objectif precis dans la palette des couleurs:
                            <ul>
                                <li>Le gris: Equilibre & adaptabilité</li>
                                <li>Le bleu: Inovation & technologie </li>
                                <li>Le jeunne: Pour attirrer l'attention sur les details</li>
                                <li>Les verts: Pour un effect de calme afin de créer un environement d'apprentisage</li>
                            </ul> 
                        </p>
                    </div>
                </section>
                <br /><br />

                <section>
                    <h2>Les badges</h2>
                    <div class="display-flex column">
                        <div class="display-flex wrap">
                            <img src="../../assets/images/lingva/achivement_1.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                            <img src="../../assets/images/lingva/achivement_2.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                            <img src="../../assets/images/lingva/achivement_3.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                            <img src="../../assets/images/lingva/achivement_4.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                            <img src="../../assets/images/lingva/achivement_5.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                            <img src="../../assets/images/lingva/achivement_6.webp" alt="Lingva Logo" class="project-badge margin-20px" />
                        </div>
                        <p>
                            L'application, as aussi un systeme de recompensses prévu, qui pour ce petit projet, va promover la consistance et aussi le travail assidu.
                        </p>
                    </div>
                </section>
                <br /><br />

            </section>
        `
    };

    afterRender() {

    };
}
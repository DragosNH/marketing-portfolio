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
                <p>Pendant mon stage chez Push Architecture, j'ai réalisée plusieurs projets autur de troix mois. Comme:</p>
                <ul>
                    <li>Application moblie basée sur la realitée virtuelle.</li>
                    <li>Site web en WorldPress afin de présenter l'association "Patrimoine en jeu" et l'aplication.</li>
                    <li>L'identitée visuelle de l'application & site web.</li>
                    <li>Une affiche ayant pourbut de presenter l'association à l'assamblé géneralle de <a href="https://www.asma.fr/">l'ASMA.</a></li>
                </ul>
            </section>
        `
    }

    afterRender(){

    }
}
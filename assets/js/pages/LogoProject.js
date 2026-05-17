export default class LogoProject {
    constructor() {
        this.title = "LogoProject";
    }

    render() {
        return `
            <section class="project">
                <h1>Le logo</h1>
                <p>Lorem ipsum dolores ....</p>
                
                <a href="/projects" data-link>Revenir en arriere.</a>
            </section>
        `
    }

    afterRender() {

    }
}
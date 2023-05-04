import "./About.css/";

const template = () => {
    return`
    <section class="about">
        <h2>About</h2>
        <p>
        Esta aplicación consulta imágenes de The Dog API para mostrarnos a todas las diversas razas de perritos!
        </p>
    </section>
    `
}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
}
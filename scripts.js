//

const links = document.querySelectorAll("a#link_contact")

links.forEach((link) => {
    link.addEventListener("click", (event) => scrollToSection(event, link))
})

function scrollToSection(event, link) {
    event.preventDefault() // Impede o comportamento padrão do link

    // Obtém o valor do atributo 'href' do link
    let element = link.getAttribute('href')
    let toSection = document.querySelector(element).offsetTop

    // Faz o scroll suave até a seção
    window.scroll({
        top: toSection,
        behavior: "smooth",
    })
}

//
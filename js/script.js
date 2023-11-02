/* Ativar links menu */

const links = document.querySelectorAll(".header__menu a")

const ativarLink = (link) => {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink)
/* --- */

/* Ativar items do orçamento */
const parametros = new URLSearchParams(location.search)

const ativarProduto = (parametro) => {
  if (parametro) {
    const elemento = document.getElementById(parametro)
    elemento.checked = true
  }
}

parametros.forEach(ativarProduto)

/* Perguntas frequentes */
const perguntas = document.querySelectorAll(".perguntas__container button")

const ativarPergunta = (event) => {
  const pergunta = event.currentTarget
  const controle = pergunta.getAttribute("aria-controls")
  const resposta = document.getElementById(controle)

  resposta.classList.toggle("ativo")
  pergunta.setAttribute("aria-expanded", resposta.classList.contains("ativo"))
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", ativarPergunta)
})

/* Galeria de imagens

img1
img2 (click)
img3

img = img2.src (x)
primeiraImg = img1.src (y)
troca (z) = x (img)
x (img) = y (primeiraImg)
y (primeiraImg) = z (troca)


*/
const galeria = document.querySelectorAll(".bicicleta__img img")
const galeriaContainer = document.querySelector(".bicicleta__img")

const trocarImagem = (event) => {
  let img = event.currentTarget
  if (matchMedia("(min-width: 1000px)").matches) galeriaContainer.prepend(img)
}

galeria.forEach((imagem) => {
  imagem.addEventListener("click", trocarImagem)
})

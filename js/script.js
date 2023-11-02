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

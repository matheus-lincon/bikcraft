const links = document.querySelectorAll(".header__menu a")

const ativarLink = (link) => {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink)

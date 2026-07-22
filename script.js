// script.js
// pega o elemento do HTML que tem o id "ano"
const ano = document.getElementById("ano");

// cria uma data atual (data de hoje)
const dataAtual = new Date();

// pega apenas o ano da data (ex: 2026)
const anoAtual = dataAtual.getFullYear();

// coloca o ano dentro do span no HTML, se existir
if (ano) {
  ano.textContent = anoAtual;
}

// ====== BOTÃO VOLTAR AO TOPO ======
const botaoTopo = document.getElementById("btnTopo");

if (botaoTopo) {
  // quando rolar a página
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      botaoTopo.style.display = "block";
    } else {
      botaoTopo.style.display = "none";
    }
  });

  // quando clicar no botão
  botaoTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
// Seleciona apenas os botões de reação (ignorando o botão de tema)
const botoes = document.querySelectorAll("main article button");

botoes.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    let texto = botao.querySelector("span");

    if (texto) {
      if (!curtiu) {
        texto.textContent = parseInt(texto.textContent) + 1;
        curtiu = true;
      } else {
        texto.textContent = parseInt(texto.textContent) - 1;
        curtiu = false;
      }
    }
  });
});

// Lógica para alternar o tema escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
  const corpoPagina = document.body;
  corpoPagina.classList.toggle("tema-escuro");
}
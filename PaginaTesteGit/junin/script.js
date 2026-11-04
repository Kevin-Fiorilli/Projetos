// Contador simples — um bom ponto de partida para adicionar novas funcionalidades depois.

let count = 0;
const button = document.getElementById("counterBtn");

button.addEventListener("click", () => {
  count++;
  button.textContent = `Cliques: ${count}`;
});

// Modo escuro
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Alternar modo escuro";
darkModeBtn.style.marginTop = "1rem";
document.querySelector(".footer").appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Botão de resetar contador
const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", () => {
  count = 0;
  button.textContent = `Cliques: ${count}`;
});

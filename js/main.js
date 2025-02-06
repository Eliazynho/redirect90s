
function openSite() {
    window.open('https://90sburgers.com.br/', '_blank');
}

function openHistory() {
    window.open('../pages/history.html', '_blank');
}

function openIfoos1() {
    window.open('https://www.ifood.com.br/delivery/garanhuns-pe/90s-burgers-n-fries-noventas-aluisio-pinto/c7e768e6-75ae-480d-95dc-c276672066ac?UTM_Medium=share', '_blank');
}

function openIfoos2() {
    window.open('https://www.ifood.com.br/delivery/garanhuns-pe/90s-burgers-n-fries-noventas---heliopolis-heliopolis/78a85065-b14f-4972-877f-f3c12d261d50?UTM_Medium=share', '_blank');
}

// Função para abrir o modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Inicialmente, garante que o modal está escondido
modal.style.display = "none"; // Esconde o modal ao carregar a página

// Abre o modal quando clicar no botão
openModalBtn.onclick = function() {
  modal.style.display = "flex"; // Exibe o modal
}

// Fecha o modal quando clicar no botão de fechar
closeModalBtn.onclick = function() {
  modal.style.display = "none"; // Esconde o modal
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Esconde o modal
  }
}

// Função para trocar a logo do WhatsApp ao passar o mouse
const whatsappButtons = document.querySelectorAll('.whatsapp-button');

whatsappButtons.forEach(button => {
  const icon = button.querySelector('.whatsapp-icon'); // Seleciona o ícone dentro do botão

  // Caminho para a logo normal e para o efeito hover
  const normalIcon = 'assets/whatsapp.png'; // Caminho para a logo normal
  const hoverIcon = 'assets/whatsapp-white.png'; // Caminho para a logo no hover

  // Troca a logo para o hover quando o mouse entra no botão
  button.addEventListener('mouseenter', () => {
    icon.src = hoverIcon;
  });

  // Restaura a logo normal quando o mouse sai do botão
  button.addEventListener('mouseleave', () => {
    icon.src = normalIcon;
  });
});

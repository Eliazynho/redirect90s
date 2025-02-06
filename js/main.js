
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

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const whatsappButtons = document.querySelectorAll('.whatsapp-button');

  whatsappButtons.forEach(button => {
    const icon = button.querySelector('.whatsapp-icon'); // Seleciona o ícone dentro do botão

    // Define a imagem normal e a imagem para o efeito hover
    const normalIcon = 'assets/whatsapp.png'; // Caminho para a logo normal
    const hoverIcon = 'assets/whatsapp white.png'; // Caminho para a logo no hover (substitua com o caminho correto)

    // Troca a logo para o hover quando o mouse entra no botão
    button.addEventListener('mouseenter', () => {
      icon.src = hoverIcon;
    });

    // Restaura a logo normal quando o mouse sai do botão
    button.addEventListener('mouseleave', () => {
      icon.src = normalIcon;
    });
  });
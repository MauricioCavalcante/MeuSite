document.getElementById('enviarWhatsapp').addEventListener('click', function() {
    var numeroTelefone = '5561991867295';
    var mensagem = 'Olá, vim através do seu site!'; 
    var mensagemCodificada = encodeURIComponent(mensagem);
    var linkWhatsapp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + mensagemCodificada;

    window.open(linkWhatsapp);
  });

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('bi-eye-fill');
      passwordIcon.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('bi-eye-slash-fill');
      passwordIcon.classList.add('bi-eye-fill');
    }
};

function alternatePages (){
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');

  document.getElementById('btn1').addEventListener('click', function() {
    var info1 = document.getElementById('informacao1');
    var info2 = document.getElementById('informacao2');

    button1.classList.add('clicked');
    button2.classList.remove('clicked');
    info1.classList.add('show');
    info2.classList.remove('show');
  });

  document.getElementById('btn2').addEventListener('click', function() {
    var info1 = document.getElementById('informacao1');
    var info2 = document.getElementById('informacao2');

    button1.classList.remove('clicked');
    button2.classList.add('clicked');
    info2.classList.add('show');
    info1.classList.remove('show');
  });

};

var scriptUrl = 'https://script.google.com/macros/s/AKfycbynqGMAGZ0FTZPSVRKSl3RzxV0hfCwwnyWGU57t-niYoFPzzE_ImAUDRALyo2qqsft7Zw/exec';

  // Função para carregar e exibir o número de linhas
  function carregarNumeroLinhas() {
    fetch(scriptUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById('numeroLinhas').innerText = 'Número de Linhas Preenchidas: ' + data;
    })
    .catch(error => console.error('Erro ao carregar número de linhas:', error));
  }

  // Carregar o número de linhas ao carregar a página
  window.onload = carregarNumeroLinhas;
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
  }
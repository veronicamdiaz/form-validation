
  const form = document.getElementById('form-deposito');
  const campoA = document.getElementById('campo-a');
  const campoB = document.getElementById('campo-b');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the form from submitting
    const aValue = parseInt(campoA.value);
    const bValue = parseInt(campoB.value);

    if (bValue > aValue) {
      // Form is valid, positive message
      mensagem.textContent = 'Formulário válido! Campo B é maior que Campo A.';
      mensagem.style.color = 'green'; 
    } else {
        // Form is invalid, display a negative message
      mensagem.textContent = 'Erro: Campo B deve ser maior que Campo A!';
      mensagem.style.color = 'red';
    }
  });


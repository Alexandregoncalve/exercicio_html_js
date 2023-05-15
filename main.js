document.querySelector(".campo").addEventListener("submit", function(event) {
    event.preventDefault(); // impede a submissão do formulário
  
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagemElement = document.getElementById("mensagem");
  
    if (isNaN(campoA) || isNaN(campoB)) {
      mensagemElement.textContent = "Insira apenas valores numéricos nos campos A e B.";
    } else if (campoB > campoA) {
      mensagemElement.textContent = "Campo B é maior que Campo A, PARABÉNS!";
    } else {
      mensagemElement.textContent = "Campo B deve ser maior que Campo A.";
    }
  
    // Limpar campos após exibição do resultado
    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
  
    // Limpar mensagem após 3 segundos
    setTimeout(function() {
      mensagemElement.textContent = "";
    }, 3000); // 3 segundos
  });
  
  // Validar entrada de caracteres nos campos
  document.getElementById("campoA").addEventListener("input", function(event) {
    const valor = event.target.value;
    if (/[^\d.]/.test(valor)) {
      event.target.setCustomValidity("Insira apenas valores numéricos.");
    } else {
      event.target.setCustomValidity("");
    }
  });
  
  document.getElementById("campoB").addEventListener("input", function(event) {
    const valor = event.target.value;
    if (/[^\d.]/.test(valor)) {
      event.target.setCustomValidity("Insira apenas valores numéricos.");
    } else {
      event.target.setCustomValidity("");
    }
  });
  
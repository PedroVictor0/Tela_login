
function validateFields(){
    const email = document.getElementById("email").value;

    if (!email) {
        document.getElementById("recuperar-senha").disabled = true;
    } else if (validarEmail(email)) {
        document.getElementById("recuperar-senha").disabled = false;
    } else {
        document.getElementById("recuperar-senha").disabled = true;
    }
}

function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Testa se o e-mail corresponde à expressão regular
    if (regex.test(email)) {
      return true;  // E-mail válido
    } else {
      return false; // E-mail inválido
    }
  }
  
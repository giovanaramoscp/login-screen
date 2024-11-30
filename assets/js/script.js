function onChangeEmail() {
  // toogleLoginButtonDisabled();
  toogleEmailErrros();
}

function onChangePassword() {
  // toogleLoginButtonDisabled();
  tooglePasswordErrros();
}

// Validação de Email (mostra erros)
function toogleEmailErrros() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email-required-error").style.display = "block";
  } else {
    document.getElementById("email-required-error").style.display = "none";
    document.getElementById("email-invalid-error").style.display = "none";
  }

  if (validateEmail(email)) {
    document.getElementById("email-invalid-error").style.display = "none";
  } else {
    document.getElementById("email-invalid-error").style.display = "block";
  }
}

// Validação de Senha (mostra erros)
function tooglePasswordErrros() {
  const password = document.getElementById("password").value;

  if (!password) {
    document.getElementById("password-required-error").style.display = "block";
  } else {
    document.getElementById("password-required-error").style.display = "none";
  }
}

// Habilita/Desabilita Botão de Login
// function toogleLoginButtonDisabled() {
//   const emailValid = isEmailValid();
//   const passwordValid = isPasswordValid();

//   document.getElementById("login-button").disabled =
//     emailValid && passwordValid;
// }

// Validar se Email é nulo
function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

// Validar estrutura do Email
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validar se Password é nulo
function isPasswordValid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}

// Verifica se o Login é valido
function verificarLogin() {
  // Exemplos de email
  const logins = [
    { email: "usuario@email.com", password: "senha123" },
    { email: "teste@email.com", password: "12345678" },
    { email: "contato@gmail.com", password: "c12345" },
    { email: "admin@hotmail.com", password: "admin001" },
    { email: "exemplo@email.com", password: "00005" },
  ];

  // Pega os dados inseridos pelo usuario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Loop para percorrer o array de logins
  for (var i = 0; i < logins.length; i++) {
    if (logins[i].email == email && logins[i].password == password) {
      document.getElementById("login-success").style.display = "block";
      return;
    } else {
      document.getElementById("login-success").style.display = "none";
    }
  }
}

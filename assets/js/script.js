function onChangeEmail() {
  toogleLoginButtonDisabled();
  toogleEmailErrors();
}

function onChangePassword() {
  toogleLoginButtonDisabled();
  tooglePasswordErrros();
}

// Validação de Email (mostra erros)
function toogleEmailErrors() {
  const email = document.getElementById("email").value;

  document.getElementById("email-required-error").style.display = !email
    ? "block"
    : "none";
  document.getElementById("email-invalid-error").style.display =
    email && !validateEmail(email) ? "block" : "none";
}

// Validação de Senha (mostra erros)
function tooglePasswordErrors() {
  const password = document.getElementById("password").value;

  document.getElementById("password-required-error").style.display = !password
    ? "block"
    : "none";
}

// Habilita/Desabilita Botão de Login
function toogleLoginButtonDisabled() {
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid();

  document.getElementById("login-button").disabled =
    !emailValid && !passwordValid;
}

// Validar se Email é nulo
function isEmailValid() {
  const email = document.getElementById("email").value;

  return email && validateEmail(email);
}

// Validar se Password é nulo
function isPasswordValid() {
  const password = document.getElementById("password").value;

  return !password;
}

// Validar estrutura do Email
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

// Verifica se o Login é valido
function verificarLogin() {
  // Exemplos de logins
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
      document.getElementById("login-fail").style.display = "none";
      return;
    } else {
      document.getElementById("login-success").style.display = "none";
      document.getElementById("login-fail").style.display = "block";
    }
  }
}

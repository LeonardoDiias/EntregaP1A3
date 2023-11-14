let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let sobrenome = document.querySelector("#sobrenome");
let lSobrenome = document.querySelector("#labelSobrenome");
let validSobrenome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

sobrenome.addEventListener("keyup", () => {
  if (sobrenome.value.length <= 3) {
    lSobrenome.setAttribute("style", "color: red");
    sobrenome.setAttribute("style", "border-color: red");
    validSobrenome = false;
  } else {
    lSobrenome.setAttribute("style", "color: green");
    sobrenome.setAttribute("style", "border-color: green");
    validSobrenome = true;
  }
});

usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

email.addEventListener("keyup", () => {
  if (email.value.length <= 8) {
    labelEmail.setAttribute("style", "color: red");
    email.setAttribute("style", "border-color: red");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    email.setAttribute("style", "border-color: green");
    validEmail = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmSenha.addEventListener("keyup", () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: red");
    confirmSenha.setAttribute("style", "border-color: red");
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute("style", "color: green");
    confirmSenha.setAttribute("style", "border-color: green");
    validConfirmSenha = true;
  }
});

function cadastrar() {
  if (
    validNome &&
    validSobrenome &&
    validUsuario &&
    validEmail &&
    validSenha &&
    validConfirmSenha
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeC: nome.value,
      sobrenomeC: sobrenome.value,
      usuarioC: usuario.value,
      emailC: email.value,
      senhaC: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "../html/login.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let inputConfirmSenha = document.querySelector("#confirmSenha");

  if (inputConfirmSenha.getAttribute("type") == "password") {
    inputConfirmSenha.setAttribute("type", "text");
  } else {
    inputConfirmSenha.setAttribute("type", "password");
  }
});

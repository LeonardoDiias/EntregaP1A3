if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../html/login.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#usuario");
logado.innerHTML = `${userLogado.user}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../html/login.html";
}

function adicionarjogo() {
  var novoJogo = document.getElementById("novoJ").value;
  var novoStaus = document.getElementById("novoS").value;
  var novaPlata = document.getElementById("novaP").value;

  if (novoJogo !== "" && novoStaus !== "" && novaPlata !== "") {
    var tabela = document.getElementById("gridJogo");
    var novoItem = document.createElement("tr");
    /* Professor na lista ele começa a contar de 0 e eu nn achei uma maneira de ele levar em consideração isso, ou seja quando vc cadastra
       um novo jogo ele acaba repetindo o ID anterior pq pode ter 5 jogos cadastrado, mas como ele começa a contar do 0 é como se tivesse so 4, peço q releve s2*/
    var novoItemId = "item" + tabela.rows.length;

    novoItem.id = novoItemId;
    novoItem.innerHTML =
      "<td>" +
      tabela.rows.length +
      "</td>" +
      "<td>" +
      novoJogo +
      "</td>" +
      "<td>" +
      novoStaus +
      "</td>" +
      "<td>" +
      novaPlata +
      "</td>";
    tabela.appendChild(novoItem);

    document.getElementById("novoJ").value = "";
    document.getElementById("novoS").value = "";
    document.getElementById("novaP").value = "";
  }
}

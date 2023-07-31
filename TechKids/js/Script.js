//Aqui é jquery
$(document).ready(function () {
  $("#barras").click(function () {
    if ($("#menu").hasclass("menu-ativo")) {
      $("#menu").removeclass("menu-ativo");
    } else {
      $("#menu").addclass("menu-ativo");
    }
  });
});

//Acima é jquery

function cadastrarnewslatter() {
  let email = document.getElementById("campo-email").value;
  alert(email);
}

function mostrarmenu($event) {
  let menu = document.getElementById("menu");

  if (getComputedStyle(menu).display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }

  event.preventDefault();
}

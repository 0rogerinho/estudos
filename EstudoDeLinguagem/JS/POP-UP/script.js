/*let cookiesContainer = document.querySelector(".cookies-container");

let gerenciarCookies = document.querySelector("cookies-save manage");
window.onload = function () {
  let cookies = localStorage.getItem("cookies");
  if (!!cookies) {
    cookiesContainer.style.display = "none";
    alert("não aparece o modal");
  } else {
    alert("aparece o modal");
  }
}; */

function checkCookie() {
  var cookieAccepted = getCookie("cookieAccepted");
  if (cookieAccepted == "") {
    // exibe tela de gerenciamento de cookies
    document.getElementById("cookie-management").style.display = "block";
    console.log("gerenciamento de cookies")
  } else {
    // verifica quais cookies foram permitidos
    var cookie1Accepted = getCookie("cookie1Accepted");
    var cookie2Accepted = getCookie("cookie2Accepted");
    console.log(cookie1Accepted)
    console.log(cookie2Accepted);
    // atualiza o site de acordo com as escolhas do usuário
    if (cookie1Accepted == "true") {
      // define o comportamento para o cookie 1 permitido
      console.log("cookie permitido");
    } else {
      // define o comportamento para o cookie 1 rejeitado
    }
    if (cookie2Accepted == "true") {
      console.log("cookie rejeitado");
      // define o comportamento para o cookie 2 permitido
    } else {
      // define o comportamento para o cookie 2 rejeitado
    }
  }
}

function acceptCookies() {
  // define os cookies correspondentes para cada tipo de cookie permitido
  var cookie1Value = document.getElementsByName("cookie1")[0].checked
    ? "true"
    : "false";
  setCookie("cookie1Accepted", cookie1Value, 365);
  var cookie2Value = document.getElementsByName("cookie2")[0].checked
    ? "true"
    : "false";
  setCookie("cookie2Accepted", cookie2Value, 365);
  // esconde tela de gerenciamento de cookies
  document.getElementById("cookie-management").style.display = "none";
}

function rejectCookies() {
  // define o valor "false" para cada tipo de cookie rejeitado
  setCookie("cookie1Accepted", "false", 365);
  setCookie("cookie2Accepted", "false", 365);
  // esconde tela de gerenciamento de cookies
  document.getElementById("cookie-management").style.display = "none";
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function setCookie(cookieName, cookieValue, expirationDays) {
  var expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + expirationDays * 24 * 60 * 60 * 1000
  );
  var expires = "expires=" + expirationDate.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

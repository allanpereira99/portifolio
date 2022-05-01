const nav = document.querySelector("#navbar");
// Menu
const btnMenu = document.querySelector("#btn__menu");

function toogleMenu() {
  const nav = document.querySelector("#navbar");
  nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toogleMenu);

// No Refrash
function openPage(page, id) {
  let indice = page;
  let target = id;
  if (page != "index") {
    let url = `./html/${indice}.html`;
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        document.getElementById(target).innerHTML = xml.responseText;
      }
    };
    xml.open("GET", url, true);
    xml.send("");
    nav.classList.remove("active");
  } else {
    window.location.reload();
  }
}

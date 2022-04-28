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
    axios(url)
      .then(
        (response) =>
          (document.getElementById(target).innerHTML = response.data)
      )
      .then(() => nav.classList.remove("active"));
  } else {
    window.location.reload();
  }
}

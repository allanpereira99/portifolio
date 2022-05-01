const nav = document.querySelector("#navbar");
// Menu
const btnMenu = document.querySelector("#btn__menu");
function toogleMenu() {
  const nav = document.querySelector("#navbar");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toogleMenu);
// No Refrash
const index = "./index.html";
function openPage(page, id, push = true) {
  let indice = page;
  let target = id;
  let url = `./pages/${indice}.html`;
  if (page != "index") {
    axios(url)
      .then(
        (response) =>
          (document.getElementById(target).innerHTML = response.data)
      )
      .then(() => nav.classList.remove("active"))
      .then(() => {
        if (push) {
          history.pushState({ id }, null, url.replace("pages/", ""));
        }
      });
  } else {
    window.location.href = index;
  }
}
window.onpopstate = (e) => {
  if (e.state) {
    const regex = /\w+\./g;
    let page = window.location.href.match(regex);
    openPage(`${page[2].replace(".", "")}`, e.state.id, false);
  } else {
    window.location.href = index;
  }
};

let txt = document.querySelector(".txt-taille");
let plus = document.querySelector(".plus");
let moins = document.querySelector(".moins");
let infos = document.querySelector(".infos");

let i = 14;

let aggrandir = () => {
  i++;
  txt.style.fontSize = i + `px`;
  infos.innerText = `Taille actuelle ${i} px`;
};

let reduire = () => {
  i--;
  txt.style.fontSize = i + `px`;
  infos.innerText = `Taille actuelle ${i} px`;
};

plus.addEventListener("click", () => {
  aggrandir();
});

moins.addEventListener("click", () => {
  reduire;
});

const btn = document.querySelector("#btn");
const out = document.querySelector("#output");
let ee;

btn.addEventListener("click", (e) => {
  console.log(e);
  ee = e;
  out.textContent = `${e} + e.target`;
  e.target.style.background = "blue";
});

// Navbar efeito ao rolar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "rgba(0,0,0,0.8)";
  }
});

// SLIDER DE IMAGENS
const imagens = [
  "./Imagens_Divino´s/mid_fade_V.jpeg",
  "./Imagens_Divino´s/low_fade_freestyle.jpeg",
  "./Imagens_Divino´s/high_fade_pigm.jpeg"
];

let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
  slider.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % imagens.length;
    slider.src = imagens[index];
    slider.style.opacity = 1;
  }, 500);

}, 6000);



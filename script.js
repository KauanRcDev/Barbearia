// Navbar efeito ao rolar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "rgba(0,0,0,0.8)";
  }
});

// Botão agendar (exemplo)
document.querySelectorAll(".btn-gold").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Sistema de agendamento em breve!");
  });
});
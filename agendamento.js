document.getElementById("confirmar").addEventListener("click", () => {

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!nome || !telefone || !data || !hora || servico === "Selecione um serviço") {
    alert("Preencha todos os campos!");
    return;
  }

  const msg = `Olá, meu nome é ${nome}.
Quero agendar:

📌 ${servico}
📅 ${data}
⏰ ${hora}
📞 ${telefone}`;

  const url = `https://wa.me/5517996291054?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
});
function atualizarTempo() {
  const inicio = new Date("2025-05-20T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("tempo").textContent =
    `nosso romance começou há ${String(anos).padStart(2, '0')} anos ` +
    `${String(meses).padStart(2, '0')} meses ${String(dias).padStart(2, '0')} dias ` +
    `${String(horas).padStart(2, '0')} horas ${String(minutos).padStart(2, '0')} minutos ${String(segundos).padStart(2, '0')} segundos ❤️🔥`;
}

setInterval(atualizarTempo, 1000);

const fotos = document.querySelectorAll('.carousel img');
let index = 0;

setInterval(() => {
  fotos[index].classList.remove('active');
  index = (index + 1) % fotos.length;
  fotos[index].classList.add('active');
}, 3000);

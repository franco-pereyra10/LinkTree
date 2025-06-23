function actualizarHora() {
  const ahora = new Date();
  const h = String(ahora.getHours()).padStart(2, '0');
  const m = String(ahora.getMinutes()).padStart(2, '0');
  const s = String(ahora.getSeconds()).padStart(2, '0');
  document.getElementById("hora").textContent = `${h}:${m}:${s}`;
}
setInterval(actualizarHora, 1000);
actualizarHora();

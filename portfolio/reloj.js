function actualizarHoras() {
  const ahora = new Date();

  // UTC base
  const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);

  // Hora de Argentina (UTC-3)
  const horaARG = new Date(utc - 3 * 3600000);
  document.getElementById('hora-arg').textContent = formatear(horaARG);

  // Hora de Miami (UTC-4 actualmente con horario de verano)
  const horaUSA = new Date(utc - 4 * 3600000);
  document.getElementById('hora-usa').textContent = formatear(horaUSA);

  // Hora de Brasil (UTC-3)
  const horaBR = new Date(utc - 3 * 3600000);
  document.getElementById('hora-br').textContent = formatear(horaBR);

    // Hora de Madrid (UTC+2 con horario de verano)
  const horaMadrid = new Date(utc + 2 * 3600000);
  document.getElementById('hora-madrid').textContent = formatear(horaMadrid);

  // Hora de Tokio (UTC+9)
  const horaTokio = new Date(utc + 9 * 3600000);
  document.getElementById('hora-tokio').textContent = formatear(horaTokio);

  // Hora de Ciudad de México (UTC-6)
  const horaMexico = new Date(utc - 6 * 3600000);
  document.getElementById('hora-mexico').textContent = formatear(horaMexico);

}

function formatear(fecha) {
  const h = String(fecha.getHours()).padStart(2, '0');
  const m = String(fecha.getMinutes()).padStart(2, '0');
  const s = String(fecha.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

setInterval(actualizarHoras, 1000);
actualizarHoras();

// Calculadora normal
function agregar(valor) {
  document.getElementById('pantalla-normal').value += valor;
}
function borrar() {
  document.getElementById('pantalla-normal').value = '';
}
function calcular() {
  try {
    document.getElementById('pantalla-normal').value = eval(document.getElementById('pantalla-normal').value);
  } catch {
    document.getElementById('pantalla-normal').value = 'Error';
  }
}



// Conversor de medidas
function convertir() {
  const valor = parseFloat(document.getElementById('valor').value);
  const tipo = document.getElementById('tipo').value;
  let resultado = '';

  switch (tipo) {
    case 'km-mi':
      resultado = `${(valor * 0.621371).toFixed(2)} mi`;
      break;
    case 'mi-km':
      resultado = `${(valor / 0.621371).toFixed(2)} km`;
      break;
    case 'kg-lb':
      resultado = `${(valor * 2.20462).toFixed(2)} lb`;
      break;
    case 'lb-kg':
      resultado = `${(valor / 2.20462).toFixed(2)} kg`;
      break;
    case 'c-f':
      resultado = `${(valor * 9/5 + 32).toFixed(2)} °F`;
      break;
    case 'f-c':
      resultado = `${((valor - 32) * 5/9).toFixed(2)} °C`;
      break;
    default:
      resultado = 'Conversión no válida';
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

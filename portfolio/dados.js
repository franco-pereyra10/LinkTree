function lanzarDados() {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('dado1').src = `../Identikit/imagenes/dado${dado1}.png`;
  document.getElementById('dado2').src = `../Identikit/imagenes/dado${dado2}.png`;

  const suma = dado1 + dado2;
  document.getElementById('resultadoSuma').textContent = `Resultado: ${suma}`;

  const historial = document.getElementById('historial-lista');
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = `Dado 1: ${dado1}, Dado 2: ${dado2} — Total: ${suma}`;
  historial.prepend(nuevoItem);

  if (historial.children.length > 5) {
    historial.removeChild(historial.lastChild);
  }
}

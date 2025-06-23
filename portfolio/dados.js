function tirarDado() {
  const dado = Math.floor(Math.random() * 6) + 1;
  const simbolos = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  document.getElementById('resultado').textContent = simbolos[dado - 1];
}

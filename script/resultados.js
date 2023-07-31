const resultados1 = [];
const resultados2 = [];
const resultados3 = [];

function exibirResultadosNaTabela() {
  const tabelaResultados = document.getElementById('tabelaResultados');
  const tbody = tabelaResultados.querySelector('tbody');

  if (!tabelaResultados || !tbody) {
    console.error('Tabela de resultados não encontrada.');
    return;
  }

  tbody.innerHTML = '';

  resultados1.forEach((resultado) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${resultado.nome}</td>
      <td>${resultado.tema}</td>
      <td>${resultado.tempo}</td>
      <td>${resultado.data}</td>
      <td>${resultado.pontuacao}</td>
    `;
    tbody.appendChild(tr);
  });

  resultados2.forEach((resultado) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${resultado.nome}</td>
      <td>${resultado.tema}</td>
      <td>${resultado.tempo}</td>
      <td>${resultado.data}</td>
      <td>${resultado.pontuacao}</td>
    `;
    tbody.appendChild(tr);
  });

  resultados3.forEach((resultado) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${resultado.nome}</td>
      <td>${resultado.tema}</td>
      <td>${resultado.tempo}</td>
      <td>${resultado.data}</td>
      <td>${resultado.pontuacao}</td>
    `;
    tbody.appendChild(tr);
  });
}
 




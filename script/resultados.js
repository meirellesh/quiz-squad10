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

  const totalResultados = [...resultados1, ...resultados2, ...resultados3];

  totalResultados.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  totalResultados.forEach((resultado) => {
    const dataFormatada =  new Date(resultado.data).toLocaleDateString();
    const horaFormatada =  new Date(resultado.data).toLocaleTimeString();
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${resultado.nome}</td>
      <td>${resultado.tema}</td>
      <td>${resultado.tempo}</td>
      <td>${dataFormatada}</td>
      <td>${horaFormatada}</td>
      <td>${resultado.pontuacao}</td>
    `;
    tbody.appendChild(tr);
  });

}
 




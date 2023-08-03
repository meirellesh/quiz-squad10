const resultados1 = [];
const resultados2 = [];
const resultados3 = [];

// Função para gerar Tabela de Resultados
function exibirResultadosNaTabela() {
  const tabelaResultados = document.getElementById('tabelaResultados');
  const tbody = tabelaResultados.querySelector('tbody');
  const h1 = document.querySelector("#titulo")
  h1.textContent = "Resultados"

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
  calcularMedia([...resultados1, ...resultados2, ...resultados3]);
}

// Função para calcular a média
function calcularMedia(resultados) {
  const totalResultados = resultados.length;
  let totalAcertos = 0;
  let totalErros = 0;

  resultados.forEach((resultado) => {
    const [acertos, totalQuestoes] = resultado.pontuacao.split('/').map(Number);
    const erros = totalQuestoes - acertos;

    totalAcertos += acertos;
    totalErros += erros;
  });

  const mediaAcertos = totalAcertos / totalResultados;
  const mediaErros = totalErros / totalResultados;

  const mediaAcertosElement = document.getElementById('mediaAcertos');
  const mediaErrosElement = document.getElementById('mediaErros');

  mediaAcertosElement.innerText = mediaAcertos.toFixed(2).replace(".", ",");
  mediaErrosElement.innerText = mediaErros.toFixed(2).replace(".", ",");
}

// Função para gerar o Ranking
const ranking = [
  [
    { nome: "Renata Guedes", pontuacao: 8 },
    { nome: "João Tavares", pontuacao: 7 },
    { nome: "Pedro Assis", pontuacao: 5 },
    { nome: "Isabela Rocha", pontuacao: 9 },
    { nome: "Bianca Bernardi", pontuacao: 6 },
    { nome: "Carolina Lanzon", pontuacao: 4 },
    ,
  ],
  [
    { nome: "Livia Barreto", pontuacao: 6 },
    { nome: "Felipe Souza", pontuacao: 9 },
    { nome: "Rodrigo Munhoz", pontuacao: 8 },
    { nome: "Simone Rodrigues", pontuacao: 7 },
    { nome: "Carla Silva", pontuacao: 5 },
    { nome: "Douglas Aguiar", pontuacao: 4 },
  ],
  [
    { nome: "Jessica Melo", pontuacao: 7 },
    { nome: "Nilson Franco", pontuacao: 6 },
    { nome: "Tais Lima", pontuacao: 9 },
    { nome: "Thiago Freitas", pontuacao: 8 },
    { nome: "Camila Quirino", pontuacao: 4 },
    { nome: "Mariana Vieira", pontuacao: 5 },
  ],
];

function gerarRanking() {
  const table = document.getElementById("table-content");

  ranking.forEach((rank) => {
    rank.sort((a, b) => b.pontuacao - a.pontuacao);
  });

  let tableContent = `
      <thead>
        <tr>
          <th>HTML</th>
          <th>CSS</th>
          <th>Java Script</th>
        </tr>
      </thead>
      <tbody>
    `;

  for (let i = 0; i < 6; i++) {
    tableContent += `
        <tr>
          <td>${i + 1}. ${ranking[0][i].nome}</td>
          <td>${i + 1}. ${ranking[1][i].nome}</td>
          <td>${i + 1}. ${ranking[2][i].nome}</td>
        </tr>
      `;
  }

  tableContent += "</tbody>";
  table.innerHTML = tableContent;
}

// Função para atualizar o Ranking

function exibirRanking(temaMatriz, resultados) {
  resultados.sort((a, b) => b.pontuacao - a.pontuacao);

  let i = 0;
  let j = 0;
  while (i < 6 && j < resultados.length) {
    if (resultados[j].pontuacao > ranking[temaMatriz][i].pontuacao) {
      ranking[temaMatriz].splice(i, 0, resultados[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  gerarRanking();
}

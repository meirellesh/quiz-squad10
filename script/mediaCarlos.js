// Função para calcular a média
function calcularMedia(array) {
    const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    return soma / array.length;
}

// Selecionar a tabela de resultados
const table1 = document.querySelector(".table1");
const pontuacoes = [];

// Percorrer as células da tabela e extrair as pontuações
for (let i = 1; i < table1.rows.length; i++) {
    const row = table1.rows[i];
    const pontuacaoStr = row.cells[4].innerText;
    const pontuacao = parseFloat(pontuacaoStr); // Converter para número de ponto flutuante
    pontuacoes.push(pontuacao);
}

// Calcular a média de acertos
const mediaAcertos = calcularMedia(pontuacoes);

// Calcular a média de erros
const mediaErros = 10 - mediaAcertos;

// Atualizar o conteúdo das médias
const mediaAcertosSpan = document.getElementById("mediaAcertos");
const mediaErrosSpan = document.getElementById("mediaErros");
mediaAcertosSpan.textContent = mediaAcertos.toFixed(1);
mediaErrosSpan.textContent = mediaErros.toFixed(1);
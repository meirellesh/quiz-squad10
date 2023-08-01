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
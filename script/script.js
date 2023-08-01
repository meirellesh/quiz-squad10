
const escolhaTema = document.getElementById("escolhaTema");
const btnEscolha = document.querySelector("#btnEscolha");
const quizHTML = document.querySelector("#quizHTML");
const quizCSS = document.querySelector("#quizCSS");
const quizJS = document.querySelector("#quizJS");
const cronometro = document.querySelector("#cronometro")
const resultados = document.querySelector("#resultados")
const btnFinalizarHTML = document.querySelector("#finalizarHTML");
const btnFinalizarCSS = document.querySelector("#finalizarCSS");
const btnFinalizarJS = document.querySelector("#finalizarJS");
const btnReiniciar = document.querySelectorAll(".reiniciar")

btnEscolha.onclick = () => {
    const nome = document.getElementById("nome").value;
    const temaSelecionado = document.getElementById("tema").value;

    if (!nome || !temaSelecionado) {
        alert ("Por favor, preencha todos os campos para iniciar o Quiz.");
        return;
    }

    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;

    if (temaSelecionado === "HTML") {
        quizHTML.hidden = false;
    } else if (temaSelecionado === "CSS") {
        quizCSS.hidden = false;
    } else if (temaSelecionado === "JavaScript") {
        quizJS.hidden = false;
    }

    gerarQuestoes(temaSelecionado);
    start();
};


// Função para gerar as questões
function gerarQuestoes(temaSelecionado) {
    cronometro.hidden = false;
    const perguntasContainer = document.getElementById(
        `containerPerguntas${temaSelecionado}`
    );

    const quiz =
        temaSelecionado === "HTML"
            ? quiz1
            : temaSelecionado === "CSS"
            ? quiz2
            : temaSelecionado === "JavaScript"
            ? quiz3
            : [];

    if (quiz.length === 0) {
        console.error(
            `Tema "${temaSelecionado}" não reconhecido ou sem perguntas.`
        );
        return;
    }

    perguntasContainer.innerHTML = ""; // Limpa as perguntas existentes

    quiz.forEach((questao, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${index + 1}. ${questao.pergunta}</h3>`;

        for (let opcao in questao.respostas) {
            div.innerHTML += `
                <label>
                    <input type="radio" name="pergunta${index}" value="${opcao}">
                    ${questao.respostas[opcao]}
                </label><br>
            `;
        }

        div.innerHTML += "<br>";
        perguntasContainer.appendChild(div);
    });
}

btnFinalizarHTML.onclick = () => {
    const nome = document.getElementById("nome").value;
    let pontuacao = 0;

    quiz1.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    resultados1.push({
        nome: nome,
        tema: 'HTML',
        tempo: document.getElementById('counter').innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz1.length}`,
    });

    exibirResultadosNaTabela();
    atualizarRanking(0, resultados1.map((resultado) => ({ ...resultado, pontuacao: parseInt(resultado.pontuacao) })));
    gerarRanking();   
    

    // alert(`Sua pontuação: ${pontuacao}/${quiz1.length}`);
    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;
    resultados.hidden = false;
    stop();
};

btnFinalizarCSS.onclick = () => {
    const nome = document.getElementById("nome").value;
    let pontuacao = 0;

    quiz2.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    resultados2.push({
        nome: nome,
        tema: 'CSS',
        tempo: document.getElementById('counter').innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz2.length}`,
    });

    exibirResultadosNaTabela(); 
    atualizarRanking(1, resultados2.map((resultado) => ({ ...resultado, pontuacao: parseInt(resultado.pontuacao) })));
    gerarRanking();
    

    // alert(`Sua pontuação: ${pontuacao}/${quiz2.length}`);
    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;
    resultados.hidden = false;
    stop();
};

btnFinalizarJS.onclick = () => {
    const nome = document.getElementById("nome").value;
    let pontuacao = 0;

    quiz3.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    resultados3.push({
        nome: nome,
        tema: 'JavaScript',
        tempo: document.getElementById('counter').innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz3.length}`,
    });

    exibirResultadosNaTabela();
    atualizarRanking(2, resultados3.map((resultado) => ({ ...resultado, pontuacao: parseInt(resultado.pontuacao) })));
    gerarRanking();   

    // alert(`Sua pontuação: ${pontuacao}/${quiz3.length}`);
    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;
    resultados.hidden = false;
    stop();
   
};

btnReiniciar.forEach((btn) => {
    btn.onclick = () => {

        document.getElementById("nome").value = "";
        document.getElementById("tema").value = "";
    
        escolhaTema.hidden = false;
        quizHTML.hidden = true;
        quizCSS.hidden = true;
        quizJS.hidden = true;
        cronometro.hidden = true;
        resultados.hidden = true;
        stop();
    };
}); 

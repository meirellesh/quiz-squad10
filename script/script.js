import {quiz1} from "./quiz1.js";
import {quiz2} from "./quiz2.js";
import {quiz3} from "./quiz3.js";

const escolhaTema = document.getElementById("escolhaTema");
const btnEscolha = document.querySelector("#btnEscolha");
const quizHTML = document.querySelector("#quizHTML");
const quizCSS = document.querySelector("#quizCSS");
const quizJS = document.querySelector("#quizJS");
const cronometro = document.querySelector("#cronometro");
const resultados = document.querySelector("#resultados");
const btnFinalizarHTML = document.getElementById("finalizarHTML")
const btnFinalizarCSS = document.getElementById("finalizarCSS")
const btnFinalizarJS = document.getElementById("finalizarJS")
const btnResultadoHTML = document.querySelector("#resultadoHTML");
const btnResultadoCSS = document.querySelector("#resultadoCSS");
const btnResultadoJS = document.querySelector("#resultadoJS");
const btnReiniciar = document.querySelectorAll(".reiniciar");
const btnReiniciarFinal = document.getElementById("reiniciarFinal");

const player = document.getElementById("player"); // tag audio
const button = document.getElementById("play"); // botão play/pause




btnEscolha.onclick = () => {
    const nome = document.getElementById("nome").value;
    const temaSelecionado = document.getElementById("tema").value;
    const h1 = document.querySelector("#titulo")

    if (!nome || !temaSelecionado) {
        alert("Por favor, preencha todos os campos para iniciar o Quiz.");
        return;
    }

    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;
    resultados.hidden = true;
    btnFinalizarHTML.hidden = false;
    btnResultadoHTML.hidden = true;
    btnFinalizarCSS.hidden = false;
    btnResultadoCSS.hidden = true;
    btnFinalizarJS.hidden = false;
    btnResultadoJS.hidden = true;
 

    if (temaSelecionado === "HTML") {
        h1.textContent = "Quiz: HTML"
        quizHTML.hidden = false;
    } else if (temaSelecionado === "CSS") {
        h1.textContent = "Quiz: CSS"
        quizCSS.hidden = false;
    } else if (temaSelecionado === "JavaScript") {
        h1.textContent = "Quiz: JavaScript"
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

    perguntasContainer.innerHTML = ""; // Limpa as perguntas existentes

    quiz.forEach((questao, index) => {
        const div = document.createElement("div");
        div.classList.add("pergunta-card");
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

function verificarRespostas(temaSelecionado) {
    const perguntasContainer = document.getElementById(`containerPerguntas${temaSelecionado}`);
    const perguntas = perguntasContainer.querySelectorAll('.pergunta-card');

    for (let i = 0; i < perguntas.length; i++) {
        const opcoes = perguntas[i].querySelectorAll('input[type=radio]');
        let respondida = false;

        for (let j = 0; j < opcoes.length; j++) {
            if (opcoes[j].checked) {
                respondida = true;
                break;
            }
        }
        if (!respondida) {
            alert('Por favor, responda todas as perguntas antes de finalizar o Quiz.');
            return false;
        }
    }
    return true;
}

btnFinalizarHTML.onclick = () => {

    const nome = document.getElementById("nome").value;
    let pontuacao = 0;
    const perguntasHTML = document.querySelectorAll("#containerPerguntasHTML div");

    if (!verificarRespostas("HTML")) {
        btnFinalizarHTML.hidden = false;
        btnResultadoHTML.hidden = true;
        return;
    }
    else {
        btnFinalizarHTML.hidden = true;
        btnResultadoHTML.hidden = false;
    }

    perguntasHTML.forEach((pergunta, index) => {
        const opcoes = pergunta.querySelectorAll("input[type=radio]");

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === quiz1[index].respostaCorreta) {
                pontuacao++;
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-correta');
            } else if (opcao.checked){
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-errada');
            }
        });
    });

    resultados1.push({
        nome: nome,
        tema: "HTML",
        tempo: document.getElementById("counter").innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz1.length}`,
    });

}

btnResultadoHTML.onclick = () => {
    exibirResultadosNaTabela();
    exibirRanking(0, resultados1.map((resultado) => ({...resultado, pontuacao: parseInt(resultado.pontuacao) })));

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
    const perguntasCSS = document.querySelectorAll("#containerPerguntasCSS div");

    if (!verificarRespostas("CSS")) {
        btnFinalizarCSS.hidden = false;
        btnResultadoCSS.hidden = true;
        return;
    }
    else {
        btnFinalizarCSS.hidden = true;
        btnResultadoCSS.hidden = false;
    }

    perguntasCSS.forEach((pergunta, index) => {
        const opcoes = pergunta.querySelectorAll("input[type=radio]");

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === quiz2[index].respostaCorreta) {
                pontuacao++;
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-correta');
            } else if (opcao.checked){
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-errada');
            }
        });
    });

    resultados2.push({
        nome: nome,
        tema: "CSS",
        tempo: document.getElementById("counter").innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz2.length}`,
    });

}

btnResultadoCSS.onclick = () => {
    exibirResultadosNaTabela();
    exibirRanking(1, resultados2.map((resultado) => ({...resultado, pontuacao: parseInt(resultado.pontuacao) })));
    
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
    const perguntasJS = document.querySelectorAll("#containerPerguntasJavaScript div");

    if (!verificarRespostas("JavaScript")) {
        btnFinalizarJS.hidden = false;
        btnResultadoJS.hidden = true;
        return;
    }
    else {
        btnFinalizarJS.hidden = true;
        btnResultadoJS.hidden = false;
    }

    perguntasJS.forEach((pergunta, index) => {
        const opcoes = pergunta.querySelectorAll("input[type=radio]");

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === quiz3[index].respostaCorreta) {
                pontuacao++;
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-correta');
            } else if (opcao.checked){
                const cardPergunta = opcao.closest('.pergunta-card');
                cardPergunta.classList.add('card-resposta-errada');
            }
        });
    });

    resultados3.push({
        nome: nome,
        tema: "JavaScript",
        tempo: document.getElementById("counter").innerText,
        data: new Date().toISOString(),
        hora: new Date().toISOString(),
        pontuacao: `${pontuacao}/${quiz3.length}`,
    });

}

btnResultadoJS.onclick = () => {
    exibirResultadosNaTabela();
    exibirRanking(2, resultados3.map((resultado) => ({...resultado, pontuacao: parseInt(resultado.pontuacao) })));
    
    escolhaTema.hidden = true;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    cronometro.hidden = true;
    resultados.hidden = false;
    stop();
};

//Botão musica
function play() {
    player.play();
    player.loop = true;
    button.textContent = "Pause";
}

function pause() {
    player.pause();
    button.textContent = "Play";
}

button.addEventListener("click", function () {
    if (player.paused) {
        play();
    } else {
        pause();
    }
});

btnReiniciar.forEach((btn) => {
    btn.onclick = () => {
        document.getElementById("nome").value = "";
        document.getElementById("tema").value = "";
        const h1 = document.querySelector("#titulo")
        h1.textContent = "Quiz do DEV"

        escolhaTema.hidden = false;
        quizHTML.hidden = true;
        quizCSS.hidden = true;
        quizJS.hidden = true;
        cronometro.hidden = true;
        resultados.hidden = true;
        stop();
    };
});

btnReiniciarFinal.onclick = () => {
        document.getElementById("nome").value = "";
        document.getElementById("tema").value = "";
        const h1 = document.querySelector("#titulo")
        h1.textContent = "Quiz do DEV"

        escolhaTema.hidden = false;
        quizHTML.hidden = true;
        quizCSS.hidden = true;
        quizJS.hidden = true;
        cronometro.hidden = true;
        resultados.hidden = true;
        stop();
    };



const escolhaTema = document.getElementById("escolhaTema");
const btnEscolha = document.querySelector("#btnEscolha");
const quizHTML = document.querySelector("#quizHTML");
const quizCSS = document.querySelector("#quizCSS");
const quizJS = document.querySelector("#quizJS");
const btnFinalizarHTML = document.querySelector("#finalizarHTML");
const btnFinalizarCSS = document.querySelector("#finalizarCSS");
const btnFinalizarJS = document.querySelector("#finalizarJS");




btnEscolha.onclick = () => {
    escolhaTema.hidden = true;
    const temaSelecionado = document.getElementById("tema").value;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    

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


// Função para gerar as questões no HTML
function gerarQuestoes(temaSelecionado) {
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
    let pontuacao = 0;

    quiz1.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    alert(`Sua pontuação: ${pontuacao}/${quiz1.length}`);
    escolhaTema.hidden = false;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    stop();
};

btnFinalizarCSS.onclick = () => {
    let pontuacao = 0;

    quiz2.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    alert(`Sua pontuação: ${pontuacao}/${quiz2.length}`);
    escolhaTema.hidden = false;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    stop();
};

btnFinalizarJS.onclick = () => {
    let pontuacao = 0;

    quiz3.forEach((questao, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);

        opcoes.forEach((opcao) => {
            if (opcao.checked && opcao.value === questao.respostaCorreta) {
                pontuacao++;
            }
        });
    });

    alert(`Sua pontuação: ${pontuacao}/${quiz3.length}`);

    escolhaTema.hidden = false;
    quizHTML.hidden = true;
    quizCSS.hidden = true;
    quizJS.hidden = true;
    stop();
};

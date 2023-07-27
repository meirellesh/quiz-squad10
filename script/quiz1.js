const quiz = [
  {
      pergunta: 'Como criar um hyperlink que abra o link em uma nova janela do navegador?',
      respostas: {
          a: '&lt;a href="url" target="_new"&gt;Link&lt;/a&gt;',
          b: '&lt;a href="url" target="_blank"&gt;Link&lt;/a&gt;',
          c: '&lt;a href="url" target="new"&gt;Link&lt;/a&gt;',
          d: '&lt;a href="url" target="window"&gt;Link&lt;/a&gt;'
      },
      respostaCorreta: "b"
  },
  {
    pergunta: 'Qual é a tag correta para isnerir um vídeo em uma página HTML?',
    respostas: {
        a: '&lt;video&gt;',
        b: '&lt;media&gt;',
        c: '&lt;movie&gt;',
        d: '&lt;vid&gt;'
    },
    respostaCorreta: "a"
  },
  {
    pergunta: 'Qual atributo HTML é usado para definir o texto alternativo de uma imagem?',
    respostas: {
        a: 'alt',
        b: 'src',
        c: 'link',
        d: 'title'
    },
    respostaCorreta: "a"
  },
  {
    pergunta: 'Em HTML, qual é o atributo usado para definir um valor padrão em um campo de entrada de texto?',
    respostas: {
        a: 'value',
        b: 'default',
        c: 'placeholder',
        d: 'initial'
    },
    respostaCorreta: "a"
  },
  {
    pergunta: 'Qual é o propósito da tag &lt;header&gt; em HTML5?',
    respostas: {
        a: 'Representar o cabeçalho principal de uma página ou seção.',
        b: 'Inserir um cabeçalho de nível 1.',
        c: 'Agrupar elementos de cabeçalho.',
        d: 'Exibir um menu de navegação fixo no topo da página.'
    },
    respostaCorreta: "a"
  },
  {
    pergunta: 'Qual tag HTML é usada para criar um formulário de entrada de texto longo, como uma área de comentários?',
    respostas: {
        a: '&lt;input type="text"&gt;',
        b: '&lt;textarea&gt;',
        c: '&lt;input type="longtext"&gt;',
        d: '&lt;input type="textarea"&gt;'
    },
    respostaCorreta: "d"
  },
  {
    pergunta: 'Em HTML, como você define o cabeçalho de uma tabela que se estende por várias colunas?',
    respostas: {
        a: '&lt;th scope="colspan"&gt;',
        b: '&lt;th colspan="header"&gt;',
        c: '&lt;th rowspan="header"&gt;',
        d: '&lt;th scope="col"&gt;'
    },
    respostaCorreta: "d"
  },
  {
    pergunta: 'Qual é o significado da sigla "HTML"?',
    respostas: {
        a: 'Hyper Transfer Markup Language',
        b: 'Hyper Text Makeup Language',
        c: 'Hyper Text Markup Language',
        d: 'High Transfer Markup Language'
    },
    respostaCorreta: "c"
  },
  {
    pergunta: 'Em HTML, qual tag é usada para criar uma lista numerada?',
    respostas: {
        a: '&lt;ul&gt;',
        b: '&lt;ol&gt;',
        c: '&lt;list&gt;',
        d: '&lt;dl&gt;'
    },
    respostaCorreta: "b"
  },
  {
    pergunta: 'Qual é a função da tag &lt;meta&gt; no HTML?',
    respostas: {
        a: 'Definir o título da página.',
        b: 'Criar um link para uma folha de estilo CSS externa.',
        c: 'Inserir uma imagem na página.',
        d: 'Fornecer metadados sobre o documento HTML, como conjunto de caracteres e descrição.'
    },
    respostaCorreta: "d"
  },
];

// Função para gerar as questões no HTML
function gerarQuestoes() { 
  const perguntas = document.getElementById("containerPerguntas");

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

      div.innerHTML += '<br>';
      perguntas.appendChild(div);
  });
}

gerarQuestoes();

// Função para calcular a pontuação total
function calcularPontuacao() {
  let pontuacao = 0;

  quiz.forEach((questao, index) => {
      const opcoes = document.getElementsByName(`pergunta${index}`);
      
      opcoes.forEach(opcao => {
          if (opcao.checked && opcao.value === questao.respostaCorreta) {
              pontuacao++;
          }
      });
  });

  alert(`Sua pontuação: ${pontuacao}/${quiz.length}`);
}
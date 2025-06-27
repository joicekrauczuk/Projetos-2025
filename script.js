const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";
const perguntas = ["Pergunta 1", "Pergunta 2"];
const perguntas = [
     {
      enunciado: "Pergunta 1",
     alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
      enunciado: "Pergunta 2",
      alternativas: ["Alternativa 1", "Alternativa 2"],
    },
  ];
  const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
  {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
];
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {}

mostraPergunta();
const alternativa
(const alternativa of perguntaAtual.alternativas)
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  atual++;
  mostraPergunta();
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  atual++;
  mostraPergunta();
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
var botaoDescobrir = document.getElementById('descobrir');

function mostrarFato() {
    alert("O elefante é o maior animal terrestre!");
}

botaoDescobrir.addEventListener("clicar", mostrarFato);
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}
function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
let historiaFinal = "";
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}
button {
  background-color: var(--cor-principal);
  color: var(--cor-destaque);
  border: none;
  border-radius: 15px;
  padding: 15px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: var(--cor-destaque);
  color: var(--cor-secundaria);
}
// Trecho ilustrativo do arquivo script.js
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia...",
alternativas: [
  {
    texto: "Isso é assustador!",
    afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
  },
  {
    texto: "Isso é maravilhoso!",
    afirmacao: "Quis saber como usar IA no seu dia a dia."
  }
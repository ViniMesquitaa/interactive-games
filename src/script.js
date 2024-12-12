const questions = [
  {
    question: "O que significa HTML?",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HighText Markup Language",
      "HyperTool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Qual tag é usada para criar links?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
  },
  {
    question: "Qual atributo adiciona um texto alternativo em imagens?",
    options: ["src", "alt", "title", "description"],
    correctAnswer: 1,
  },
  {
    question: "Qual propriedade muda a cor do texto?",
    options: ["color", "background-color", "font-color", "text-color"],
    correctAnswer: 0,
  },
  {
    question: "Como definimos uma classe no CSS?",
    options: [".class", "#class", "@class", "$class"],
    correctAnswer: 0,
  },
  {
    question: "Qual unidade é relativa ao tamanho da fonte?",
    options: ["em", "px", "%", "rem"],
    correctAnswer: 0,
  },
  {
    question: "Qual método exibe mensagens no console?",
    options: ["console.log", "alert", "print", "write"],
    correctAnswer: 0,
  },
  {
    question: "Como declaramos uma variável em ES6?",
    options: ["let", "var", "int", "define"],
    correctAnswer: 0,
  },
  {
    question: "Qual operador é usado para comparação estrita?",
    options: ["==", "!=", "===", "="],
    correctAnswer: 2,
  },
];

//depois separa as funções, organiza direitinho, implementei so pra testar e pra mostrar como é caso tivessem dúvidas...
function startGameOnClickAndHidenTheStartScreen() {
  document.getElementById("start-button").onclick = function () {
    var questionScreen = document.getElementById("question-screen");
    var startScreen = document.getElementById("start-screen");

    if (questionScreen.style.display === "none" || questionScreen.style.display === "") {
      questionScreen.style.display = "block";
      startScreen.style.display = "none"
    } else {
      questionScreen.style.display = "none"
    }
  }

  //depois ajeita direitinho e apaga o comentario, fiz so pra mostrar caso tivessem duvidas
 
    var comeBackButtonAndHidenTheQuestionScreen = document.getElementById("comeback-button").onclick = function () {
      var questionScreen = document.getElementById("question-screen");
      var startScreen = document.getElementById("start-screen");

      if (startScreen.style.display === "none" || startScreen.style.display === "") {
        startScreen.style.display = "block"
        questionScreen.style.display = "none"

      } 
  }


}

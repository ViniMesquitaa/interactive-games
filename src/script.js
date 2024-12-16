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
    question: "Qual método é utilizado para remover o último item de um array em JavaScript?",
    options: ["pop()", "shift()", "remove()", "slice()"],
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

const startScreen = document.getElementById("start-screen");
const scoreElement = document.getElementById("score");
const comebackButton = document.getElementById("comeback-button");
const questionScreen = document.getElementById("question-screen");
const questionElement = document.getElementById("question");
const optionsElements = document.getElementById("options");

let score = 0;
let shuffledQuestions = [];
let questionIndex = 0;

function startGameOnClickAndHidenTheStartScreen() {
  shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  score = 0;
  scoreElement.textContent = score;

  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion(){
  const question = shuffledQuestions[questionIndex];
  questionElement.textContent = question.question;
  optionsElements.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("button");

    button.onclick = () => handleAnswer(index);
    optionsElements.appendChild(button);

  });
  updateProgress();
}

function updateProgress() {
  const totalQuestions = shuffledQuestions.length;
  const progressText = document.getElementById("text-progress");
  const progressBarLine = document.getElementById("bar-line");

  progressText.textContent = `${questionIndex + 1}/${totalQuestions}`;

  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;
  progressBarLine.style.width = `${progressPercentage}%`;
}

function handleAnswer(selectedOption) {
  const question = shuffledQuestions[questionIndex];
  const buttons = optionsElements.querySelectorAll("button");

  optionsElements.classList.add("no-hover");

  buttons.forEach((button, index) => {
    if (index === question.correctAnswer) {
      button.classList.add("correct");
    }

    if (index === selectedOption) {
      button.classList.add("wrong");
    }
  });

  if (selectedOption === question.correctAnswer) {
    score++;
    scoreElement.textContent = score;
    setTimeout(() => {
      questionIndex++;
      optionsElements.classList.remove("no-hover");
      if (questionIndex < shuffledQuestions.length) {
        showQuestion();
      } else {
        alert(`Parabéns! Você acertou todas!`);
        location.reload();
      }
    }, 1500);
  } else {
    setTimeout(() => {
      // showGameOver()
      location.reload();
    }, 1500);
  }
  updateProgress();
}

const gameOverScreen = document.getElementById("game-over-screen");

function showGameOver() {
  gameOverScreen.classList.remove("hidden");
  questionScreen.classList.add("hidden");
  finalScore.textContent = score;
}

function comeBackButtonAndHidenTheQuestionScreen() {
  startScreen.classList.remove("hidden");
  gameOverScreen.classList.add("hidden");
} 

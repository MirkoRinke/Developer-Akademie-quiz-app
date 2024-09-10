let questionsCategory = quiz.HTML;
let currentQuestions = 0;
let quizStarted = false;
let correctAnswers = 0;
let waitForQuestion = false;
const soundFail = new Audio("./assets/sounds/fail.mp3");
const soundSuccess = new Audio("./assets/sounds/tada.mp3");

function quest(category) {
  quizStarted = true;
  questionsCategory = quiz[category];
  getRenderContent();
}

function getNextQuestion() {
  waitForQuestion = false;
  currentQuestions++;
  getRenderContent();
}

function getRenderContent() {
  let contentRef = document.getElementById("content");
  if (quizStarted && currentQuestions <= questionsCategory.length - 1) {
    quizAnswerTemplate = renderAnswer();
    contentRef.innerHTML = renderContentQuestions(quizAnswerTemplate);
    getCurrentQuestions();
    getMaxQuestions();
    showCurrentQuestions();
  } else if (currentQuestions >= questionsCategory.length) {
    contentRef.innerHTML = renderContentEnd();
    questEnd();
  } else {
    quizCategoriesTemplate = renderCategory();
    contentRef.innerHTML = renderContentStart(quizCategoriesTemplate);
  }
}
getRenderContent();

function renderCategory() {
  let quizCategoriesTemplate = [];
  let categories = Object.keys(quiz);
  for (let index = 0; index < categories.length; index++) {
    let category = categories[index];
    quizCategoriesTemplate += renderCategoryTemplate(category, index);
  }
  return quizCategoriesTemplate;
}

function renderAnswer() {
  let quizAnswerTemplate = [];
  let quizAnswers = Object.keys(questionsCategory[currentQuestions].answers);
  for (let index = 1; index < quizAnswers.length + 1; index++) {
    quizAnswerTemplate += renderAnswerTemplate(index);
  }

  return quizAnswerTemplate;
}

function getMaxQuestions() {
  let maxQuestionsRef = document.getElementById("max_questions");
  maxQuestionsRef.innerHTML = questionsCategory.length;
}

function getCurrentQuestions() {
  let currentQuestionsRef = document.getElementById("current_questions");
  currentQuestionsRef.innerHTML = currentQuestions + 1;
  getProgressBar(currentQuestions);
}

function showCurrentQuestions() {
  let currentQuestion = document.getElementById("currentQuestion");
  currentQuestion.innerHTML = questionsCategory[currentQuestions].question;
  let answer = Object.keys(questionsCategory[currentQuestions].answers);
  for (let index = 1; index < answer.length + 1; index++) {
    let answer = document.getElementById(`answer_${index}`);
    let answerKey = `answer${index}`;
    answer.innerHTML = questionsCategory[currentQuestions].answers[answerKey];
  }
}

function answer(answer) {
  let rightAnswerRef = questionsCategory[currentQuestions].right_answer;
  if (answer == rightAnswerRef && waitForQuestion == false) {
    document.getElementById("answer_" + answer).classList.add("bg-success");
    correctAnswers++;
    waitForQuestion = true;
    soundSuccess.play();
  } else if (waitForQuestion == false) {
    waitForQuestion = true;
    soundFail.play();
    document.getElementById("answer_" + answer).classList.add("bg-danger");
    document.getElementById("answer_" + rightAnswerRef).classList.add("bg-success");
  }
  document.getElementById("next_question").removeAttribute("disabled");
}

function getCorrectAnswers() {
  let correctAnswersRef = document.getElementById("correctAnswers");
  correctAnswersRef.innerHTML = correctAnswers;
}

function maxCorrectAnswers() {
  let maxCorrectAnswersRef = document.getElementById("maxCorrectAnswers");
  maxCorrectAnswersRef.innerHTML = questionsCategory.length;
}

function getProgressBar() {
  let answer = Object.keys(questionsCategory);
  let progressBarRef = document.getElementById("progress-bar");
  const totalQuestions = answer.length;
  let progressPercent = (currentQuestions / totalQuestions) * 100;
  progressBarRef.innerHTML = Math.round(progressPercent) + "%"; // https://www.w3schools.com/jsref/jsref_round.asp
  progressBarRef.style.width = Math.round(progressPercent) + "%";
}

function questEnd() {
  currentQuestions = 0;
  quizStarted = false;
  getCorrectAnswers();
  maxCorrectAnswers();
  correctAnswers = 0;
}

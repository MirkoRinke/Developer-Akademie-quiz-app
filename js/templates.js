function renderContentStart(quizCategoriesTemplate) {
  return /*html*/ `
    <div class="card card_quiz">
        <img src="./assets/img/quiz_app.png" class="card-img-top" alt="..." />
        <div class="card-body px-3 py-3">
            <h5 class="card-title text-center">Starte dein Quiz</h5>
        </div>
        <ul class="list-group list-group-flush px-3 pb-3 gap-2">
        ${quizCategoriesTemplate}
    </ul>
    </div>
`;
}

function renderCategoryTemplate(category, index) {
  return /*html*/ `
      <li onclick="quest('${category}')" id="quest_${index}" class="list-group-item rounded">
          ${category}
      </li>
  `;
}

function renderContentQuestions(quizAnswerTemplate) {
  return /*html*/ `
    <div class="card card_quiz">
        <img src="./assets/img/quiz_app.png" class="card-img-top" alt="..." />
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div id="progress-bar" class="progress-bar" style="width: 0%">0%</div>
        </div>
        <div class="card-body px-3 py-2">
            <h5 id="currentQuestion" class="card-title"></h5>
        </div>
        <ul class="list-group list-group-flush px-3 pb-3 gap-2">
            ${quizAnswerTemplate}
        </ul>
        <div class="card-body d-flex justify-content-between">
            <span><span id="current_questions" ></span> von <span id="max_questions"></span></span>
            <button onclick="getNextQuestion()" disabled type="button" id="next_question" class="btn btn-primary">Nächste Frage</button>
        </div>
    </div>
`;
}

function renderAnswerTemplate(index) {
  return /*html*/ `
          <li onclick="answer('${index}')" id="answer_${index}" class="list-group-item rounded"></li>
    `;
}

function renderContentEnd() {
  return /*html*/ `
      <div class="card card_quiz">
          <img src="./assets/img/quiz_app.png" class="card-img-top" alt="..." />
          <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div id="progress-bar" class="progress-bar" style="width: 100%">100%</div>
        </div>
          <div class="card-body d-flex justify-content-between px-3 py-2">
              <h5 class="card-title ">Du hattest <span id="correctAnswers">X</span> von <span id="maxCorrectAnswers"></span> richtig</h5>
          </div>
          <button onclick="getRenderContent()" type="button" id="next_question" class="btn btn-primary">Neues Quiz Starten</button>
      </div>
  `;
}

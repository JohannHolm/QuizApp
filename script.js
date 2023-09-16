let questions = [
  {
    question: 'Wer gilt als Begründer der Chemotherapie?',
    answer_1: 'Paul Ehrlich',
    answer_2: 'Jana Ermi',
    answer_3: 'Carl von Linné',
    answer_4: 'Sir Frederick Grnat Banting',
    right_answer: 1,
  },
  {
    question: 'Wie wird ein Augenarzt auch genannt?',
    answer_1: 'Ophthalmologe',
    answer_2: 'Kardiologe',
    answer_3: 'Urologe',
    answer_4: 'Neurologe',
    right_answer: 1,
  },
  {
    question:
      'Wie wird ein Malignom umgangssprachlich auch bezeichnet?',
    answer_1: 'Fremdkörper',
    answer_2: 'Schwellung',
    answer_3: 'Pickel',
    answer_4: 'Krebs',
    right_answer: 4,
  },
  {
    question: 'Womit beschäftigt sich die Chirugie?',
    answer_1: 'Hautkrankheiten',
    answer_2: 'Arnzneimittellehre',
    answer_3: 'tropische Krankheiten',
    answer_4: 'Operative Behandlung',
    right_answer: 4,
  },
  {
    question: 'Wo findet man den Hallux?',
    answer_1: 'Fuß',
    answer_2: 'Schädel',
    answer_3: 'Hand',
    answer_4: 'Brust',
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById('all-questions').innerHTML =
    questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
  } else {
    let question = questions[currentQuestion];

    document.getElementById('current-question-number').innerHTML =
      currentQuestion + 1;
    document.getElementById('questiontext').innerHTML =
      question['question'];
    document.getElementById('answer_1').innerHTML =
      question['answer_1'];
    document.getElementById('answer_2').innerHTML =
      question['answer_2'];
    document.getElementById('answer_3').innerHTML =
      question['answer_3'];
    document.getElementById('answer_4').innerHTML =
      question['answer_4'];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) {
    document
      .getElementById(selection)
      .parentNode.classList.add('bg-success');
  } else {
    document.getElementById('current-question-number').innerHTML =
      currentQuestion + 1;
    document
      .getElementById(selection)
      .parentNode.classList.add('bg-danger');
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add('bg-success');
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document
    .getElementById('answer_1')
    .parentNode.classList.remove('bg-danger');
  document
    .getElementById('answer_1')
    .parentNode.classList.remove('bg-success');
  document
    .getElementById('answer_2')
    .parentNode.classList.remove('bg-danger');
  document
    .getElementById('answer_2')
    .parentNode.classList.remove('bg-success');
  document
    .getElementById('answer_3')
    .parentNode.classList.remove('bg-danger');
  document
    .getElementById('answer_3')
    .parentNode.classList.remove('bg-success');
  document
    .getElementById('answer_4')
    .parentNode.classList.remove('bg-danger');
  document
    .getElementById('answer_4')
    .parentNode.classList.remove('bg-success');
}

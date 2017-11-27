var chap2Questions = [
  'A(n) _________ allows you to execute a related group of statements as a single unit.',
  'Parameters in a function definition are placed within __________.',
  'A Variable that is declared outside a function is called a(n) __________ variable.',
  'Which one of the following creates a local variable?',
  'Which of the following is a primitive data type in JavaScript?',
  'Which of the following describes JavaScript?',
  'Which of the following is an integer?',
  'Which of the following is a Boolean value',
  'Which of the following creates an empty string?',
  'Which of the following is a valid JavaScript statement?',
  'Which of the following is a concatenation operator?',
  'Which of the following is the JavaScript escape character?',
  'Which of the following is an arithmetic binary operator?',
  'which of the following is an arithmetic unary operator?',
  'What is the result of the statement 5 < 4?',
  'Do you need to study more?'
];

var chap2Answers = [
  ['variable', 'statement', 'event', 'function'],
  ['braces', 'parentheses', 'double quotes', 'single quotes'],
  ['class', 'local', 'global', 'program'],
  ['Declaring it outside of a function with the <strong>var</strong> keyword', 'Declaring it outside of a function without the <strong>var</strong> keyword', 'Declaring it inside of a function with the <strong>var</strong> keyword', 'Declaring it inside of a function without the <strong>var</strong> keyword'],
  ['Boolean', 'Integer', 'Floating-point', 'Logical'],
  ['Strongly typed', 'Statically typed', 'Loosely typed', 'Untyped'],
  ['-2.5', '6.02e23', '-11', '0.03'],
  ['3.04', 'true', '\"Greece\"', '6.02e23'],
  ['<strong>null</strong>', '<strong>undefined</strong>', '\"\"', '0'],
  ['document.write(\'Boston, MA is called \'Beantown.\'\')', 'document.write(\"Boston, MA is called \"Beantown.\"\")', 'document.write(\"Boston, MA is called \'Beantown.\"\')', 'document.write(\"Boston, MA is called \'Beantown.\'\")'],
  ['>', '+', '||', '++'],
  ['\"', '\'', '\\', '/'],
  ['+', '||', '=', '&&'],
  ['++', '||', '=', '&&'],
  ['1', 'yes', 'true', 'false'],
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap2Correct = [
  'function',
  'parentheses',
  'global',
  'Declaring it inside of a function with the <strong>var</strong> keyword',
  'Boolean',
  'Loosely typed',
  '-11',
  'true',
  '\"\"',
  'document.write(\"Boston, MA is called \'Beantown.\'\")',
  '+',
  '\\',
  '+',
  '++',
  'false',
  ''
];

var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var header = document.querySelector('header');
var questElement = document.querySelector('#question');
var currentQuestion;
var currentAnswers;
var currentCorrect;
var clickedColor;
var counter = 0;

function pickQuestion(){
  if (counter < chap2Questions.length) {
    currentQuestion = chap2Questions[counter];
    currentAnswers = chap2Answers[counter];
    currentCorrect = chap2Correct[counter];
    questElement.innerHTML = currentQuestion;
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = currentAnswers[i];
    }
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', winLose, false);
    }
  }
}

function delay(){
  counter = 0;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
  }
  setTimeout(pickQuestion, 3000);
}

function winLose () {
  var clickedColor = this.innerHTML;
  if (counter === chap2Questions.length - 1) {
    if (clickedColor === currentAnswers[0]) {
      questElement.innerHTML = 'More practice for you!';
    } else if (clickedColor === currentAnswers[1]) {
      questElement.innerHTML = 'Get to studying you bum!';
    } else if (clickedColor === currentAnswers[2]) {
      questElement.innerHTML = 'Aren\'t you special, study more anyway!';
    } else if (clickedColor === currentAnswers[3]) {
      questElement.innerHTML = 'Too bad! Study more to relieve the pain!';
    }
    delay();
  } else {
    if (clickedColor === currentCorrect) {
      messageDisplay.textContent = '';
      counter ++;
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '';
        squares[i].style.color = '';
      }
    } else {
      this.style.backgroundColor = '#232323';
      this.style.color = '#232323';
      this.style.border = 'solid #232323 1px';
      messageDisplay.textContent = 'Try Again';
    }
    pickQuestion();
  }
}

function reset(){
  counter = 0;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
  }
  pickQuestion();
}

function back(){
  if (counter !== 0) {
    counter--;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = '';
      squares[i].style.color = '';
    }
    pickQuestion();
  }
}

function skip(){
  if (!(counter === (chap2Questions.length - 1))){
    counter++;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = '';
      squares[i].style.color = '';
    }
    pickQuestion();
  }
}

if (modeButtons[0].addEventListener) {
modeButtons[0].addEventListener('click', back, false);
} else if (modeButtons[0].attachEvent) {
  modeButtons[0].attachEvent('onclick', back);
}

if (modeButtons[1].addEventListener) {
modeButtons[1].addEventListener('click', skip, false);
} else if (modeButtons[1].attachEvent) {
  modeButtons[1].attachEvent('onclick', skip);
}

if (resetButton.addEventListener) {
  resetButton.addEventListener('click', reset, false);
} else if (resetButton.attachEvent) {
  resetButton.attachEvent('onclick', reset);
}

if (window.addEventListener) {
window.addEventListener('load', pickQuestion, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', pickQuestion);
}

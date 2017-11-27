var chap3Questions = [
  'What is the correct syntax for creating an empty array named <strong>taxRules</strong>?',
  'Which of the following statements adds the value \"oak\" as the third element of the <strong>trees</strong> array?',
  'Which of the following properties returns the numbers of elements in an array?',
  'Whichcharacters are used to create a command block?',
  'You track the progress of a loop with a(n) ____________.',
  'The statements in a(n) ____________ statement always execute at least one.',
  'If you do not include code that changes the counter value in a loop statement, your program will be caught in a(n) _____________.',
  'When is a <strong>for</strong> statement initialization expression executed?',
  'The parentheses at the start of a(n) ___________ statement can include code that initializes a counter and changes its value with each iteration.',
  'The __________ statement halts a looping statement and restarts the loop with a new iteration.',
  'An <strong>if</strong> statement can include multiple statements provided that they ___________.',
  'A simple <strong>if/else</strong> statements enables you to specify code for _________ alternatives.',
  'The _____________ statement is equivalent to the conditional operator (?:).',
  'A <strong>switch</strong> statement compares the value of an expression to a value contained in a(n) ___________.',
  'When the value returned by a <strong>switch</strong> statement expression does not match a <strong>case</strong> label, then the statements within the _________ label execute.',
  'Do you need to study more?'
];

var chap3Answers = [
  ['var taxRules = {};', 'var taxRules;', 'var taxRules = [];', 'var taxRules[5];'],
  ['trees += \"oak\";', 'trees += \"\",\"\",\"oak\";', 'trees[2] = \"oak\";', 'trees[3] = \"oak\";'],
  ['length', 'size', 'elements', 'indexes'],
  ['( )', '[ ]', '{ }', '< >'],
  ['counter', 'iteration', 'increment', 'decrement'],
  ['for', 'do/while', 'switch', 'if'],
  ['iteration', 'condition', 'fallthrough', 'infinite loop'],
  ['When the <strong>for</strong> statement begins executing', 'With each repitition of the <strong>for</strong> statement', 'When the counter variable is incremented', 'When the <strong>for</strong> statement ends'],
  ['while', 'do', 'do/while', 'for'],
  ['restart', 'continue', 'break', 'halt'],
  ['execute after the <strong>if</strong> statement\'s closing semicolon', 'are not contained within a command block', 'do not include other <strong>if</strong> statements', 'are contained within a command block'],
  ['2', '3', '4', 'unlimited'],
  ['if', 'if/else', 'nested if', 'switch'],
  ['<strong>default</strong> label', '<strong>case</strong> label', 'fallthrough', '<strong>break</strong> statement'],
  ['error', 'else', 'exception', 'default'],
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap3Correct = [
  'var taxRules = [];',
  'trees[2] = \"oak\";',
  'length',
  '{ }',
  'counter',
  'do/while',
  'infinite loop',
  'When the <strong>for</strong> statement begins executing',
  'for',
  'continue',
  'are contained within a command block',
  '2',
  'if/else',
  '<strong>case</strong> label',
  'default',
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
  if (counter < chap3Questions.length) {
    currentQuestion = chap3Questions[counter];
    currentAnswers = chap3Answers[counter];
    currentCorrect = chap3Correct[counter];
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
  if (counter === chap3Questions.length - 1) {
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
  if (!(counter === (chap3Questions.length - 1))){
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

// Tyler Schum
// 11/21/17

var chap6Questions = [
  'Objects representing each of the controls in a form are stored in the _______ collection.',
  'Which of the folowing type values for the input element does <em>not</em> enable you to provide users with a limited set of choices?',
  'What value of the <em>selectedIndex</em> property of a <em>select</em> object corresponds to no selection?',
  'To simulate the behavior of placeholder text in older browsers, you can instead set the value of the _____________ property.',
  'Which event do you use to call a function when a user selects a field or moves the insertion point into a field?',
  'Which event do you use to call a function when a field is no longer selected, or a user moves the insertion point to a different field?',
  'Which of the following attributes determines whether a check box or option button is selected?',
  'What do you assign to the <em>value</em> property of a text input box to remove its content?',
  'Which of the following attributes triggers browser-based validation in modern browsers?',
  'Which of the following input <em>type</em> value triggers browser-based validation in modern browsers?',
  'Which of the following properties has a value of <em>true</em> when a user has left a required field blank?',
  'Which of the following attributes for form child elements would you use for a field that must have a value before the form can be submitted?',
  'What method do you use to disable the default behavior for an event?',
  'Which statement moves the browser to the top of the page?',
  'For any fields that require numeric values, you can use Javascript\'s built-in _________ function to determine whether the user actually entered a number.',
  'Do you need to study more?'
  ];

var chap6Answers = [
  ['a. forms', 'b. controls', 'c. inputs', 'd. elements'],
  ['a. radio', 'b. email', 'c. checkbox', 'd. range'],
  ['a. -1', 'b. 0', 'c. 1', 'd. false'],
  ['a. src', 'b. alt', 'c. title', 'd. value'],
  ['a. blur', 'b. focus', 'c. input', 'd. forminput'],
  ['a. blur', 'b. focus', 'c. click', 'd. forminput'],
  ['a. checked', 'b. defaultChecked', 'c. selected', 'd. focus'],
  ['a. false', 'b. true', 'c. \"\"', 'd. null'],
  ['a. max', 'b. title', 'c. alt', 'd. src'],
  ['a. password', 'b. text', 'c. radio', 'd. number'],
  ['a. required', 'b. valueMissing', 'c. patternMismatch', 'd. typeMismatch'],
  ['a. novalidate', 'b. min', 'c. required', 'd. max'],
  ['a. preventDefault()', 'b. checkValidity()', 'c. select()', 'd. getElementById()'],
  ['a. scroll(top)', 'b. scroll(0,0)', 'c. move(top)', 'd. move(0,0)'],
  ['a. value()', 'b. integer()', 'c. isNumber()', 'd. isNaN()'],
  ['a. A little', 'b. Definitely', 'c. I\'m a Javascript God', 'd. Life is pain']
];

var chap6Correct = [
  'd. elements',
  'b. email',
  'a. -1',
  'd. value',
  'b. focus',
  'a. blur',
  'a. checked',
  'c. \"\"',
  'a. max',
  'd. number',
  'b. valueMissing',
  'c. required',
  'a. preventDefault()',
  'b. scroll(0,0)',
  'd. isNaN()',
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
  if (counter < chap6Questions.length) {
    currentQuestion = chap6Questions[counter];
    currentAnswers = chap6Answers[counter];
    currentCorrect = chap6Correct[counter];
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
  if (counter === chap6Questions.length -1) {
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
  if (!(counter === (chap6Questions.length - 1))){
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

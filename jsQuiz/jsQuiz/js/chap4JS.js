var chap4Questions = [
  'What type of error occurs when the interpreter fails to recognize code?',
  '________ errors are problems in the design of a program that prevent it from running as you anticipate.',
  'When a JavaScript interpreter encounters a problem while a program is executing, that problem is called a(n) _________ error.',
  'Which  of the following statements cause a syntax error?',
  'Which of the following statements writes the value of the <strong>hi</strong> variable to the console?',
  'Which of the following <strong>for</strong> statements is logically incorrect?',
  'Which of the following modes temporarily suspends, or pauses, program execution so that you can monitor values and trace program execution?',
  'Which command executes all of the statements in the next function in browser debugging tools?',
  'After you throw an error, you use a(n) ________ statement to handle the error.',
  'In ________, some features are removed from the JavaScript language. while other features require more stringent syntax.',
  'Which of the following pieces of information is passed as an argument from a <strong>throw</strong> statement to a <strong>catch</strong> statement.',
  'What statement can you add to your code to effectively serve the same role as a breakpoint?',
  'The watch list in browser debugging tools lets you monitor the value of a(n) _________ during program execution.',
  'The __________ is the ordered list maintained by the JavaScript processor containing all the procedures, such as functions, methods, or event handlers, that have been called but have not yet finished processing.',
  'Which of the following exception handling code executes regardless of whether its associated <strong>try</strong> block throws an exception?',
  'Do you need to study more?'
];

var chap4Answers = [
  ['Debugging', 'Syntax', 'Run-time', 'Logic'],
  ['Application', 'Syntax', 'Logic', 'Run-time'],
  ['application', 'syntax', 'logic', 'run-time'],
  ['var firstName = \"\";', 'document.write(Available points: \" + availPoints);', 'readyState = true;', '\"use strict\";'],
  ['console.log(\"hi\");', 'document.console(\"hi\");', 'console.alert(hi);', 'console.log(hi);'],
  ['for (var i=10; i<=0; i++) {document.write(i)}', 'for (var i=0; i<=10; i++) {\ndocument.write(i)\n}', 'for (var i=10; i>=0; i--) {\ndocument.write(i)\n}', 'for (var i=5; i<=0; i--) {\ndocument.write(i)\n}'],
  ['Suspend', 'Step', 'Break', 'Continue'],
  ['Step out', 'Step Over', 'Step', 'Step in/into'],
  ['try', 'throw', 'catch', 'finally'],
  ['exception handling', 'strict mode', 'debugging tools', 'debugger mode'],
  ['Error number', 'Error message', 'Line number', 'URL'],
  ['break;', 'breakpoint;', 'debug;', 'debugger;'],
  ['function', 'exception handler', 'expression', 'statement'],
  ['variable list', 'watch list', 'strict mode', 'call stack'],
  ['throw \"Please enter your last name.\";', 'catch(err) {\n return false;\n}', 'catch(err) {\nwindow.alert(err)\nreturn false;\n}', 'finally {\nerr = true;\n}'],
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap4Correct = [
  'Syntax',
  'Logic',
  'run-time',
  'document.write(Available points: \" + availPoints);',
  'console.log(hi);',
  'for (var i=10; i<=0; i++) {document.write(i)}',
  'Break',
  'Step over',
  'catch',
  'strict mode',
  'Error message',
  'debugger;',
  'expression',
  'call stack',
  'finally {\nerr = true;\n}'
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
  if (counter < chap4Questions.length) {
    currentQuestion = chap4Questions[counter];
    currentAnswers = chap4Answers[counter];
    currentCorrect = chap4Correct[counter];
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
  var clickedColor = this.textContent;
  if (counter === chap4Questions.length - 1) {
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
  if (!(counter === (chap4Questions.length - 1))){
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

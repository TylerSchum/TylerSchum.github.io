var chap1Questions = [
'A URL is a type of _______.',
'What organization oversees the development of web technology standards?',
'The markup language originally developed to create web pages and still in use today is called ________.',
'_________ is a separate, complementary language to HTML that was developed for specifying the appearance of webpage elements.',
'Elements that do not require a closing tag are called _____________ elements.',
'What is the root element of an HTML document?',
'A system consisting of a client and a server is known as a ________.',
'What is usually the primary role of a client?',
'Which of the following functions does the processing tier <em>not</em> handle in a three-tier client/server system?',
'Which of the following uses the correct case?',
'Which of the following is <em>not</em> a valid identifier?',
'When you assign a specific value to a variable on its creation, you _____ it.',
'Code that tells a browser what to do in response to a specific event on a specific element is called a(n) ___________.',
'Which method displays a dialog box with an OK button?',
'A section of a document that is not interpreted as markup is referred to as _________.',
'Do you need to study more?'
];

var chap1Answers = [
['web page', 'URI', 'link', 'network'],
['U.S. Department of Defense', 'World Wide Web Consortium', 'Stanford University', 'United Nations'],
['HTML', 'SGML', 'XML', 'CSS'],
['XHTML', 'SGML', 'XML', 'CSS'],
['independent', 'empty', 'permanent', 'constant'],
['head', 'body', 'html', 'script'],
['mainframe topology', 'double-system architecture', 'two-tier system', 'wide area network'],
['locating records that match a request', 'heavy processing, such as calculations', 'data storage', 'the presentation of an interface to the user'],
['Processing and calculations', 'Reading and writing of information to the data storage tier', 'The return of any information to the data storage tier', 'Data storage'],
['Document.write()', 'document.write()', 'document.Write()', 'Document.Write()'],
['$InterestRate', '2QInterest Rate', 'interestRate', '_interestRate'],
['declare', 'call', 'assign', 'initialize'],
['method', 'event handler', 'response', 'procedure'],
['document.write()', 'document.writeln()', 'window.alert()', 'window.popup()'],
['PDATA', 'CDATA', 'PCDATA', 'CPDATA'],
['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap1Correct = [
'URI',
'World Wide Web Consortium',
'HTML',
'CSS',
'empty',
'html',
'two-tier system',
'the presentation of an interface to the user',
'Data storage',
'document.write()',
'2QInterest Rate',
'initialize',
'event handler',
'window.alert()',
'CDATA',
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
  if (counter < chap1Questions.length) {
    currentQuestion = chap1Questions[counter];
    currentAnswers = chap1Answers[counter];
    currentCorrect = chap1Correct[counter];
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
  if (counter === chap1Questions.length - 1) {
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
  if (!(counter === (chap1Questions.length - 1))){
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

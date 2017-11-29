var chap1Questions = [
//1
  'A URL is a type of _______.',
//2
  'What organization oversees the development of web technology standards?',
//3
  'The markup language originally developed to create web pages and still in use today is called ________.',
//4
  '_________ is a separate, complementary language to HTML that was developed for specifying the appearance of webpage elements.',
//5
  'Elements that do not require a closing tag are called _____________ elements.',
//6
  'What is the root element of an HTML document?',
//7
  'A system consisting of a client and a server is known as a ________.',
//8
  'What is usually the primary role of a client?',
//9
  'Which of the following functions does the processing tier <em>not</em> handle in a three-tier client/server system?',
//10
  'Which of the following uses the correct case?',
//11
  'Which of the following is <em>not</em> a valid identifier?',
//12
  'When you assign a specific value to a variable on its creation, you _____ it.',
//13
  'Code that tells a browser what to do in response to a specific event on a specific element is called a(n) ___________.',
//14
  'Which method displays a dialog box with an OK button?',
//15
  'A section of a document that is not interpreted as markup is referred to as _________.',
//custom
  'Do you need to study more?'
];

var chap1Answers = [
//1
  ['web page', 'URI', 'link', 'network'],
//2
  ['U.S. Department of Defense', 'World Wide Web Consortium', 'Stanford University', 'United Nations'],
//3
  ['HTML', 'SGML', 'XML', 'CSS'],
//4
  ['XHTML', 'SGML', 'XML', 'CSS'],
//5
  ['independent', 'empty', 'permanent', 'constant'],
//6
  ['head', 'body', 'html', 'script'],
//7
  ['mainframe topology', 'double-system architecture', 'two-tier system', 'wide area network'],
//8
  ['locating records that match a request', 'heavy processing, such as calculations', 'data storage', 'the presentation of an interface to the user'],
//9
  ['Processing and calculations', 'Reading and writing of information to the data storage tier', 'The return of any information to the data storage tier', 'Data storage'],
//10
  ['Document.write()', 'document.write()', 'document.Write()', 'Document.Write()'],
//11
  ['$InterestRate', '2QInterest Rate', 'interestRate', '_interestRate'],
//12
  ['declare', 'call', 'assign', 'initialize'],
//13
  ['method', 'event handler', 'response', 'procedure'],
//14
  ['document.write()', 'document.writeln()', 'window.alert()', 'window.popup()'],
//15
  ['PDATA', 'CDATA', 'PCDATA', 'CPDATA'],
//custom
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap1Correct = [
//1
  'URI',
//2
  'World Wide Web Consortium',
//3
  'HTML',
//4
  'CSS',
//5
  'empty',
//6
  'html',
//7
  'two-tier system',
//8
  'the presentation of an interface to the user',
//9
  'Data storage',
//10
  'document.write()',
//11
  '2QInterest Rate',
//12
  'initialize',
//13
  'event handler',
//14
  'window.alert()',
//15
  'CDATA',
//custom
  ''
];

var altFacts = [
//1
  ['A Web page is a document on the web.', 'A URI is a generic term for types of names and addresses on the web.', 'A link is a webpage element that contains a refreence to a specific webpage.', 'A network is a group or system of interconnected people or things.'],
//2
  ['The department that coordinates all agencies and functions of the government concerned directly with national security and the United States Armed Forces', 'The World Wide Web Consortium is the main international standards organization for the World Wide Web.', 'Stanford University is a private research university in Stanford, California.', 'The United Nations is an intergovernmental organization tasked to promote international cooperation and to create and maintain international order.'],
//3
  []
]

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

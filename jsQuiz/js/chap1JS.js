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
  ['web page',
  'URI',
  'link',
  'network'],
//2
  ['U.S. Department of Defense',
  'World Wide Web Consortium',
  'Stanford University',
  'United Nations'],
//3
  ['HTML',
  'SGML',
  'XML',
  'CSS'],
//4
  ['XHTML',
  'SGML',
  'XML',
  'CSS'],
//5
  ['independent',
  'empty',
  'permanent',
  'constant'],
//6
  ['head',
  'body',
  'html',
  'script'],
//7
  ['mainframe topology',
  'double-system architecture',
  'two-tier system',
  'wide area network'],
//8
  ['locating records that match a request',
  'heavy processing, such as calculations',
  'data storage',
  'the presentation of an interface to the user'],
//9
  ['Processing and calculations',
  'Reading and writing of information to the data storage tier',
  'The return of any information to the data storage tier',
  'Data storage'],
//10
  ['Document.write()',
  'document.write()',
  'document.Write()',
  'Document.Write()'],
//11
  ['$InterestRate',
  '2QInterest Rate',
  'interestRate',
  '_interestRate'],
//12
  ['declare',
  'call',
  'assign',
  'initialize'],
//13
  ['method',
  'event handler',
  'response',
  'procedure'],
//14
  ['document.write()',
  'document.writeln()',
  'window.alert()',
  'window.popup()'],
//15
  ['PDATA',
  'CDATA',
  'PCDATA',
  'CPDATA'],
//custom
  ['A little',
  'Definitely',
  'I\'m a Javascript God',
  'Life is pain']
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
  ['A Web page is a document on the web.',
  'A URI is a generic term for types of names and addresses on the web.',
  'A link is a webpage element that contains a refreence to a specific webpage.',
  'A network is a group or system of interconnected people or things.'],
//2
  ['The department that coordinates all agencies and functions of the government concerned directly with national security and the United States Armed Forces',
  'The World Wide Web Consortium is the main international standards organization for the World Wide Web.',
  'Stanford University is a private research university in Stanford, California.',
  'The United Nations is an intergovernmental organization tasked to promote international cooperation and to create and maintain international order.'],
//3
  ['Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.',
  'SGML is not in itself a document language, but a description of how to specify one. It is metadata.',
  'Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.',
  'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'],
//4
  ['Extensible Hypertext Markup Language mirrors or extends versions of the widely used Hypertext Markup Language (HTML).',
  'SGML is not in itself a document language, but a description of how to specify one. It is metadata.',
  'Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.',
  'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'],
//5
  ['There are no \"independent elements\" in HTML.',
  'These elements are called empty or void and only have a start tag since they can\'t have any content.',
  'There are no \"permanent elements\" in HTML.',
  'There are no \"constant elements\" in HTML.'],
//6
  ['The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.',
  'The <body> element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.',
  'The <html> element defines the whole document.',
  'The <script> element either contains scripting statements, or it points to an external script file through the src attribute.'],
//7
  ['Topology typically concerns the placement of parts and how they are arranged.',
  'A double-system architecture would be the layering of two separate systems that interect with each other to achieve the same goal.',
  'The two-tier system consists of a client and a server.',
  'A wide area network is a computer network in which the computers connected may be far apart, generally having a radius of half a mile or more.'],
//8
  ['The server locates records that match a request',
  'The server handles heavy processing, such as calculations.',
  'The server handles data storage.',
  'The client provides the interface to the user'],
//9
  ['The processing tier handles processing and calculations in a three-tier client/server system.',
  'The processing tier handles reading and writing of information tothe data storage tier in a three-tier client/server system.',
  'The processing tier returns any information to the client server in a three-tier client/server system.',
  'The server handles data storage in a three-tier client/server system.'],
//10
  ['Document is not a class and does not get capitalized.',
  'This is the correct syntax, the object, document, is lowercase and the method, write, is lowercase.',
  'Write is a method, it does not get capitalized.',
  'The capitalization of document and write is incorrect syntax.'],
//11
  ['This syntax is valid as it starts with a ($) and contains no spaces.',
  'The first character must be a letter, or an underscore (_), or a dollar sign ($). It cannot be a number.',
  'This syntax is valid as it starts with a letter and contains no spaces.',
  'This syntax is valid as it starts with an underscore (_) and contains no spaces.'],
//12
  ['After the declaration, the variable has no value.',
  'You can only call a variable that has already been declared',
  'You can assign a value to a variable only after it has been declared.',
  'Initializing a variable declares it and assigns a value to it in one statement.'],
//13
  ['A method is a property containing a function definition.',
  'Event handlers are code that are added inside the html tags, that execute JavaScript in response to a specific event.',
  'Response is what a web server returns to a user in reply to a request',
  'Procedure is a logical unit composed of individual statements, which is used to perform a specific task.'],
//14
  ['document.write() will change what is written in the document object.',
  'document.writeIn() will change what is written in the document object, and also add a new line after each statement.',
  'window.alert() will create a dialog box with an OK button.',
  'window.popup() is not a method in javascript.'],
//15
  ['There is no PDATA to concern with in JavaScript',
  'Character Data (CDATA) is a section of an HTML document that is not interpreted as markup.',
  'Parsed Character Data (PCDATA) is a section of an HTML document that is interpreted as markup.',
  'There is no CPDATA to concern with in JavaScript.']
];

var squares = document.querySelectorAll('.square'); // The answer divs on page
var messageDisplay = document.querySelector('#message'); // Question # display on page
var resetButton = document.querySelector('#reset'); // Start Over button
var modeButtons = document.querySelectorAll('.mode'); // Back/Skip buttons
var questElement = document.querySelector('#question'); // h2 containing the question
var redoButton = document.getElementById('redo'); // redo button after selecting right answer
var nextButton = document.getElementById('next');  // next button after selecting right answer
var currentQuestion;
var currentAnswers;
var currentCorrect;
var clickedColor;
var counter = 0;

function pickQuestion(){
  if (counter < chap1Questions.length) {  // place upper limit on counter variable
    currentQuestion = chap1Questions[counter];  // choose question
    currentAnswers = chap1Answers[counter];    // choose corresponding answers
    currentCorrect = chap1Correct[counter];    // choose corresponding correct answer
    questElement.innerHTML = currentQuestion;   // displays current question
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = currentAnswers[i]; // places answers on their squares
      squares[i].addEventListener('click', winLose, false); // adds an event listener to each square that will check it's validity compared to the correct answer
    }
  }
  document.querySelectorAll('.win')[0].style.display = ''; // hides next and redo buttons
  document.querySelectorAll('.win')[1].style.display = '';
  messageDisplay.innerHTML = `Question #${counter + 1}`; // displays question counter
}

function winLose () {
  var clickedColor = this.innerHTML;
  var altFactsArray = altFacts[counter];
  if (counter === chap1Questions.length -1) { // checks if the counter is at the final question
    if (clickedColor === currentAnswers[0]) {       // sets custom answers
      questElement.innerHTML = 'More practice for you!';
    } else if (clickedColor === currentAnswers[1]) {
      questElement.innerHTML = 'Get to studying you bum!';
    } else if (clickedColor === currentAnswers[2]) {
      questElement.innerHTML = 'Aren\'t you special, study more anyway!';
    } else if (clickedColor === currentAnswers[3]) {
      questElement.innerHTML = 'Too bad! Study more to relieve the pain!';
    }
  } else {
    if ((clickedColor === currentCorrect) || (this.style.backgroundColor == 'rgb(250, 255, 250)')) { // check if answer is correct or has already been displayed as correct
      this.style.backgroundColor = 'rgb(250, 255, 250)';  // --------  Right Answer -----------------------------
      this.style.color = '#00bb00';
      this.style.border = 'solid #00bb00 3px';            // change square style to reflect correct answer
      this.style.cursor = 'auto';
      if (document.documentElement.clientWidth < 500) {   // media query to change font-size based on viewport
        if (document.documentElement.clientWidth < 361) {
          this.style.fontSize = '1.2em';
        } else {
          this.style.fontSize = '1.3em';
        }
      } else {
        this.style.fontSize = '1.6em';
      }
      this.style.boxShadow = 'none';
      this.style.paddingTop = '5%';
      this.style.paddingBottom = '5%';
      document.querySelectorAll('.win')[0].style.display = 'inline';   // displays next and redo buttons
      document.querySelectorAll('.win')[1].style.display = 'inline';
      if (this.innerHTML === currentAnswers[0]) { // check which answer was clicked, and displays the corresponding explanation
        this.textContent = altFactsArray[0];
      } else if (this.innerHTML === currentAnswers[1]) {
        this.textContent = altFactsArray[1];
      } else if (this.innerHTML === currentAnswers[2]) {
        this.textContent = altFactsArray[2];
      } else if (this.innerHTML === currentAnswers[3]) {
        this.textContent = altFactsArray[3];
      }                                                     // -----------end right answer------------------------
    } else {
      this.style.backgroundColor = 'rgb(255, 230, 230)';    // -------- Wrong Answer --------------------------------
      this.style.color = '#FF0000';
      this.style.cursor = 'auto';
      this.style.border = 'solid #ff7777 3px';              //  change square style to reflect wrong answer
      if (document.documentElement.clientWidth < 500) {   // media query to change font-size based on viewport
        if (document.documentElement.clientWidth < 361) {
          this.style.fontSize = '1.2em';
        } else {
          this.style.fontSize = '1.3em';
        }
      } else {
        this.style.fontSize = '1.6em';
      }
      this.style.boxShadow = 'none';
      this.style.paddingTop = '5%';
      this.style.paddingBottom = '5%';
      if (this.innerHTML === currentAnswers[0]) { // check which answer was clicked, and displays the corresponding explanation
        this.textContent = altFactsArray[0];
      } else if (this.innerHTML === currentAnswers[1]) {
        this.textContent = altFactsArray[1];
      } else if (this.innerHTML === currentAnswers[2]) {
        this.textContent = altFactsArray[2];
      } else if (this.innerHTML === currentAnswers[3]) {
        this.textContent = altFactsArray[3];
      }
    }                                                     // ---------------end wrong answer-----------------------------
  }
}

function resetStyles(){ // resets all squares' styles to the default design
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
    squares[i].style.border = '';
    squares[i].style.boxShadow = '';
    squares[i].style.paddingTop = '';
    squares[i].style.paddingBottom = '';
    squares[i].style.fontSize = '';
    squares[i].style.cursor = '';
  }
}

function nextQuestion() { // adds 1 to counter and resets layout
  addOne();
  resetStyles();
  pickQuestion();
}

function resetQuestion(){ // resets layout without changing question
  resetStyles();
  pickQuestion();
}

function addOne(){  // increments counter up by one
  counter++;
}

function reset(){ // resets page to first question with default layout
  counter = 0; // resets counter
  resetStyles();
  pickQuestion();
}

function back(){ // goes to previous question
  if (counter !== 0) { // check if counter is at minimum
    counter--;
    resetStyles();
    pickQuestion();
  }
}

function skip(){ // goes to next question
  if (!(counter === (chap1Questions.length - 1))){ // check if counter is at maximum
    addOne();
    resetStyles();
    pickQuestion();
  }
}

// ------------ Event Listeners --------------------------------------
function createEventListeners() {
// Next button
  if (nextButton.addEventListener) {
    nextButton.addEventListener('click', nextQuestion, false);
  } else if (nextButton.attachEvent) {
    nextButton.attachEvent('onclick', nextQuestion);
  }
  // redo button
  if (redoButton.addEventListener) {
    redoButton.addEventListener('click', resetQuestion, false);
  } else if (redoButton.attachEvent) {
    redoButton.attachEvent('onclick', resetQuestion);
  }
  // back and skip buttons
  if (modeButtons[0].addEventListener) {
    modeButtons[0].addEventListener('click', back, false);
    modeButtons[1].addEventListener('click', skip, false);
  } else if (modeButtons[0].attachEvent) {
    modeButtons[0].attachEvent('onclick', back);
    modeButtons[1].attachEvent('onclick', skip);
  }
  // start over button
  if (resetButton.addEventListener) {
    resetButton.addEventListener('click', reset, false);
  } else if (resetButton.attachEvent) {
    resetButton.attachEvent('onclick', reset);
  }
}

// initialize function to populate page
function init(){
  pickQuestion();
  createEventListeners();
}

if (window.addEventListener) {
  window.addEventListener('load', init, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', init);
}

// Tyler Schum

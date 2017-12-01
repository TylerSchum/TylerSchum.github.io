// Tyler Schum
// 11/21/17

var chap7Questions = [
  //1
  'In object-oriented programming, a(n) __________ is a template, or blueprint, that serves as the basis for new objects.',
  //2
  'In object-oriented programming, a(n) __________ is an object that has been created from an existing template.',
  //3
  'Which of the following <strong>Date</strong> class constructors creates a <strong>Date</strong> object that contains the current date and time from the local computer?',
  //4
  'Which of the following parts of a date value are stored in a <strong>Date</strong> object using numeric representations, starting with zero, similar to an array?',
  //5
  'Which <strong>Number</strong> method converts a number to a string using a specified number of decimal places?',
  //6
  'Which <strong>Number</strong> method converts a number to a string that is formatted with local numeric formatting style?',
  //7
  'Which is the primary reason for using any of the \"to\" methods of the <strong>Number</strong> class?',
  //8
  'Which method of the <strong>Math</strong> class rounds a value to the lowest integer?',
  //9
  'What is the correct syntax for rounding the number 39.75 to the nearest integer?',
  //10
  'Which of the following statements creates an empty object with the name <strong>registry</strong>?',
  //11
  'Which of the following statements adds a new property named <strong>squFt</strong> to an object named <strong>RealEst</strong>?',
  //12
  'A property whose value is itself an object is known as a(n) _______.',
  //13
  'Given the object definition: var members = {founder: \"Luis\"}; which statement references the value of the founder property using an associative array?',
  //14
  'Which statement declares a method named <strong>calcTotal</strong> and sets its value to the existing <strong>calculateTotal</strong>() function?',
  //15
  'The built-in property that specifies the constructor from which an object was extended is called the _______ property.',
  //Custom
  'Do you need to study more?'
  ];

var chap7Answers = [
  //1
  ['instance', 'object', 'method', 'class'],
  //2
  ['instance', 'property', 'method', 'class'],
  //3
  ['Date()', 'Date(milliseconds)', 'Date(date_string)', 'Date(year, month[, date, hours, minutes, seconds, milliseconds])'],
  //4
  ['Day of the month', 'Month', 'Year', 'AM/PM'],
  //5
  ['toFixed()', 'toLocaleString()', 'toString()', 'valueOf()'],
  //6
  ['toFixed()', 'toLocaleString()', 'toString()', 'valueOf()'],
  //7
  ['to convert a number for use in calculations', 'to format a date', 'to perform calculations', 'to convert a number that will be displayed to a user'],
  //8
  ['floor()', 'max()', 'min()', 'round()'],
  //9
  ['new Math = round(39.75);', 'var mathCalc = new Math(round(39.75));', 'Math.round(39.75);', 'round(39.75);'],
  //10
  ['var registry;', 'var registry = {};', 'var registry = \"\";', 'var registry = [];'],
  //11
  ['var RealEst.squFt;', 'RealEst.squFt = \"\";', 'var squFt.RealEst;', 'squFt.RealEst = \"\"'],
  //12
  ['sub-property', 'instance', 'constructor', 'sub-object'],
  //13
  ['founder', 'members.founder', 'members[\"founder\"]', 'members[0]'],
  //14
  ['calcTotal: calculateTotal', 'calcTotal: calculateTotal()', 'calcTotal: function( claculateTotal )', 'calcTotal: function( claculateTotal() )'],
  //15
  ['default', 'origination', 'prototype', 'source'],
  //Custom
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap7Correct = [
  //1
  'class',
  //2
  'instance',
  //3
  'Date()',
  //4
  'Month',
  //5
  'toFixed()',
  //6
  'toLocaleString()',
  //7
  'to convert a number that will be displayed to a user',
  //8
  'floor()',
  //9
  'Math.round(39.75);',
  //10
  'var registry = {};',
  //11
  'RealEst.squFt = \"\";',
  //12
  'sub-object',
  //13
  'members[\"founder\"]',
  //14
  'calcTotal: calculateTotal',
  //15
  'prototype',
  //Custom
  ''
];

var altFacts = [
  // 1
  ['An instance is an object that has been created from an existing class.',
  'An object is programming code and data that can be treated as an individual unit.',
  'A JavaScript method is a property containing a function definition.',
  'A class is a template, or blueprint, that serves as the basis for new objects.'],
  //2
  ['An instance is an object that has been created from an existing class.',
  'An object is programming code and data that can be treated as an individual unit.',
  'A JavaScript method is a property containing a function definition.',
  'A class is a template, or blueprint, that serves as the basis for new objects.'],
  //3
  ['Date() creates a Date object that contains the current date and time provided by the device.',
  'Date(milliseconds) creates a Date object based on the number of milliseconds sicne Jan 1st, 1970.',
  'Date(date_string) creates a Date object based on a string containing a date value.',
  'This one creates a Date object with the date and time set according to the passed arguments.'],
  //4
  ['The day of the month is not indexed starting at 0, the day of the week is.',
  'The month of the year is indexed starting at 0',
  'The year is not indexed starting at 0 like an array.',
  'AM/PM must be defined as part of a conditional statement.'],
  //5
  ['toFixed() converts a number to a string using a specified number of decimal places.',
  'toLocaleString() converts a number to a string that is formatted with local numeric formatting style.',
  'toString() converts a number to a string using the number system specified by base.',
  'valueOf() returns the numeric value of a Number object.'],
  //6
  ['toFixed() converts a number to a string using a specified number of decimal places.',
  'toLocaleString() converts a number to a string that is formatted with local numeric formatting style.',
  'toString() converts a number to a string using the number system specified by base.',
  'valueOf() returns the numeric value of a Number object.'],
  //7
  ['Converting a number to a string would make calculations a more difficult task.',
  'To format a date, you would use conditionals with the numerical values provided by the Date class.',
  'the \"to\" statements convert numbers to strings, they do not perform calculations.',
  'These methods are used to convert numbers to strings that will be displayable to users.'],
  //8
  ['floor(x) rounds x to the next lowest integer.',
  'max(x, y) would give the larger value between x and y.',
  'min(x, y) would give the smaller value between x and y.',
  'round(x) would give us x rounded to the nearest integer.'],
  //9
  ['The Math class does not contain a constructor so it cannot be instantiated like this.',
  'You never need to use \"new\" with the Math class.',
  'Math.round(x) is the proper syntax for calling the round method of the Math class.',
  'You need to specify the Math class when calling methods that belong to it.'],
  //10
  ['var registry; would simply declare the variable registry with no value set.',
  'This is the coorect syntax for creating an empty object.',
  'var registry = \"\"; would create an empty string.',
  'var registry = []; would create an empty array.'],
  //11
  ['This would attempt to create a new variable.',
  'This would create a new property containing an empty string.',
  'This would attempt to make a new variable.',
  'This would attempt to create a new property at the non-existent object \"squareFeet\"'],
  //12
  ['There are no sub-properties, properties within an object are children of the object',
  'An instance is an object that has been created from an existing class.',
  'A constructor is a function that is used as the basis for a custom object.',
  'A sub-object is a property that is itself an object.'],
  //13
  ['calling founder would attempt to call the variable founder, which is not defined.',
  'Although this would work, it is not using an associative array.',
  'This would search the object members for the index of \"founder\" and then return it\'s value.',
  'members is not an array, so there is nothing defined at the index of 0.'],
  //14
  ['This is the proper syntax for declaring a method using a previously established function.',
  'This would run the function on the declaration in your code.',
  'This would attempt to create a new function rather than used the existing one.',
  'This would attempt to create a new function and execute it.'],
  //15
  ['There is no default method, there is a defaultChecked, defaultSelected, and defaultValue.',
  'There is no origination method.',
  'The prototype property specifies the constructor from which an object was instantiated.',
  'There is no source method, the toSource() method returns a string representing the source code of the object.']
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
  if (counter < chap7Questions.length) {  // place upper limit on counter variable
    currentQuestion = chap7Questions[counter];  // choose question
    currentAnswers = chap7Answers[counter];    // choose corresponding answers
    currentCorrect = chap7Correct[counter];    // choose corresponding correct answer
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
  if (counter === chap7Questions.length -1) { // checks if the counter is at the final question
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
      if (document.documentElement.clientWidth < 500) {   // media query to change font-size based on viewport
        this.style.fontSize = '1.3em';
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
      this.style.border = 'solid #ff7777 3px';              //  change square style to reflect wrong answer
      if (document.documentElement.clientWidth < 500) {   // media query to change font-size based on viewport
        this.style.fontSize = '1.3em';
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
  if (!(counter === (chap7Questions.length - 1))){ // check if counter is at maximum
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

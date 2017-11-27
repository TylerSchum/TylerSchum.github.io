// Tyler Schum
// 11/21/17

var chap7Questions = [
  'In object-oriented programming, a(n) __________ is a template, or blueprint, that serves as the basis for new objects.',
  'In object-oriented programming, a(n) __________ is an object that has been created from an existing template.',
  'Which of the following <strong>Date</strong> class constructors creates a <strong>Date</strong> object that contains the current date and time from the local computer?',
  'Which of the following parts of a date value are stored in a <strong>Date</strong> object using numeric representations, starting with zero, similar to an array?',
  'Which <strong>Number</strong> method converts a number to a string using a specified number of decimal places?',
  'Which <strong>Number</strong> method converts a number to a string that is formatted with local numeric formatting style?',
  'Which is the primary reason for using any of the \"to\" methods of the <strong>Number</strong> class?',
  'Which method of the <strong>Math</strong> class rounds a value to the lowest integer?',
  'What is the correct syntax for rounding the number 39.75 to the nearest integer?',
  'Which of the following statements creates an empty object with the name <strong>registry</strong>?',
  'Which of the following statements adds a new property named <strong>squareFeet</strong> to an object named <strong>RealEstate</strong>?',
  'A property whose value is itself an object is known as a(n) _______.',
  'Given the object definition: var members = {founder: \"Luis\"}; which statement references the value of the founder property using an associative array?',
  'Which statement declares a method named <strong>calcTotal</strong> and sets its value to the existing <strong>calculateTotal</strong() function?',
  'The built-in property that specifies the constructor from which an object was extended is called the _______ property.',
  'Do you need to study more?'
  ];

var chap7Answers = [
  ['instance', 'object', 'method', 'class'],
  ['instance', 'property', 'method', 'class'],
  ['Date()', 'Date(milliseconds)', 'Date(date_string)', 'Date(year, month[, date, hours, minutes, seconds, milliseconds])'],
  ['Day of the month', 'Month', 'Year', 'AM/PM'],
  ['toFixed()', 'toLocaleString()', 'toString()', 'valueOf()'],
  ['toFixed()', 'toLocaleString()', 'toString()', 'valueOf()'],
  ['to convert a number for use in calculations', 'to format a date', 'to perform calculations', 'to convert a number that will be displayed to a user'],
  ['floor()', 'max()', 'min()', 'round()'],
  ['new Math = round(39.75);', 'var mathCalc = new Math(round(39.75));', 'Math.round(39.75);', 'round(39.75);'],
  ['var registry;', 'var registry = {};', 'var registry = \"\";', 'var registry = [];'],
  ['var RealEstate.squareFeet;', 'RealEstate.squareFeet = \"\";', 'var squareFeet.RealEstate;', 'squareFeet.RealEstate = \"\"'],
  ['sub-property', 'instance', 'constructor', 'sub-object'],
  ['founder', 'members.founder', 'members[\"founder\"]', 'members[0]'],
  ['calcTotal: calculateTotal', 'calcTotal: calculateTotal()', 'calcTotal: function(claculateTotal)', 'calcTotal: function(claculateTotal())'],
  ['default', 'origination', 'prototype', 'source'],
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap7Correct = [
  'class',
  'instance',
  'Date()',
  'Month',
  'toFixed()',
  'toLocaleString()',
  'To convert a number that will be displayed to a user',
  'floor()',
  'Math.round(39.75)',
  'var registry = {};',
  'RealEstate.squareFeet = \"\";',
  'sub-object',
  'members[\"founder\"]',
  'calcTotal: calculateTotal',
  'prototype',
  ''
];

var altFacts = [
  ['An instance is an object that has been created from an existing class.', 'An object is programming code and data that can be treated as an individual unit.', 'A JavaScript method is a property containing a function definition.', 'A class is a template, or blueprint, that serves as the basis for new objects.'],
  ['An instance is an object that has been created from an existing class.', 'An object is programming code and data that can be treated as an individual unit.', 'A JavaScript method is a property containing a function definition.', 'A class is a template, or blueprint, that serves as the basis for new objects.'],
  ['Date() creates a Date object that contains the current date and time provided by the device.', 'Date(milliseconds) creates a Date object based on the number of milliseconds sicne Jan 1st, 1970.', 'Date(date_string) creates a Date object based on a string containing a date value.', 'This one creates a Date object with the date and time set according to the passed arguments.'],
  ['The day of the month is not indexed starting at 0, the day of the week is.', 'The month of the year is indexed starting at 0', 'The year is not indexed starting at 0 like an array.', 'AM/PM must be defined as part of a conditional statement.'],
  ['toFixed() converts a number to a string using a specified number of decimal places.', 'toLocaleString() converts a number to a string that is formatted with local numeric formatting style.', 'toString() converts a number to a string using the number system specified by base.', 'valueOf() returns the numeric value of a Number object.'],
  ['toFixed() converts a number to a string using a specified number of decimal places.', 'toLocaleString() converts a number to a string that is formatted with local numeric formatting style.', 'toString() converts a number to a string using the number system specified by base.', 'valueOf() returns the numeric value of a Number object.'],
  ['Converting a number to a string would make calculations a more difficult task.', 'To format a date, you would use conditionals with the numerical values provided by the Date class.', 'the \"to\" statements convert numbers to strings, they do not perform calculations.', 'These methods are used to convert numbers to strings that will be displayable to users.'],
  ['floor(x) rounds x to the next lowest integer.', 'max(x, y) would give the larger value between x and y.', 'min(x, y) would give the smaller value between x and y.', 'round(x) would give us x rounded to the nearest integer.'],
  ['The Math class does not contain a constructor so it cannot be instantiated like this.', 'You never need to use \"new\" with the Math class.', 'Math.round(x) is the proper syntax for calling the round method of the Math class.', 'You need to specify the Math class when calling methods that belong to it.'],
  ['var registry; would simply declare the variable registry with no value set.', 'This is the coorect syntax for creating an empty object.', 'var registry = \"\"; would create an empty string.', 'var registry = []; would create an empty array.'],
  ['This would attempt to create a new variable.', 'This would create a new property containing an empty string.', 'This would attempt to make a new variable.', 'This would attempt to create a new property at the non-existent object \"squareFeet\"'],
  ['There are no sub-properties, properties within an object are children of the object', 'An instance is an object that has been created from an existing class.', 'A constructor is a function that is used as the basis for a custom object.', 'A sub-object is a property that is itself an object.'],
  ['calling founder would attempt to call the variable founder, which is not defined.', 'Although this would work, it is not using an associative array.', 'This would search the object members for the index of \"founder\" and then return it\'s value.', 'members is not an array, so there is nothing defined at the index of 0.'],
  ['This is the proper syntax for declaring a method using a previously established function.', 'This would run the function on the declaration in your code.', 'This would attempt to create a new function rather than used the existing one.', 'This would attempt to create a new function and execute it.'],
  ['There is no default method, there is a defaultChecked, defaultSelected, and defaultValue.', 'There is no origination method.', 'The prototype property specifies the constructor from which an object was instantiated.', 'There is no source method, the toSource() method returns a string representing the source code of the object.']
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
  if (counter < chap7Questions.length) {
    currentQuestion = chap7Questions[counter];
    currentAnswers = chap7Answers[counter];
    currentCorrect = chap7Correct[counter];
    questElement.innerHTML = currentQuestion;
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = currentAnswers[i];
    }
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', winLose, false);
    }
  }
  document.querySelectorAll('.win')[0].style.display = '';
  document.querySelectorAll('.win')[1].style.display = '';
  messageDisplay.innerHTML = `Question #${counter + 1}`;
}

function delay(){
  counter = 0;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
    squares[i].style.border = '';
    squares[i].style.paddingTop = '';
    squares[i].style.paddingBottom = '';
    squares[i].style.fontSize = '';
  }
  setTimeout(pickQuestion, 3000);
}

function winLose () {
  var clickedColor = this.innerHTML;
  var altFactsArray = altFacts[counter];
  if (counter === chap7Questions.length -1) {
    if (clickedColor === currentAnswers[0]) {
      questElement.innerHTML = 'More practice for you!';
    } else if (clickedColor === currentAnswers[1]) {
      questElement.innerHTML = 'Get to studying you bum!';
    } else if (clickedColor === currentAnswers[2]) {
      questElement.innerHTML = 'Aren\'t you special, study more anyway!';
    } else if (clickedColor === currentAnswers[3]) {
      questElement.innerHTML = 'Too bad! Study more to relieve the pain!';
    }
  } else {
    if ((clickedColor === currentCorrect) || (this.style.backgroundColor == 'rgb(250, 255, 250)')) {
      this.style.backgroundColor = 'rgb(250, 255, 250)';
      this.style.color = '#00bb00';
      this.style.border = 'solid #00bb00 3px';
      this.style.fontSize = '20px';
      this.style.paddingTop = '5%';
      this.style.paddingBottom = '5%';
      document.querySelectorAll('.win')[0].style.display = 'inline';
      document.querySelectorAll('.win')[1].style.display = 'inline';
      if (this.innerHTML === currentAnswers[0]) {
        this.textContent = altFactsArray[0];
      } else if (this.innerHTML === currentAnswers[1]) {
        this.textContent = altFactsArray[1];
      } else if (this.innerHTML === currentAnswers[2]) {
        this.textContent = altFactsArray[2];
      } else if (this.innerHTML === currentAnswers[3]) {
        this.textContent = altFactsArray[3];
      }
    } else {
      this.style.backgroundColor = 'rgb(255, 230, 230)';
      this.style.color = '#FF0000';
      this.style.border = 'solid #ff7777 3px';
      this.style.fontSize = '20px';
      this.style.paddingTop = '5%';
      this.style.paddingBottom = '5%';
      if (this.innerHTML === currentAnswers[0]) {
        this.textContent = altFactsArray[0];
      } else if (this.innerHTML === currentAnswers[1]) {
        this.textContent = altFactsArray[1];
      } else if (this.innerHTML === currentAnswers[2]) {
        this.textContent = altFactsArray[2];
      } else if (this.innerHTML === currentAnswers[3]) {
        this.textContent = altFactsArray[3];
      }
    }
  }
}

if (document.getElementById('next').addEventListener) {
document.getElementById('next').addEventListener('click', delayStyles, false);
} else if (document.getElementById('next').attachEvent) {
  document.getElementById('next').attachEvent('onclick', delayStyles);
}

if (document.getElementById('redo').addEventListener) {
document.getElementById('redo').addEventListener('click', resetQuestion, false);
} else if (document.getElementById('redo').attachEvent) {
  document.getElementById('redo').attachEvent('onclick', resetQuestion);
}

function delayStyles() {
  addOne();
  resetStyles();
  pickQuestion();
}

function resetQuestion(){
  resetStyles();
  pickQuestion();
}

function resetStyles(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
    squares[i].style.border = '';
    squares[i].style.paddingTop = '';
    squares[i].style.paddingBottom = '';
    squares[i].style.fontSize = '';
  }
}

function addOne(){
  counter++;
}

function reset(){
  counter = 0;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
    squares[i].style.color = '';
    squares[i].style.border = '';
    squares[i].style.paddingTop = '';
    squares[i].style.paddingBottom = '';
    squares[i].style.fontSize = '';
  }
  pickQuestion();
}

function back(){
  if (counter !== 0) {
    counter--;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = '';
      squares[i].style.color = '';
      squares[i].style.border = '';
      squares[i].style.paddingTop = '';
      squares[i].style.paddingBottom = '';
      squares[i].style.fontSize = '';
    }
    pickQuestion();
  }
}

function skip(){
  if (!(counter === (chap7Questions.length - 1))){
    counter++;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = '';
      squares[i].style.color = '';
      squares[i].style.border = '';
      squares[i].style.paddingTop = '';
      squares[i].style.paddingBottom = '';
      squares[i].style.fontSize = '';
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

// Tyler Schum

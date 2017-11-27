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
  ['forms', 'controls', 'inputs', 'elements'],
  ['radio', 'email', 'checkbox', 'range'],
  ['-1', '0', '1', 'false'],
  ['src', 'alt', 'title', 'value'],
  ['blur', 'focus', 'input', 'forminput'],
  ['blur', 'focus', 'click', 'forminput'],
  ['checked', 'defaultChecked', 'selected', 'focus'],
  ['false', 'true', '\"\"', 'null'],
  ['max', 'title', 'alt', 'src'],
  ['password', 'text', 'radio', 'number'],
  ['required', 'valueMissing', 'patternMismatch', 'typeMismatch'],
  ['novalidate', 'min', 'required', 'max'],
  ['preventDefault()', 'checkValidity()', 'select()', 'getElementById()'],
  ['scroll(top)', 'scroll(0,0)', 'move(top)', 'move(0,0)'],
  ['value()', 'integer()', 'isNumber()', 'isNaN()'],
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap6Correct = [
  'elements',
  'email',
  '-1',
  'value',
  'focus',
  'blur',
  'checked',
  '\"\"',
  'max',
  'number',
  'valueMissing',
  'required',
  'preventDefault()',
  'scroll(0,0)',
  'isNaN()',
  ''
];

var altFacts = [
  ['The forms collection returns a collection of all <form> elements in the document.', 'The controls attribute is a boolean attribute. When present, it specifies that audio/video controls should be displayed.', 'The Input Text object represents an HTML <input> element with type=\"text\".', 'The elements collection returns a collection of all elements in a form.'],
  ['<input> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.', '<input> elements of type "email" are used to let the user enter and edit an email address.', '<input> elements of type checkbox allow you to select single values for submission in a form (or not).', '<input> elements of type "range" let the user specify a numeric value which must be no less than a given value, and no more than another given value.'],
  ['The value -1 indicates that no element is selected.', 'Index of 0 would be the first selection.', 'Index of 1 would be the second selection.', 'selectedIndex property will only return an integer.'],
  ['The src attribute specifies the location (URL) of the external resource.', 'The alt attribute provides alternative information for an image if a user for some reason cannot view it.', 'The title attribute specifies extra information about an element.', 'The value attribute defines a default value which will be displayed in the element on page load.'],
  ['The blur event is fired when an element has lost focus.', 'The focus event is fired when an element has received focus.', 'The input event is fired synchronously when the value of an <input>, <select>, or <textarea> element is changed.', 'The forminput event is triggered when another controller in the form fires an input event.'],
  ['The blur event is fired when an element has lost focus.', 'The focus event is fired when an element has received focus.', 'The click event is fired when a pointing device button is pressed and released on a single element.', 'The forminput event is triggered when another controller in the form fires an input event.'],
  ['The checked attribute indicates whether the element should be checked on page load.', 'The defaultChecked property returns the default value of the checked attribute.', 'The selected property sets or returns the selected state of an option.', 'Focus is not an attribute, the autofocus attribute can be used to force a form input element to recieve focus on the page load.'],
  ['This would set the value to false and print the text \'false\' in the box.', 'This would set the value to false and print the text \'true\' in the box.', '\"\" (an empty string) will place no content as it does not contain any.', 'This would technically work, but is not a proper practice. By setting the value to null, the browser will convert null to a string, which will then be empty.'],
  ['The max attribute indicates the maximum value allowed.', 'The title attribute gives text to be displayed in a tooltip when hovering over the element.', 'The alt attribute gives alternative text in case an image can\'t be displayed.', 'The src attribute sets the URL of the embeddable content'],
  ['<input> elements of type "password" provide a way for the user to securely enter a password.', '<input> elements of type "text" create basic single-line text fields.', 'Only one radio button in a given group can be selected at the same time.', '<input> elements of type "number" are used to let the user enter a number.'],
  ['The required property sets or returns whether a text field must be filled out before submitting a form.', 'Returns true if there is no value, returns false if there is.', 'Returns false if an element\'s value does not match its pattern attribute, returns true if it does.', 'Returns true if an element\'s value is invalid per its type attribute, returns false if it is.'],
  ['When present, novalidate specifies that the form data should not be validated when submitted.', 'The min attribute specifies the minimum value for an <input> element.', 'The required attribute specifies that an input field must be filled out before submitting the form.', 'The max attribute specifies the maximum value for an <input> element.'],
  ['The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.', 'The checkValidity() method returns true if an input element contains valid data.', 'The select() method selects the entire contents of a text area.', 'The getElementById() method returns the element that has the ID attribute with the specified value.'],
  ['The scroll method takes in an (x, y) argument.', 'This would move the viewport to the top, left corner of the screen.', 'The move method manipulates particular elements.', 'The move method manipulates particular elements.'],
  ['There is no built-in value() function.', 'There is no built-in integer() function.', 'There is no built-in isNumber()', 'The isNaN() function determines whether a value is NaN or not.']
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
  } else {
    if ((clickedColor === currentCorrect) || (this.style.paddingTop == '5%')) {
      this.style.backgroundColor = 'rgb(250, 255, 250)';
      this.style.color = '#00bb00';
      this.style.border = 'solid #00bb00 3px';
      this.style.fontSize = '20px';
      this.style.paddingTop = '5%';
      this.style.paddingBottom = '5%';
      document.querySelectorAll('.win')[0].style.display = 'inline';
      document.querySelectorAll('.win')[1].style.display = 'inline';
      if ((this.innerHTML === currentAnswers[0]) || (this.style.color === '#00bb00')) {
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
  if (!(counter === (chap6Questions.length - 1))){
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

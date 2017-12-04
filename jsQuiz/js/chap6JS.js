// Tyler Schum
// 11/21/17

var chap6Questions = [
  //1
  'Objects representing each of the controls in a form are stored in the _______ collection.',
  //2
  'Which of the folowing type values for the input element does <em>not</em> enable you to provide users with a limited set of choices?',
  //3
  'What value of the <em>selectedIndex</em> property of a <em>select</em> object corresponds to no selection?',
  //4
  'To simulate the behavior of placeholder text in older browsers, you can instead set the value of the _____________ property.',
  //5
  'Which event do you use to call a function when a user selects a field or moves the insertion point into a field?',
  //6
  'Which event do you use to call a function when a field is no longer selected, or a user moves the insertion point to a different field?',
  //7
  'Which of the following attributes determines whether a check box or option button is selected?',
  //8
  'What do you assign to the <em>value</em> property of a text input box to remove its content?',
  //9
  'Which of the following attributes triggers browser-based validation in modern browsers?',
  //10
  'Which of the following input <em>type</em> value triggers browser-based validation in modern browsers?',
  //11
  'Which of the following properties has a value of <em>true</em> when a user has left a required field blank?',
  //12
  'Which of the following attributes for form child elements would you use for a field that must have a value before the form can be submitted?',
  //13
  'What method do you use to disable the default behavior for an event?',
  //14
  'Which statement moves the browser to the top of the page?',
  //15
  'For any fields that require numeric values, you can use Javascript\'s built-in _________ function to determine whether the user actually entered a number.',
  //Custom
  'Do you need to study more?'
  ];

var chap6Answers = [
  //1
  ['forms', 'controls', 'inputs', 'elements'],
  //2
  ['radio', 'email', 'checkbox', 'range'],
  //3
  ['-1', '0', '1', 'false'],
  //4
  ['src', 'alt', 'title', 'value'],
  //5
  ['blur', 'focus', 'input', 'forminput'],
  //6
  ['blur', 'focus', 'click', 'forminput'],
  //7
  ['checked', 'defaultChecked', 'selected', 'focus'],
  //8
  ['false', 'true', '\"\"', 'null'],
  //9
  ['max', 'title', 'alt', 'src'],
  //10
  ['password', 'text', 'radio', 'number'],
  //11
  ['required', 'valueMissing', 'patternMismatch', 'typeMismatch'],
  //12
  ['novalidate', 'min', 'required', 'max'],
  //13
  ['preventDefault()', 'checkValidity()', 'select()', 'getElementById()'],
  //14
  ['scroll(top)', 'scroll(0,0)', 'move(top)', 'move(0,0)'],
  //15
  ['value()', 'integer()', 'isNumber()', 'isNaN()'],
  //Custom
  ['A little', 'Definitely', 'I\'m a Javascript God', 'Life is pain']
];

var chap6Correct = [
  //1
  'elements',
  //2
  'email',
  //3
  '-1',
  //4
  'value',
  //5
  'focus',
  //6
  'blur',
  //7
  'checked',
  //8
  '\"\"',
  //9
  'max',
  //10
  'number',
  //11
  'valueMissing',
  //12
  'required',
  //13
  'preventDefault()',
  //14
  'scroll(0,0)',
  //15
  'isNaN()',
  //Custom
  ''
];

var altFacts = [
  //1
  ['The forms collection returns a collection of all <form> elements in the document.', 'The controls attribute is a boolean attribute. When present, it specifies that audio/video controls should be displayed.', 'The Input Text object represents an HTML <input> element with type=\"text\".', 'The elements collection returns a collection of all elements in a form.'],
  //2
  ['<input> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.', '<input> elements of type "email" are used to let the user enter and edit an email address.', '<input> elements of type checkbox allow you to select single values for submission in a form (or not).', '<input> elements of type "range" let the user specify a numeric value which must be no less than a given value, and no more than another given value.'],
  //3
  ['The value -1 indicates that no element is selected.', 'Index of 0 would be the first selection.', 'Index of 1 would be the second selection.', 'selectedIndex property will only return an integer.'],
  //4
  ['The src attribute specifies the location (URL) of the external resource.', 'The alt attribute provides alternative information for an image if a user for some reason cannot view it.', 'The title attribute specifies extra information about an element.', 'The value attribute defines a default value which will be displayed in the element on page load.'],
  //5
  ['The blur event is fired when an element has lost focus.', 'The focus event is fired when an element has received focus.', 'The input event is fired synchronously when the value of an <input>, <select>, or <textarea> element is changed.', 'The forminput event is triggered when another controller in the form fires an input event.'],
  //6
  ['The blur event is fired when an element has lost focus.', 'The focus event is fired when an element has received focus.', 'The click event is fired when a pointing device button is pressed and released on a single element.', 'The forminput event is triggered when another controller in the form fires an input event.'],
  //7
  ['The checked attribute indicates whether the element should be checked on page load.', 'The defaultChecked property returns the default value of the checked attribute.', 'The selected property sets or returns the selected state of an option.', 'Focus is not an attribute, the autofocus attribute can be used to force a form input element to recieve focus on the page load.'],
  //8
  ['This would set the value to false and print the text \'false\' in the box.', 'This would set the value to false and print the text \'true\' in the box.', '\"\" (an empty string) will place no content as it does not contain any.', 'This would technically work, but is not a proper practice. By setting the value to null, the browser will convert null to a string, which will then be empty.'],
  //9
  ['The max attribute indicates the maximum value allowed.', 'The title attribute gives text to be displayed in a tooltip when hovering over the element.', 'The alt attribute gives alternative text in case an image can\'t be displayed.', 'The src attribute sets the URL of the embeddable content'],
  //10
  ['<input> elements of type "password" provide a way for the user to securely enter a password.', '<input> elements of type "text" create basic single-line text fields.', 'Only one radio button in a given group can be selected at the same time.', '<input> elements of type "number" are used to let the user enter a number.'],
  //11
  ['The required property sets or returns whether a text field must be filled out before submitting a form.', 'Returns true if there is no value, returns false if there is.', 'Returns false if an element\'s value does not match its pattern attribute, returns true if it does.', 'Returns true if an element\'s value is invalid per its type attribute, returns false if it is.'],
  //12
  ['When present, novalidate specifies that the form data should not be validated when submitted.', 'The min attribute specifies the minimum value for an <input> element.', 'The required attribute specifies that an input field must be filled out before submitting the form.', 'The max attribute specifies the maximum value for an <input> element.'],
  //13
  ['The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.', 'The checkValidity() method returns true if an input element contains valid data.', 'The select() method selects the entire contents of a text area.', 'The getElementById() method returns the element that has the ID attribute with the specified value.'],
  //14
  ['The scroll method takes in an (x, y) argument.', 'This would move the viewport to the top, left corner of the screen.', 'The move method manipulates particular elements.', 'The move method manipulates particular elements.'],
  //15
  ['There is no built-in value() function.', 'There is no built-in integer() function.', 'There is no built-in isNumber()', 'The isNaN() function determines whether a value is NaN or not.']
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
  if (counter < chap6Questions.length) {  // place upper limit on counter variable
    currentQuestion = chap6Questions[counter];  // choose question
    currentAnswers = chap6Answers[counter];    // choose corresponding answers
    currentCorrect = chap6Correct[counter];    // choose corresponding correct answer
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
  if (counter === chap6Questions.length -1) { // checks if the counter is at the final question
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
      this.style.cursor = 'auto';
      this.style.border = 'solid #00bb00 3px';            // change square style to reflect correct answer
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
      this.style.border = 'solid #ff7777 3px';              //  change square style to reflect wrong answer
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
  if (!(counter === (chap6Questions.length - 1))){ // check if counter is at maximum
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

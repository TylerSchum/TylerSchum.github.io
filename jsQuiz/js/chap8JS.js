var chap8Questions = [
//1
    'Extracting characters or substrings from a larger text string is known as ___________.',
//2
    'What is the property of the <strong>string</strong> class that returns the number of characters in a string?',
//3
    'Regular expression patterns in JavaScript must begin and end with which characters?',
//4
    'Which of the following is a method of the <strong>RegExp</strong> class for working with regular expressions?',
//5
    'Which metacharacter in a regular expression represents any single character?',
//6
    'Which metacharacter(s) in a regular expression represent characters to exclude?',
//7
    'A pattern that matches the beginning or end of a line is called a(n) ____________.',
//8
    'To match any metacharacters as a literal value in a regular expression, you must ___________.',
//9
    'Which of the following expressions would return <strong>false</strong>?',
//10
    'Which of the following quantifiers specifies that the preceeding character repeat at least 2 times?',
//11
    'Which of the following characters do you use to create a subexpressions?',
//12
    'Which of the following expressions represents numeric characters?',
//13
    'Which method of the <strong>Array</strong> class removes the last element from the end of an array?',
//14
    'What array would result from the following statement?\n[white, silver, blue].splice(1, 0, \"gray\");' ,
//15
    'The <strong>JSON.parse()</strong> method converts a value to which data type?',
//custom
    'Do you need to study more?'
];

var chap8Answers = [
//1
    ['parsing', 
    'compiling', 
    'rendering', 
    'stripping'],
//2
    ['chars', 
    'size', 
    'width', 
    'length'],
//3
    ['{ }', 
    '/ /', 
    '( )', 
    '[ ]'],
//4
    ['search()',
    'subexpression()', 
    'test()', 
    'class()'],
//5
    ['$', 
    '^', 
    '\\', 
    '.'],
//6
    ['()', 
    '[]', 
    '[^]', 
    '-'],
//7
    ['anchor', 
    'root', 
    'metacharacter', 
    'class'],
//8
    ['enclose the character in brackets \"[ ]\"', 
    'enclose the character in parentheses \"( )\"',
    'precede the character with a slash \"/\"',
    'precede the character wuth a backslash \"/\"'],
//9
    ['/^1./.test(\"1.10\")',
    '/^1\\./.test(\"1.10\")',
    '/^1.$/.test(\"1.10\")',
    '/^1\\.$/.test(\"1.10\")' ],
//10
    ['{2}',
    '{2,}',
    '+',
    '?'],
//11
    ['[ ]',
    '/ /',
    '( )',
    '{ }'],
//12
    ['\\s',
    '\\b',
    '\\d',
    '\\D'],
//13
    ['pop()',
    'push()',
    'shift()',
    'unshift()'],
//14
    ['[gray, silver, blue]',
    '[white, gray, blue]',
    '[white, gray, silver, blue]',
    '[gray, white, silver, blue'],
//15
    ['Object',
    'String',
    'Array',
    'Number'],
//custom
    ['A little', 
    'Definitely', 
    'I\'m a Javascript God', 
    'Life is pain']
];

var chap8Correct = [
//1
    'parsing',
//2
    'length',
//3
    '/ /',
//4
    'test()',
//5
    '.',
//6
    '[^]',
//7
    'anchor',
//8
    'precede the character wuth a backslash \"/\"',
//9
    '/^1\\.$/.test(\"1.10\")',
//10
    '{2,}',
//11
    '( )',
//12
    '\\d',
//13
    'pop()',
//14
    '[white, gray, silver, blue]',
//15
    'Object',
//custom
    ''
];

var altFacts = [
//1
    ['Parsing is the act of extracting characters or substrings from alarger string',
    'Compiling is the act of translating a program into machine language.',
    'Rendering is the processing of an outline image using color and shading to make it appear solid and three-dimensional.',
    'We leave our clothes on in development'],
//2
    ['There is no chars property of the String class.',
    'There is no size property of the String class',
    'There is no width proeprty of the String class',
    'The length property provides the length of the string.'],
//3
    ['Curly braces enclose statement blocks.',
    'Regular Expressions are enclosed with forward slashes.',
    'Parentheses enclose data that is specific to it\'s object.',
    'Brackets enclose an array of data.'],
//4
    ['search() is a method of the String class for searching for a match between a regular expression and this String object.',
    'There is no subexpression() method.',
    'The test() method executes a search for a match between a regular expression and a specified string.',
    'There is no class() method.'],
//5
    ['$ matches characters at the end of a string.',
    '^ matches characters at the beginning of a string.',
    '\\ identifies the next character as a literal value.',
    '. matches any single character.'],
//6
    ['() specifies required characters to include in a pattern match.',
    '[] specifies alternate characters allowed in a pattern match.',
    '[^] specifies characters to exclude in a pattern match.',
    '- identifies a possible range of characters to match.'],
//7
    ['An anchor is a regular expression pattern that matches the beginning or end of a line.',
    'Root normally refers to the root element, which is <HTML> on an HTML page.',
    'Metacharacters are special characters that define the pattern matching rules in a regular expression.',
    'In JavaScript classes serve as blueprints for new objects.'],
//8
    ['By enclosing the character in brackets, you create a character class consisting only of that character.', 
    'By enclosing the character in parentheses, you specify a subexpression consisting of that character.', 
    'By preceding a character with a slash, you would begin or end a regExp.', 
    'By preceding a character with a backslash, you specify that the character should be interpreted literally.'],
//9
    ['The first characters will be a 1 followed by any character, which is true.', 
    'The first character will be a 1 followed by a ., which is true.', 
    'The last characters will be a 1 followed by any character, which is true.', 
    'The last characters will be a 1 followed by a ., which is not true.'],
//10
    ['This would state that the preceding character should be repeated exactly 2 times.',
    'This would state that the preceding character should be repeated at least 2 times.',
    'This would state that the preceding character should be matched 1 more times.',
    'This would state that the preceding character should be matched 0 or 1 time.'],
//11
    ['Brackets specify a character class which gives alternate characters to match',
    'Slashes are used to define the opening and closing of a Regular Expression',
    'Parentheses are used to create a subexpression',
    'Curly braces are used as quantifiers that will contain a number of occurences.'],
//12
    ['\\s represents white space characters.',
    '\\b represents the backspace character.',
    '\\d represents numeric characters.',
    '\\D represents nonnumeric characters.'],
//13
    ['pop() removes the last element of an array, and returns that element.',
    'push() adds new elements to the end of an array, and returns the new length.',
    'shift() removes the first element of an array, and returns that element.',
    'unshift() adds new elements to the beginning of an array, and returns the new length.'],
//14
    ['arr.splice (1, 0, \'item\') specifices an index position of 1, 0 items will be removed, and add the item \'item\' at that index.',
    'arr.splice (1, 0, \'item\') specifices an index position of 1, 0 items will be removed, and add the item \'item\' at that index.',
    'arr.splice (1, 0, \'item\') specifices an index position of 1, 0 items will be removed, and add the item \'item\' at that index.',
    'arr.splice (1, 0, \'item\') specifices an index position of 1, 0 items will be removed, and add the item \'item\' at that index.'],
//15
    ['The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.',
    'JSON.parse is used to convert server data strings to useable data objects for JavaScript.',
    'JSON.parse is used to convert server data strings to useable data objects for JavaScript.',
    'JSON.parse is used to convert server data strings to useable data objects for JavaScript.'],
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

function pickQuestion() {
    if (counter < chap8Questions.length) {  // place upper limit on counter variable
        currentQuestion = chap8Questions[counter];  // choose question
        currentAnswers = chap8Answers[counter];    // choose corresponding answers
        currentCorrect = chap8Correct[counter];    // choose corresponding correct answer
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

function winLose() {
    var clickedColor = this.innerHTML;
    var altFactsArray = altFacts[counter];
    if (counter === chap8Questions.length - 1) { // checks if the counter is at the final question
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
                if (document.documentElement.clientWidth < 361) {
                    this.style.fontSize = '1.2em';
                } else {
                    this.style.fontSize = '1.3em';
                }
            } else {
                this.style.fontSize = '1.6em';
            }
            this.style.boxShadow = 'none';
            this.style.paddingTop = '1%';
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
                if (document.documentElement.clientWidth < 361) {
                    this.style.fontSize = '1.2em';
                } else {
                    this.style.fontSize = '1.3em';
                }
            } else {
                this.style.fontSize = '1.6em';
            }
            this.style.boxShadow = 'none';
            this.style.paddingTop = '1%';
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

function resetStyles() { // resets all squares' styles to the default design
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

function resetQuestion() { // resets layout without changing question
    resetStyles();
    pickQuestion();
}

function addOne() {  // increments counter up by one
    counter++;
}

function reset() { // resets page to first question with default layout
    counter = 0; // resets counter
    resetStyles();
    pickQuestion();
}

function back() { // goes to previous question
    if (counter !== 0) { // check if counter is at minimum
        counter--;
        resetStyles();
        pickQuestion();
    }
}

function skip() { // goes to next question
    if (!(counter === (chap8Questions.length - 1))) { // check if counter is at maximum
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
function init() {
    pickQuestion();
    createEventListeners();
}

if (window.addEventListener) {
    window.addEventListener('load', init, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', init);
}

// Tyler Schum

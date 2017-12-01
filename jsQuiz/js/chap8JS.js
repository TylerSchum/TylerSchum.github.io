chap8Questions [
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

chap8Answers = [
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
    'There is no subexpression() method. substring() is a method of the String class for extracting part of a string without changing the initial value.',
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
    []
];
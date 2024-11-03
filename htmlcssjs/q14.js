// Initialize a string
let str = "Hello, World!";

// 1. String.length
console.log('Length of string:', str.length);

// 2. String.toUpperCase()
console.log('Uppercase:', str.toUpperCase());

// 3. String.slice()
console.log('Slice from index 7 to 12:', str.slice(7, 12));

// 4. String.replace()
console.log('Replace "World" with "JavaScript":', str.replace('World', 'JavaScript'));

// 5. String.split()
let words = str.split(' ');
console.log('Split by space:', words);

// 6. String.trim()
let paddedStr = "   Hello, World!   ";
console.log('Trimmed string:', paddedStr.trim());

// 7. String.includes()
console.log('Does string include "World"?', str.includes('World'));

// 8. String.startsWith()
console.log('Does string start with "Hello"?', str.startsWith('Hello'));

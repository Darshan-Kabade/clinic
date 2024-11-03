// Initialize an array of fruits
let fruits = ['apple', 'banana', 'orange'];

// 1. Array.push()
fruits.push('grape');
console.log('After push:', fruits);

// 2. Array.pop()
let lastFruit = fruits.pop();
console.log('After pop:', lastFruit);
console.log('Fruits now:', fruits);

// 3. Array.shift()
let firstFruit = fruits.shift();
console.log('After shift:', firstFruit);
console.log('Fruits now:', fruits);

// 4. Array.unshift()
fruits.unshift('kiwi');
console.log('After unshift:', fruits);

// 5. Array.slice()
let citrusFruits = fruits.slice(1, 3);
console.log('Slice from index 1 to 3:', citrusFruits);

// 6. Array.splice()
fruits.splice(1, 1, 'mango'); // Remove 1 element at index 1 and add 'mango'
console.log('After splice:', fruits);

// 7. Array.forEach()
console.log('For each fruit:');
fruits.forEach(fruit => {
    console.log(fruit);
});

// 8. Array.map()
let numbers = [1, 2, 3];
let squared = numbers.map(num => num * num);
console.log('Squared numbers:', squared);

// 9. Array.filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// 10. Array.reduce()
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers:', sum);

// 11. Array.find()
let firstEven = numbers.find(num => num % 2 === 0);
console.log('First even number:', firstEven);

// 12. Array.includes()
let hasBanana = fruits.includes('banana');
console.log('Does fruits include banana?', hasBanana);

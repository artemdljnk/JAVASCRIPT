// --------------#dFeorS3m7u-------------

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'java script is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// ------------#8lld9HMxXWB--------------

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'java script is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// --------#ClDsAm7xba7------------

// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVA SCRIPT IS COOL'
//
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

// --------#0b89BkYZwu-----------

// let str = ` dirty string   `
//
// console.log(str.trim())

// ------------#bfoJuse4ZzP------------

// let str = `Ревуть воли як ясла повні`;
// let arr = str.split(' ');
// console.log(arr);

// -----------#Rbr5kEQ-----------

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let str = arr.map(number => number + '')
//
// console.log(str)

// -----------#5hqyKTfmc-------------

// function sortNums(array, direction) {
//     if(direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     }
//     if(direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
// }

// ----------#bolvdlhP------------

const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({ suit, value });
    }
}

const aceOfSpades = deck.find(card => card.suit === 'spades' && card.value === 'A');
console.log('Пиковый туз:', aceOfSpades);

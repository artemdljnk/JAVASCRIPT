// ----------#dFeorS3m7u----------

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'java script is cool'
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// ---------#8lld9HMxXWB---------

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'java script is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// ------------#ClDsAm7xba7----------

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVA SCRIPT IS COOL'
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// -------------#0b89BkYZwu---------

// let str = ` dirty string   `
// console.log(str.trim())

// ----------------#bfoJuse4ZzP------------

// let str = 'Ревуть воли як ясла повні'
// console.log(str.split(' '))

// ---------------#Rbr5kEQ------------

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let str = arr.map(num => num + '')
// console.log(str)

// -----------------#5hqyKTfmc--------------

// function sortNums(array, direction) {
//     if (direction === 'asc') return array.sort((a, b) => a - b);
//     if (direction === 'desc') return array.sort((a, b) => b - a);
// }

// --------#yo06d74c1C-----------

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sorted = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// let filtered =  sorted.filter(value => value.monthDuration > 5);
// let mapped = filtered.map((value, index) => {
//     value.id = index + 1;
//     return value;
// })
// console.log(mapped);

// --------------#4LJn7zBx-------------

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('saas')
// }))
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker')
// }))

// -----------------#bolvdlhP----------------

// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// let deck = []
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({
//             cardSuit: suit,
//             value: value,
//             color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
//         });
//     }
// }
// const aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// const sixes = deck.filter(card => card.value === '6');
// const redCards = deck.filter(card => card.color === 'red');
// const diamonds = deck.filter(card => card.cardSuit === 'diamond');
// const highClubs = deck.filter(card =>
//     card.cardSuit === 'clubs' &&
//     ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
// );
// console.log(deck);

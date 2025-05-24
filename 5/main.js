// ----------------------#I2XsG6f---------------

// let solve = (a, b) => a + b;

// --------------#ETGAxbEn8l-------------

// let solve = (r) => Math.PI * r * r;

// ------------#Mbiz5K4yFe7---------------

// let solve = (radius, height) => 2 * Math.PI * radius * height;

// ------------------#SIdMd0hQ------------

// let solve = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }

// ---------------#59g0IsA------------

// let solve = (text) => {document.write(`<p>${text}</p>`)};

// ---------------#hOL6126---------

// let solve = (text) => {
//         document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)}

// -------------#0Kxco1edSN--------------

// let solve = (text, counter) => {
//         document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`'<li>' + ${text} + '</li>'`);
//     }
//     document.write('</ul>');
// }

// ---------------#gEFoxMMO-----------------------

// const foobar1 = (arrayOfPrimitives) => {
//     document.write(`<ul>`);
//     for (const item of arrayOfPrimitives) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// foobar1([1123, 123, 12, 312, 321, 3, 'asdads', true]);

// ---------------#bovDJDTIjt------------

// const foobar2 = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// };
//
// foobar2([
//     {id: 1, name: 'kokos', age: 123},
//     {id: 2, name: 'kokos', age: 123},
//     {id: 3, name: 'kokos', age: 123},
//     {id: 4, name: 'kokos', age: 123},
//     {id: 5, name: 'kokos', age: 123},
// ]);

// ----------------------#pghbnSB------------------

// const arrayMinValue = (numbers) => {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// };
//
// console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));

// ----------------------------#EKRNVPM--------------------

// const sum = (arr) => {
//     let basket = 0;
//     for (const item of arr) {
//         basket = basket + item;
//     }
//     return basket;
// };
//
// console.log(sum([1, 2, 10]))

// ----------------------#kpsbSQCt2Lf----------------

// const swap = (arr, i1, i2) => {
//     if (i1 < arr.length && i2 < arr.length) {
//         let temp = arr[i1];
//         arr[i1] = arr[i2];
//         arr[i2] = temp;
//         return arr;
//     }
//     return '!!!!!!!';
// };
//
// console.log(swap([11, 22, 33, 44], 2, 30))

// -------------------------#mkGDenYnNjn.html------------------

// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     let chosenCurrency;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency = item;
//         }
//     }
//     let result = sumUAH / chosenCurrency.value
//     return result
// };
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'))

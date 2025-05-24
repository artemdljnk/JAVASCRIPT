// ------------#HmvAfRQM-----------

// let divCarts = document.getElementById("carts");
//
// fetch('https://dummyjson.com/carts')
// .then(value => value.json())
// .then(cartsObject => {
//     const {carts} = cartsObject;
//     console.log(carts);
//
//     for (const cart of carts) {
//         const div = document.createElement('div');
//         div.classList.add('cart-container');
//         div.innerText = `${cart.id} ${cart.total}`
//         divCarts.appendChild(div);
//     }
// })

// -------------#whXxOBlYS0H------------

let divRecepies = document.getElementById("recepies");

fetch('https://dummyjson.com/recipes')
.then(value => value.json())
.then(recipesObject => {
    const {recipes} = recipesObject;
    console.log(recipes);

    for (const recipe of recipes) {
        const div = document.createElement('div');
        div.classList.add('recipe-container');
        let divWidthInfo = document.createElement('div');
        divWidthInfo.innerHTML = `
        "name": ${recipe.name},
        "instructions": ${recipe.instructions}
        `
        const ol = document.createElement('ol');
        for (const rep of recipe.ingredients) {
            let li = document.createElement('li');
            li.innerText = `
            ${rep}
            `
            ol.appendChild(li);
        }
        
        div.append(divWidthInfo, ol);
        divRecepies.appendChild(div);
    }
})
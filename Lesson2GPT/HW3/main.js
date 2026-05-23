let genshinTeam = ['Arlechino', 'Keqing']
let secondTeam = genshinTeam
secondTeam[2] = 'Fischl'
console.log(genshinTeam) //Честно вообще хз, наверное потому что мы связали с помощью переменных два массива и
// теперь это как один считается

let workoutDay = 1
switch (workoutDay){
    case 1 && 4:
        console.log('Upper split')
        break
    case 2 || 5:
        console.log('Lower split')
        break
    default:
        console.log('Rest & Recovery')
}

let potassiumLevel = 32
let calc = potassiumLevel > 100 ? 'Авокадо работает' : 'Нужно ещё огурцов'
console.log(calc)

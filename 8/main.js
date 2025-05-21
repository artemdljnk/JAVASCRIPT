// -----------------#iz6emEsP2BA----------------

// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//
// coursesAndDurationArray.map((course, index) =>({...course, id: index + 1}));

// ----------------------#AiN5CoUQ------------------

function cloner(object) {
    if(object){
        const s = JSON.stringify(object);
        const parse = JSON.parse(s);
        return parse;
    }
    throw new Error(`!!!!!!!!!!!!!`);
}

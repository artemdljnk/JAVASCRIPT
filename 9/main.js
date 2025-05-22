// ------------#8Nmt60ZT--------------

// let div = document.createElement('div')
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// document.body.appendChild(div)
// let cloneNode = div.cloneNode(true);
// document.body.appendChild(cloneNode)

// ----------------#OPLI89c9G--------------

// let arr = [‘Main’,’Products’,’About us’,’Contacts’]
// let menu = document.createElement('ul');
// menu.classList.add('menu');
//
// for (const arrElement of arr) {
//     document.createElement('li')
//     li.innerText =  item;
//     menu.appendChild(li);
// }
//
// document.body.appendChild(menu);

// // ------------#jeBqHV525U5---------------
// //
// // let coursesAndDurationArray = [
// //
// //     {title: ‘JavaScript Complex’, monthDuration: 5},
// //     {title: ‘Java Complex’, monthDuration: 6},
// //     {title: ‘Python Complex’, monthDuration: 6},
// //     {title: ‘QA Complex’, monthDuration: 4},
// //     {title: ‘FullStack’, monthDuration: 7},
// //     {title: ‘Frontend’, monthDuration: 4}
// // ];
// //
// // for (const course of coursesAndDurationArray) {
// //     let div = document.createElement('div');
// //     div.innerText = `course ${course.title} course ${course.duration}`;
// //     document.body.appendChild(div);
// // }

// ----------------------#Kx1xgoKy8--------------

// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     document.createElement('div')
//
//     const div = document.createElement('div')
//     const h2 = document.createElement('h2')
//     h2.innerText = course.title
//     const p = document.createElement('p')
//     p.innerText = course.description
//
//     div.append(h2, p)
//
//     document.body.appendChild(div);
// }

// =============================================

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.className = 'course';

    let titleDiv = document.createElement('div');
    titleDiv.className = 'title-style';
    titleDiv.textContent = `${course.title}`;

    let monthDiv = document.createElement('div');
    monthDiv.className = 'month-style';
    monthDiv.textContent = `${course.monthDuration}`;

    let hourDiv = document.createElement('div');
    hourDiv.className = 'hour-style';
    hourDiv.textContent = `${course.hourDuration}`;

    let block = document.createElement('div');
    block.className = 'block-style';
    block.appendChild(monthDiv);
    block.appendChild(hourDiv);

    let modulesDiv = document.createElement('div');
    modulesDiv.className = 'modules';

    let ul = document.createElement('ul');
    for (let module of course.modules) {
        let li = document.createElement('li');
        li.textContent = module;
        ul.appendChild(li);
    }
    modulesDiv.appendChild(ul);
    courseDiv.appendChild(titleDiv);
    courseDiv.appendChild(block);
    courseDiv.appendChild(modulesDiv);
    document.body.appendChild(courseDiv);
}
//newSet()
const products = [
  { title: 'back-bench', company: 'ikea' },
  {
    title: 'table',
    company: 'marcos',
  },
  {
    title: 'chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// we can get company name using this method
const companies = products.map((item) => item.company);
console.log(companies);

// with new Set we can get only the company once
const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

//we can then convert it in an array using the spead operator
const finalCompanies = ['all', ...uniqueCompanies];
console.log(finalCompanies);

//Same in juste one line
const risultLine = ['all', ...new Set(products.map((item) => item.company))];
console.log(risultLine);

function highlight(text, ...args) {
  // console.log({ text, args });
  // return 'hello there';

  const awesomeText = text.map((item, index) => {
    return `${item} <strong class='blue'>${args[index] || ''}</strong>`;
  }); // means
  return awesomeText.join('');
}

const triple = (val1, val2) => val1 * val2 * 3;
console.log(triple(2, 2));

//arrow fct as callback fct
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const big = numbers.filter((number) => number > 3);
console.log(big);

//better to use normal fct for addEventListener
// btn.addEventListener('click', function () {
//   console.log(this);
//   this.style.backgroundColor = 'black';

//but if using setTimeout ok to use =>
//   setTimeout(() => {
//     this.style.backgroundColor = 'red';
//   }, 5000);
// });

//default parameter
const jo = 'John';
const peter = 'Peter';

// function sayHii(person = 'Susan') {
//   //give an arg
//   console.log(`Hi ${person}`);
// }
// const sayHello = (person = 'BOB') => console.log(`Hello ${person}`);

// sayHii();
// sayHello(peter);
// sayHello();

//Destructuring Array
const fruits = ['orange', 'banana'];
// old method

const friends = ['jordan', 'gege', 'anna'];
//const [jordan, gege, anna] = friends;
const [jor, gege, anna] = friends;
// console.log(jor, gege, anna);
const [jojo, , anana] = friends; // we can skip a value with coma
// console.log(jor, anana);

// //swap var
// let first = 'bob';
// let second = 'john';
// [second, first] = [first, second];
// console.log(second, first);

// destructuring objects
const bruno = {
  firstN: 'bruno',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};
const {
  firstN: nom,
  last,
  city,
  siblings: { sister: sis },
} = bruno; //var must have same name but can rename it
console.log(nom, last, city, sis);

function printPerson({ firstN, last, city }) {
  //typical react typo
  console.log(firstN, last, city);
}
// printPerson(bruno);

//new string method
const employeeName = 'peter allen';
const employee = '23456-enp-peter';
const manager = '23456-nam-jo';

// startsWidth
// console.log(employeeName.startsWith('pe'));
// console.log(employee.startsWith('enp', 6));
//second para is the position, start from position 6

//endWidth
// console.log(employeeName.endsWith('allen'));

//includes
console.log(employee.includes('peter'));

//for of
const vegies = ['oinon', 'leek', 'letuce', 'cabage'];
const weirdName = 'Poilu de la moustiquaire';
let shortName = '';

for (const vegie of vegies) {
  //means that we separate ou array
  if (vegie === 'letuce') {
    //means that when we get letuce, loop will break
    // break; //stop
    continue; //means that we zap lettuce but continue the loop
  }

  console.log(vegie);
}

//spread Operator ...
//means that we split into single items and copy them
const udemy = 'udemy';
const letters = [...udemy]; //means we want our values in a new array [], ... means that we want to separate
console.log(letters);

const boys = ['john', 'bob', 'will'];
const girls = ['susy', 'lola'];
const bestFriend = 'arnold';

//powerfull means that we'll have only one new array with all datas
const friendFor = [...boys, ...girls, bestFriend];
console.log(friendFor);

const newFriends = [...friendFor]; // using spread operator is = we update only newFriends and notfriendFor
newFriends[0] = 'katrina';
console.log(newFriends);
console.log(friendFor);

// ... with objects
const personObj = { name: 'gigi', job: 'garbageman' };
const newPersonObj = { ...personObj, city: 'chicago', name: 'glouglou' }; //we get all property
// we can also add a new property or overwrite it
console.log(newPersonObj);

// ... and DOM elements
const headings = document.querySelectorAll('h1');
const tot = document.getElementById('tot');
const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join('');
tot.innerHTML = text;

// ... fct arg
const numb = [23, 45, 65, 88];
console.log(Math.max(...numb));

const bibi = ['bibi', 'sol'];

const sayBye = (name, lastName) => {
  console.log(`Bye ${name} ${lastName}`);
};
sayBye(...bibi);

//Rest Operator ... collect/assemble items
//arrays

//object
const brand = { name: 'hm', hq: 'sweden', turnover: '50b$' };
const { hq, ...rest2 } = brand;
console.log(hq, rest2);
//sweden Object { name: "hm", turnover: "50b$" }

//fct parameter
const getAverage = (name, ...scores) => {
  // we gather all of them with rest
  // console.log(name);
  // console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score; //by using for of we separate numb and then += them
  }
  console.log(`${name}'s average basket is ${total / scores.length}`);
};
getAverage(brand.name, 78, 90, 85);

//Array of
// const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const various = Array.of('john', 2, true);
console.log(various);
//create new array

const udemyCourse = 'udemy';
console.log(Array.from(udemy));

function countTotal() {
  // console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}
countTotal(67, 89, 54, 100);

//nodelist
const p = document.querySelectorAll('p');
const firstH = document.getElementById('first');
const secondH = document.getElementById('second');

// console.log(p);
//first method
let aNewText = Array.from(p);
console.log(aNewText);
aNewText = aNewText.map((item) => `<span>${item.textContent}</span>`).join(' ');
firstH.innerHTML = aNewText;

//most efficient method but auite difficult
const textTrou = Array.from(p, (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');
//2nd args would be the map method (means)
secondH.innerHTML = textTrou;

//Find - get specific items
//findIndex = get index of the items
//every = every item in the array
// every =evry item in the array
//some - at leaast one
const students = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'ane' },
];

const ane = students.find((student) => student.name === 'ane');
// we are accessing each student / if student.name match ane (===)

console.log(ane); // we get our object
console.log(ane.name); // to get the text

const aneIndex = students.findIndex((student) => student.name === 'ane');

console.log(aneIndex); // get the index for result

const newStudent = students.slice(0, 2); // or could have used students.slice(0, aneIndex) if we wanted to slice/remove every item ane and later item
console.log(newStudent);

const grades = ['A', 'B', 'A', 'C'];
const goodGrades = ['A', 'A', 'A', 'B'];
//every
// const allGoodGrades = grades.every((grade) => grade !== 'C'); //if no match C return true
// console.log(allGoodGrades);

// //some
// const oneBadGrade = grades.some((grade) => grade === 'C');
// console.log(oneBadGrade);

for (const propertyName in bruno) {
  console.log(`${propertyName} : ${bruno[propertyName]}`);
}
//3 methods to convert objects into arrays
//Object.keys - convert property names into array
//Object.values - convert property values
//Object.entries - convert both
// const keys = Object.keys(person);
// console.log(keys);

// const valueOb = Object.values(person);
// console.log(valueOb);

// const entry = Object.entries(person);
// console.log(entry);

const personJohn = {
  name: 'john',
  age: 25,
  status: 'student',
};

const rzlt = Object.entries(personJohn);

//map method
const newResult = rzlt.map((item) => {
  const [first, second] = item;
  // console.log(first, second);
  return first; // first will return only the keyy
});

console.log(newResult);

//for of
for (const [first, second] of rzlt) {
  // const [first, second] = item;
  console.log(first, second);
}

btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

//async
function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // we have to resolve it
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
      // we have to rejetc it
    }
  });
}

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was a error, value is false`);
  }
});
promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });

//ajax

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './api/sample.txt'); // open ajax
  xhr.onreadystatechange = function () {
    // we want ready state = 4
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log('done');
      console.log(xhr.responseText);
      const text = document.createElement('p');
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}

const url = 'https://source.unsplash.com/random';
btn.addEventListener('click', () => {
  loadImage(url)
    .then((taco) => container.appendChild(taco))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
}

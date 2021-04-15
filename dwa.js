// МЕТОДЫ И СВОЙСТВА
function methods() {
let fucking = { 
    color1: 'fuck1',
    color2: 'fuck2', 
    colors: { 
        fuck3: 'fuck4',
        fuck4: 'fuck5'
    },
    test: function makeTest() {
        console.log("Привет!");
    }
}

fucking.test()

const {fuck3, fuck5} = fucking.colors
console.log(fuck3)
}

// .SORT
let arr = [1, 45, 6 ,67, 2];
arr.sort(compaerNum);
console.log(arr);

function compareNum(a, b) {
    return a - b
}


// .FOR EACH
let arr = [1, 45, 6 ,67, 2];
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
})


// FOR OF
let arr = [1, 45, 6 ,67, 2];
for (let value of arr) {
    console.log(value)
}


// .SPLIT & .JOIN
let str = prompt('', '');
let  products = str.split();
console.log(products.join('; '));
// КОПИЯ ОБЬЕКТА
const obj = {
    1: 2, 
    3: 4, 
};

const newObj = Object.assign({}, arr)
console.log(newArr)

// КОПИЯ МАССИВА 
let arr = [1, 3, 5, 6, 7]

const oldArr = arr.slice()
oldArr[2] = 54;
console.log(oldArr);
console.log(arr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);


// ВНОСИМ В ФУНКЦИЮ ВНЕШНИЕ ДАННЫЕ
      function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 3, 4];

log(...num)


// КОПИЯ МАССИВА __ЕС9__
const array = ['a', 'b'];

const newArrayy = [...array]

const q = {
    one: 1,
    two: 2
}

const newObj1 = {...q}

const a;
console.log(a)
// Задача 1. Пофиксить
// Написать функцию принимающую на вход массив чисел и возвращает сумму модулей этих чисел, возведенное в квадрат. (Если на вход приходит массив [-1, -2, 3], то возвращающее число будет 36)

// let arr = [-1, 8, -7, 5, -6, 1]

// function funcPow(array) {
//   return Math.pow(funcSum(array), 2)

// }

// function funcSum(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + Math.abs(array[i])
//   }
//   return sum
// }

// console.log(funcPow(arr));

// Рудимент

// function funcAbs(number) {
//   if (number < 0) {
//     number = Math.abs(number)
//   }
//   return number
// }

// Рудимент

// Задача 2 В работе
// Создать функцию для  выведения элементов из массива которые будут равны строке "3". Приходит массив строк [ "a", "b", 3, "a", null, Nan, 'abrakadabra ', '3', 30, undefained] и вывести числом количество совпадений в массиве с тройкой "3" в console.log(). Массив может содержать разные данные.

// let array = ["a", "b", 3, "a", null, NaN, 'abrakadabra ', '3', 30, undefined, '3']

// function findString3(array) {
//   let a = 0
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element === '3') {
//       a = a + 1
//     }
//   }
//   console.log(a);
// }
// findString3(array)

// Задание 3.
// Написать функцию принимающая на вход массив строк. Функция должна удалить все символы русской буквы «с» из строк в массиве и вернуть готовый массив с отредактированными строками.
// Например, на функцию подали массив ["Максим", "Car", "Сергей", "Андрей", "culture", "Ярослав", "Кирилл", null, undefined], после выполнения функция возвращает следующий массив ["Маким", "Car", "ергей", "Андрей", "culture", "Яролав", "Кирилл"] 

// let arr = ["Максим", "Car", "Сергей", "Андрей", "culture", "Ярослав", "Кирилл", null, undefined]
// let emptyArr = []

// function replaceC(array) {
//     let newArr = []
//     if (array == null) {
//         return newArr
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "string") {
//             newArr.push(array[i].replaceAll(/[С|с]/g, ""))
//         }
//     }
//     return newArr
// }

// // console.log(arr);
// console.log(replaceC(undefined));

// Задача 4 (Необязательная)
// Сделайте функцию принимающую на вход массив и число элементов указывающее сколько элементов может быть в одном массиве (['a', 'b', 'c', 'd'], 2); 
// И ожидается возврат с функции: [['a', 'b'], ['c', 'd']]

// Задача 4
// Сделать вывод значений в html из массива c объектами где ключ title означает тэг <h1></h1> и вывод значения ключа внутрь этого тэга, ключ text означает paragraph <p></p> значение ключа text выводить в <p>, ключ colorText означает цвет текста внутри тэга <p></p>

const array = [{
    title: 'Title 1',
    text: 'Paragraph 1',
    colorText: 'red',
},
{
    title: 'Title 2',
    text: 'Paragraph 2',
    colorText: 'blue',
},
{
    title: 'Title 3',
    text: 'Paragraph 3',
    colorText: 'green',
},
{
    title: 'Title 4',
    text: 'lorem',
    colorText: 'magenta'
}]

function doneIGuess(array) {
    
for (let i = 0; i < array.length; i++) {

    let createDiv = document.createElement('div');
    document.body.append(createDiv)
    let createH1 = document.createElement('h1');
    let createP = document.createElement('p');
    createDiv.append(createH1)
    createDiv.append(createP)
    createH1.innerText = array[i].title
    createP.innerText = array[i].text
    createP.style.color = array[i].colorText
}

}

doneIGuess(array)
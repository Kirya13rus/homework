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

let arr = ["Максим", "Car", "Сергей", "Андрей", "culture", "Ярослав", "Кирилл", null, undefined]
let newArr = []
let emptyArr = []

function replaceC(array) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            arr[i] = newArr.push(arr[i].replace(/с/g, '').replace(/С/g, ''))
        }
    }
    return newArr
}

function enterOthersValues(array) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "string", typeof arr[i] != "number") {
            arr[i] = emptyArr.push(arr[i])
        }
     }
    return emptyArr
}
console.log(arr);
console.log(replaceC(newArr));
console.log(enterOthersValues(emptyArr));

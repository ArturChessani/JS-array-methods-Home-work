// Без срока. Сдать в виде файла или репозитория

// 1. Массив чисел от 5 до 10 добавить в конец другого массива
// const arrOne = [1, 2, 3, 4];
// const arrTwo = [5, 6, 7, 8, 9, 10];
// const arr = arrOne.concat(arrTwo);
// console.log(arr);



// 2. Дан массив чисел [4, 9, 16, 25, 36, 49]. На его основе создать массив с квадратными корнями чисел (Math.sqrt)
// const arr = [4, 9, 16, 25, 36, 49];
// const myArr = [];
// arr.forEach((element) => {
//   myArr.push(Math.sqrt(element))
// });
// console.log(myArr);



// 3. Дан массив чисел 1...20. Вычислить сумму нечетных чисел массива
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const f = arr.filter((element) => {
//   if (element % 2 == 0) {
//     return false;
//   } else {
//     return true;
//   }
// });
// console.log(f);

// const newArr = f.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// });

// const result = newArr;
// console.log(result);



// 4. * Дан массив чисел 1 до 10. Удалить у него каждое нечетное значение
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(0,1);
// arr.splice(1,1);
// arr.splice(2,1);
// arr.splice(3,1);
// arr.splice(4,1);
// console.log(arr);



// 5. * Обычным циклом создать массив строк от "user1" до "user15".
// Удалить все ячейки содержащие на конце строки символы 2, 3, 4.
// Пример (подчёркнутые должны быть удалены)
// [ "user1", _"user2"_, _"user3"_, _"user4"_, "user5", ..., _"user12"_ ]

const arr = [];
for(let i = 1; i < 16; i ++) {
  arr.push("user" + [i])
}
arr.splice(1, 3);
console.log(arr);

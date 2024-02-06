// 2.  Напишіть скрипт, якй приймає масив чисел [23,1,45,87,4,55,6], використовуючи for of для пошуку найбільшого числа в масиві.
const numbers = [23,1,45,87,4,55,6];
let bigestNumber = numbers[0];
for (const number of numbers) {
    if (number > bigestNumber){
        bigestNumber = number
    }
}
console.log(bigestNumber);
// 3.  Напишіть скрипт, який перевіряє наявність в масиві ["Pyton", "C++", "C#", "PHP"] значення "Java Script". 
// Якщо в масиві такого значення немає вивести в консоль "Значення Java Script в списку немає, додаємо в масив". 
//Після чого додати "Java Script" в кінець масиву.
const arrays = ["Pyton", "C++", "C#", "PHP"];
const js = "Java Script";
for (const array of arrays) {
    if (js === arrays) {
        console.log('Java Script є у масиві');
    } else {
        console.log('Java Script немає у масиві');
    }
} 
arrays.push(js);
console.log(arrays);
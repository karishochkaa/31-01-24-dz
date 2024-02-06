// 4.У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"]. В результаті вам потрібно отримати ["Pyton", "C++", "C#","PHP"]
const array = ["1-Pyton", "2-C++", "3-C#","4-PHP"];
let resultArray = [];
const arr0 = array[0].split("1-");
console.log(arr0.splice(0, 1));
console.log(arr0);
const arr1 = array[1].split("2-");
console.log(arr1.splice(0, 1));
console.log(arr1);
const arr2 = array[2].split("3-");
console.log(arr2.splice(0, 1));
console.log(arr2);
const arr3 = array[3].split("4-");
console.log(arr3.splice(0, 1));
console.log(arr3);
resultArray.push(arr0, arr1, arr2, arr3);
console.log(resultArray);
console.log(resultArray.join(", "));

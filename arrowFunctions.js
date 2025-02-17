const numbers = [1, 2, 3, 4, 5];

function myFilter(array, callback) {
  const resArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      resArr.push(array[i]);
    }
  }
  return resArr;
}

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, (num) => num > 3);
console.log(greaterThanThree); // [4, 5]

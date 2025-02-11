// Диапазон
let startNum = 1;
let endNum = 100;

// Массив чисел от 1 до 100
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// Формируем случайное число
function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

// Загаданное число
const guessNumber = randomNumber(startNum, endNum);
console.log(`Загаданное число: ${guessNumber}`);

// Бинарный поиск
function guessingNumber(arr, target) {
  let startIndex = 0;
  let lastIndex = arr.length - 1;

  while (startIndex <= lastIndex) {
    const mid = Math.floor((startIndex + lastIndex) / 2);

    console.log(`Компьютер 2: Пробую число ${arr[mid]}`);

    if (target === arr[mid]) {
      console.log("Компьютер 1: Угадал, поздравляю! \n");
      break;
    } else if (target > arr[mid]) {
      console.log("Компьютер 1: Больше \n");
      startIndex = mid + 1;
    } else if (target < arr[mid]) {
      console.log("Компьютер 1: Меньше \n");
      lastIndex = mid - 1;
    }
  }
}

guessingNumber(numbers, guessNumber);

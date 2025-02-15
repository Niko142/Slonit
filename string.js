const longString = "My name is Nikita. I am from Russia";

function toUpperFirstLetter(str) {
  str = str.trim();
  return `${str.toUpperCase()[0]}${str.slice(1, str.length)}`;
}

console.log(toUpperFirstLetter(" nikita "));

function cutLongStrings(str, range) {
    if (str.length <= range) {
        return str.trim();
    }
    const pattern = /[,.!?:;]([^,.!?:;]*)$/;

    let checkMark = str.slice(0, range).search(pattern);
    let checkSpace = str.slice(0, range).lastIndexOf(' ');

    let cutIndex = Math.max(checkMark, checkSpace);

    if (cutIndex === -1) {
        return str.slice(0, range).trim() + "...";
    }

    return str.slice(0, cutIndex).trim() + "...";
}

console.log(cutLongStrings(longString, 9));
console.log(cutLongStrings("Проверка на отсекание строки! Все должно быть корректно", 30));

const firstStr = "Nick";
const secondStr = "Nick12";

function findSubstring(str1, str2) {
  if (str1.trim().includes(str2.trim()) || str2.trim().includes(str1.trim())) {
    return true;
  } else {
    return false;
  }
}

console.log(findSubstring(firstStr, secondStr));

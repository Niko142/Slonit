const array = [1, 2, 3, 4, 5];
const peopleArray = ["Nikita", "Alisa", "Viktor", "Alisa"];

function mySlice(arr, start, end) {
  let newArr = [];
  for (let i in arr) {
    if (i >= start && i < end) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(mySlice(array, 1, 3));

function MyIndexOf(arr, item, from = 0) {
  let flag = false;

  for (let i in arr) {
    if (arr[i] === item && i >= from) {
      flag = true;
      return +i;
    }
  }

  if (!flag) {
    return -1;
  }
}

console.log(MyIndexOf(peopleArray, "Alisa"));

function myIncludes(arr, item, from = 0) {
  let flag = false;

  for (let i in arr) {
    if (arr[i] === item && i >= from) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  return flag;
}

console.log(myIncludes(peopleArray, "Alisa"));

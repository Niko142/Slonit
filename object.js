const user = {
  name: "Nikita",
  age: 42,
  sum: 100,
  adress: "Back-street",
  adaw: NaN,
};

const sortObj = {
  name: "Vasya",
  friends: 5,
  likes: 19,
  projects: 7,
};

function getSummNumbers(obj) {
  let totalSum = 0;
  for (let i in obj) {
    if (!isNaN(obj[i])) {
      totalSum += obj[i];
    }
  }
  return totalSum;
}

console.log(getSummNumbers(user));

function getSortArr(obj) {
  const resArr = Object.keys(obj)
  .filter((ind) => !isNaN(obj[ind])).
  sort((a, b) => obj[b] - obj[a]);
  return resArr;
}

console.log(getSortArr(sortObj));

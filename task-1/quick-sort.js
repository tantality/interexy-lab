function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const pivot = arr[middle];
  const less = [], equal = [], greater = [];

  for (let item of arr) {
    if (item < pivot) less.push(item);
    if (item === pivot) equal.push(item);
    if (item > pivot) greater.push(item);
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const data = Array.from(Array(100000), () => Math.floor(Math.random() * 100) + 1);

console.time("Quick sort execution time");
const sortedData = quickSort(data);
console.timeEnd("Quick sort execution time");

console.log(`Array length: ${data.length}`);

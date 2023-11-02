function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [], equal = [], greater = [];

  for (let item of arr) {
    if (item < pivot) less.push(item);
    else if (item === pivot) equal.push(item);
    else greater.push(item);
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const data = Array.from(Array(100000), () => Math.floor(Math.random() * 100) + 1);
const sortedData = quickSort(data);

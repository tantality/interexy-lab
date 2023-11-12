const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await delay(0);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const data = Array.from(Array(100), () => Math.floor(Math.random() * 100) + 1);

(async function () {
  console.time("Bubble sort execution time");
  await bubbleSort(data);
  console.timeEnd("Bubble sort execution time");
  console.log(`Array length: ${data.length}`);
})();

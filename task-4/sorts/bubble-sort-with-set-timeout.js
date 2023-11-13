const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(arr) {
  const CHUNK_SIZE = 100;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % CHUNK_SIZE === 0) await delay(0);

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const data = Array.from(Array(50000), () => Math.floor(Math.random() * 100) + 1);

(async function () {
  console.time("Bubble sort execution time");
  await bubbleSort(data);
  console.timeEnd("Bubble sort execution time");
  console.log(`Array length: ${data.length}`);
})();

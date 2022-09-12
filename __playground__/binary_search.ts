/*
 * Binary search - O(log n)
 * Language: typescript
 *
 * Given a sorted array of integers, return the index of the given key. Return null if the key is not found.
 */

function binary_search(list: number[], item: number) {
  let low: number = 0;
  let high: number = list.length - 1;
  let mid: number;
  let guess: number;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess == item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  return null;
}

const list = [1, 3, 5, 7, 9, 12, 13, 17, 20];
binary_search(list, 3);
binary_search(list, 7);
binary_search(list, 8);
binary_search(list, 13);
binary_search(list, 17);

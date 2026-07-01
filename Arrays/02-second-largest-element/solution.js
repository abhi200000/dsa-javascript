const arr = [5, 8, 9, 3, 2];

let largest = arr[0];
let secondLargest = -Infinity;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } 
    else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);
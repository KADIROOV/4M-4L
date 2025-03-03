function bubbleSort(arr, order = "asc") {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (
                (order === "asc" && arr[j] > arr[j + 1]) ||
                (order === "desc" && arr[j] < arr[j + 1])
            ) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let numbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(numbers, "asc"));
console.log(bubbleSort(numbers, "desc")); 

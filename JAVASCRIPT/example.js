function findMaxValue(arr) {
    if (arr.length === 0) return "Array is empty";
    return Math.max(...arr);
}

// Example usage:
console.log(findMaxValue([10, 5, 8, 20, 3])); // Output: 20

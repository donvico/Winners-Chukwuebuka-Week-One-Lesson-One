// array of numbers
const numbers = [5, 8, 10, 9, 23];

// printing a specific element
console.log(numbers[3]);  // Output: 9

// Using array methods
numbers.push(43);      // Adds 43 at the end of the array
console.log(numbers); // Output: [ 5, 8, 10, 9, 23, 43 ]

numbers.pop();        // Removes the last element from the array
console.log(numbers); // Output: [ 5, 8, 10, 9, 23]

numbers.shift();      // Removes the first element from the array
console.log(numbers); // Output:  8, 10, 9, 23]

numbers.unshift(3);   // Adds 0 at the beginning of the array
console.log(numbers); // Output: [3, 8, 10, 9, 23]

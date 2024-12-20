let arr = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2];

let min = Math.floor(Math.min(...arr));

let max = Math.ceil(Math.max(...arr));

let result = max / min;
console.log(`Result of max / min: ${result}`);
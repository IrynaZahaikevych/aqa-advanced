const numbers = [22, 5, -8, 46, 13, 0];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
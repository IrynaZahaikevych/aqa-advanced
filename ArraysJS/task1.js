const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveNumbers++;
    } else if (numbers[i] < 0) {
        negativeNumbers++;
    } else {
        zeroNumbers++;
    }
}

console.log(`Кількість позитивних чисел: ${positiveNumbers}`);
console.log(`Кількість негативних чисел: ${negativeNumbers}`);
console.log(`Кількість нульових чисел: ${zeroNumbers}`);
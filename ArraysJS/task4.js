const numbers = [22, 5, -8, 46, 13, 0];

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0 && number !== 0;   // додала додаткову умову, що в консоль не виводився 0
});

console.log(evenNumbers);
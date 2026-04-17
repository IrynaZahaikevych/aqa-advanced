const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedList = [...numbersList];
sortedList.sort((a, b) => a - b);

console.log(numbersList);
console.log(sortedList);

// Якщо потрібно вивести масиви в один рядок:
console.log(`[${numbersList.join(", ")}]`);
console.log(`[${sortedList.join(", ")}]`);

const firstArray = [10, 54, 69, 2];
const secondArray = [33, 8, 14];

const combinedArray = firstArray.concat(secondArray);

console.log(combinedArray);


// Якщо потрібно вивести у формі масиву і в один рядок:
console.log(`[${combinedArray.join(', ')}]`);
const firstArray = [1, 2, 3, 4, 5];

const doubledArray = firstArray.map((element, index) => {
    return element * index;
});

console.log(doubledArray);
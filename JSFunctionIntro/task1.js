// Function Declaration
function getArea1 (width, height) {
    return width * height;
}  

console.log(getArea1(12, 8));



// Function Expression
const getArea2 = function (width, height) {
    return width * height;
}

console.log(getArea2(10, 7));



// Arrow Function
const getArea3 = (width, height) => width * height; 

console.log(getArea3(3, 6));
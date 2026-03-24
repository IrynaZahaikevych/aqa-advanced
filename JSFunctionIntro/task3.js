function checkOrder(available, ordered) {
    switch (true) {
        case (ordered === 0):
            return "Your order is empty";  // break не потрібен, бо return самостійно перериватиме виконання
            
        case (available < ordered):
            return "Your order is too large, we don’t have enough goods";
            
        default:
            return "Your order is accepted";
    }
}


console.log(checkOrder(33, 0));
console.log(checkOrder(17, 26));
console.log(checkOrder(108, 4));



// Якщо через if...else:
function checkOrder1(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (available < ordered) {
        return "Your order is too large, we don’t have enough goods";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrder1(33, 3));
console.log(checkOrder1(17, 26));
console.log(checkOrder1(108, 4));
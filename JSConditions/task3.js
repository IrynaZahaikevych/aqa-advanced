const number = 23.7;

console.log(`Таблиця множення - цикл for:`);

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${(number * i).toFixed(1)}`); // Використала додатково .toFixed(1), бо хотіла спробувати з дробовим числом (щоб не було у результаті 23.7 x 9 = 213.29999999999998)
}

console.log("***************************");

console.log(`Таблиця множення - цикл while:`);

let i = 1;
while (i <= 10) {
  console.log(`${number} x ${i} = ${(number * i).toFixed(1)}`);
  i++;
}

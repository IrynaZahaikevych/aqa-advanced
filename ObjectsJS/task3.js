const car1 ={ brand: "Volkswagen", model: "Golf", year: 2020 };
const car2 ={ brand: "Toyota", model: "Camry", owner: "Iryna" };
const car3 = { ...car1, ...car2 };

console.log(car3);
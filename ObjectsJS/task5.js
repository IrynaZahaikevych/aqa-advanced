const users = [
    { name: "Iryna", email: "izahaikevych@gmail.com", age: 34 },
    { name: "Taras", email: "tarik@gmail.com", age: 28 },
    { name: "Olena", email: "olena123@gmail.com", age: 15 }
]

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Пошта: ${email}, Вік: ${age}`);
}
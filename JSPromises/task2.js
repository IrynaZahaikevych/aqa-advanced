function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .catch((error) => console.error("Помилка при отриманні todo:", error));
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .catch((error) => console.error("Помилка при отриманні user:", error));
}

const allPromise = Promise.all([fetchTodo(), fetchUser()]).then((results) => {
  const [todo, user] = results;
  console.log("Результат Promise.all (обидва):", { todo, user });
  return results;
});

const racePromise = Promise.race([fetchTodo(), fetchUser()]).then((winner) => {
  console.log("Результат Promise.race (найшвидший):", winner);
  return winner;
});

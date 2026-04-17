async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
  } catch (error) {
    console.error('Помилка при отриманні todo:', error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
  } catch (error) {
    console.error('Помилка при отриманні user:', error);
  }
}

async function runAll() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Результат Promise.all (обидва):', { todo, user });
    return [todo, user];
  } catch (error) {
    console.error('Помилка в Promise.all:', error);
  }
}

async function runRace() {
  try {
    const winner = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Результат Promise.race (найшвидший):', winner);
    return winner;
  } catch (error) {
    console.error('Помилка в Promise.race:', error);
  }
}

runAll();
runRace();

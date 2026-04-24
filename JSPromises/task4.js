class ApiService {
  async fetchTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return await response.json();
    } catch (error) {
      console.error("Помилка при отриманні todo:", error);
    }
  }

  async fetchUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      return await response.json();
    } catch (error) {
      console.error("Помилка при отриманні user:", error);
    }
  }
}

class DataProcessor {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async getAllData() {
    try {
      const [todo, user] = await Promise.all([this.apiService.fetchTodo(), this.apiService.fetchUser()]);

      console.log("Результат Promise.all (обидва):", { todo, user });
      return { todo, user };
    } catch (error) {
      console.error("Помилка в Promise.all:", error);
    }
  }

  async getFastestData() {
    try {
      const winner = await Promise.race([this.apiService.fetchTodo(), this.apiService.fetchUser()]);

      console.log("Результат Promise.race (найшвидший):", winner);
      return winner;
    } catch (error) {
      console.error("Помилка в Promise.race:", error);
    }
  }
}

const apiService = new ApiService();
const dataProcessor = new DataProcessor(apiService);

dataProcessor.getAllData();
dataProcessor.getFastestData();

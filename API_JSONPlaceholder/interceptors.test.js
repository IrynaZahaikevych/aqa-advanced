const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
});

api.interceptors.request.use((config) => {
	console.log('Request:', {
		url: config.baseURL + config.url,
		method: config.method?.toUpperCase(),
		data: config.data,
		time: new Date().toISOString(),
	});
	return config;
});

api.interceptors.response.use((response) => {
	console.log('Response:', {
		status: response.status,
		url: response.config.url,
		data: response.data,
	});
	return response;
});

describe('JSONPlaceholder API tests with Axios interceptors', () => {
	test('GET - отримує', async () => {
		const response = await api.get('/posts/1');

		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('id', 1);
		expect(response.data).toHaveProperty('title');
	});

	test('POST - створює', async () => {
		const newPost = {
			title: 'QA test',
			body: 'Testing POST method',
			userId: 1,
		};

		const response = await api.post('/posts', newPost);

		expect(response.status).toBe(201);
		expect(response.data).toMatchObject(newPost);
		expect(response.data).toHaveProperty('id');
	});

	test('PUT - оновлює повністю', async () => {
		const updatedPost = {
			id: 1,
			title: 'Updated title',
			body: 'Updated body',
			userId: 1,
		};

		const response = await api.put('/posts/1', updatedPost);

		expect(response.status).toBe(200);
		expect(response.data).toMatchObject(updatedPost);
	});

	test('PATCH - оновлює частково', async () => {
		const response = await api.patch('/posts/1', {
			title: 'Patched title',
		});

		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('title', 'Patched title');
	});

	test('DELETE - видаляє', async () => {
		const response = await api.delete('/posts/1');

		expect(response.status).toBe(200);
	});
});

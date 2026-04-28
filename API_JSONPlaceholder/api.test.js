const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('API tests with axios', () => {
	// 1. GET
	test('GET - отримує', async () => {
		const response = await axios.get(`${baseUrl}/posts/1`);

		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('id', 1);
		expect(response.data).toHaveProperty('title');
	});

	// 2. POST
	test('POST - створює', async () => {
		const newPost = {
			title: 'QA test',
			body: 'Testing POST method',
			userId: 1,
		};

		const response = await axios.post(`${baseUrl}/posts`, newPost);

		expect(response.status).toBe(201);
		expect(response.data).toMatchObject(newPost);
		expect(response.data).toHaveProperty('id');
	});

	// 3. PUT (повне оновлення)
	test('PUT - оновлює повністю', async () => {
		const updatedPost = {
			id: 1,
			title: 'Updated title',
			body: 'Updated body',
			userId: 1,
		};

		const response = await axios.put(`${baseUrl}/posts/1`, updatedPost);

		expect(response.status).toBe(200);
		expect(response.data).toEqual(updatedPost);
	});

	// 4. PATCH (часткове оновлення)
	test('PATCH - оновлює частково', async () => {
		const patchData = {
			title: 'Patched title',
		};

		const response = await axios.patch(`${baseUrl}/posts/1`, patchData);

		expect(response.status).toBe(200);
		expect(response.data).toHaveProperty('title', 'Patched title');
	});

	// 5. DELETE
	test('DELETE - видаляє', async () => {
		const response = await axios.delete(`${baseUrl}/posts/1`);

		expect(response.status).toBe(200);
	});
});

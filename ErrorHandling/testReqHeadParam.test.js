const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

async function requestWithHeadersAndParams() {
	const response = await axios.get(`${baseUrl}/posts`, {
		params: {
			userId: 1,
		},
		headers: {
			'X-Custom-Header': 'MyTestValue',
		},
	});
	return response;
}

describe('Headers та Params', () => {
	test('Правильні параметри та заголовки у запиті', async () => {
		const response = await requestWithHeadersAndParams();

		expect(response.status).toBe(200);

		expect(response.config.params).toEqual({ userId: 1 });

		expect(response.config.headers['X-Custom-Header']).toBe('MyTestValue');

		expect(response.data[0].userId).toBe(1);
	});
});

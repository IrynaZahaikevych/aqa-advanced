const axios = require('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

async function fetchDataWithError() {
	try {
		await axios.get(`${baseUrl}/non-existent-endpoint-123`);
	} catch (error) {
		if (error.response) {
			return error.response.status;
		}
		return error.message;
	}
}

describe('Axios Errors', () => {
	test('404 для неіснуючого URL', async () => {
		const result = await fetchDataWithError();
		expect(result).toBe(404);
	});

	test('Jest перевірка', async () => {
		const wrongUrl = `${baseUrl}/wrong-path`;

		try {
			await axios.get(wrongUrl);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});
});

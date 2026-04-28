const axios = require('axios');

jest.mock('axios');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('Mocking Axios in Jest', () => {
	test('Імітація успішного GET запиту (Success)', async () => {
		const mockedData = { id: 1, title: 'Mocked Post' };

		axios.get.mockResolvedValue({
			status: 200,
			data: mockedData,
		});

		const response = await axios.get(`${baseUrl}/posts/1`);

		expect(response.status).toBe(200);
		expect(response.data).toEqual(mockedData);

		expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/posts/1`);
	});

	test('Імітація невдалого запиту (Error 404)', async () => {
		axios.get.mockRejectedValue({
			response: {
				status: 404,
			},
		});

		try {
			await axios.get(`${baseUrl}/non-existent`);
		} catch (error) {
			expect(error.response.status).toBe(404);
		}
	});
});

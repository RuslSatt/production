import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetch profile data', () => {
	const form = {
		name: 'Ruslan',
		lastName: 'Sattarov'
	};

	test('get ok', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ data: form }));

		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(form);
	});

	test('get 403', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk('1');

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error get profile data');
	});
});

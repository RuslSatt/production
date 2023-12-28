import axios from 'axios';
import { userActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername test', () => {
	const userValue = { username: 'admin', id: '1' };

	test('post ok', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userValue);
	});

	test('post 403', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error login');
	});
});

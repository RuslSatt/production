import { userActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername test', () => {
	const userValue = { username: 'admin', id: '1' };

	test('post ok', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userValue);
	});

	test('post 403', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error login');
	});
});

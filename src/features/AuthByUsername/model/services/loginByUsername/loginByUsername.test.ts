import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User/model/slice/userSlice';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername test', () => {
	let dispatch: Dispatch;
	let getState: () => StateSchema;

	const userValue = { username: 'admin', id: '1' };

	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();
	});

	test('post ok', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
		const action = loginByUsername({ username: 'admin', password: '123' });
		const result = await action(dispatch, getState, undefined);

		expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userValue);
	});

	test('post 403', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const action = loginByUsername({ username: 'admin', password: '123' });
		const result = await action(dispatch, getState, undefined);

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error login');
	});
});

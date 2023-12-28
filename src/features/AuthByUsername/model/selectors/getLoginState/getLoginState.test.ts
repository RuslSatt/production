import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';

describe('loginForm state selector', () => {
	test('get login state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin',
				password: '123',
				error: 'Error message',
				isLoading: true
			}
		};
		expect(getLoginState(state as StateSchema)).toEqual({
			username: 'admin',
			password: '123',
			error: 'Error message',
			isLoading: true
		});
	});
});

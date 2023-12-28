import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './getLoginPassword';

describe('password selector', () => {
	test('get login password', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: '123'
			}
		};
		expect(getLoginPassword(state as StateSchema)).toEqual('123');
	});
});

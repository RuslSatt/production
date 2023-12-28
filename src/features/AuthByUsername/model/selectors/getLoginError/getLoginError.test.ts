import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';

describe('login selector', () => {
	test('get login error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: 'Error message'
			}
		};
		expect(getLoginError(state as StateSchema)).toEqual('Error message');
	});
});

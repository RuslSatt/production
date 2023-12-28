import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice test', () => {
	test('set username test', () => {
		const state: DeepPartial<LoginSchema> = { username: 'a' };
		expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
	});

	test('set password test', () => {
		const state: DeepPartial<LoginSchema> = { password: '1' };
		expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
	});
});

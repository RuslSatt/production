import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('get counter', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 1
			}
		};
		expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
	});
});

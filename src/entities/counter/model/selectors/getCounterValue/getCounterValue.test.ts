import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('get counter value', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 1
			}
		};
		expect(getCounterValue(state as StateSchema)).toEqual(1);
	});
});

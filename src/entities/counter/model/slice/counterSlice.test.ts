import { CounterScheme } from '../types/counterScheme';
import { counterActions, counterReducer } from './counterSlice';

describe('counter slice', () => {
	test('decrement', () => {
		const state: CounterScheme = {
			value: 1
		};
		expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 0 });
	});
	test('increment', () => {
		const state: CounterScheme = {
			value: 1
		};
		expect(counterReducer(state, counterActions.increment)).toEqual({ value: 2 });
	});
	test('undefined state', () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
	});
});

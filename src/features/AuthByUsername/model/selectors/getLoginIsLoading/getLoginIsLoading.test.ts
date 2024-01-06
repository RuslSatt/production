import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('login isLoading selector', () => {
	test('get login isLoading', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true
			}
		};
		expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
	});
});

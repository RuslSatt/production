import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('login username selector', () => {
	test('get login username', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin'
			}
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('admin');
	});
});

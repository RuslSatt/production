import { StateSchema } from 'app/providers/StoreProvider';
import { getProfile } from './getProfile';

describe('login username selector', () => {
	test('get login username', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: {
					name: 'Ruslan',
					lastName: 'Sattarov'
				}
			}
		};
		expect(getProfile(state as StateSchema)).toEqual({
			name: 'Ruslan',
			lastName: 'Sattarov'
		});
	});
});

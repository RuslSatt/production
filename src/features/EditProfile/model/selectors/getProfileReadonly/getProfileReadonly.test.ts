import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('login username selector', () => {
	test('get login username', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: false
			}
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(false);
	});
});

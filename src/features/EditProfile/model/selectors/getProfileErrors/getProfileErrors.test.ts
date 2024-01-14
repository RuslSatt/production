import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileErrors } from './getProfileErrors';

describe('login username selector', () => {
	test('get login username', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [ValidateProfileError.IS_EMPTY]
			}
		};
		expect(getProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.IS_EMPTY]);
	});
});

import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

describe('update profile data', () => {
	const data = {
		name: 'Ruslan',
		lastName: 'Sattarov',
		age: 22,
		currency: Currency.RUB,
		country: Country.Russia,
		city: 'Ufa',
		username: 'lllkeks'
	};

	test('put ok', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(data);
	});

	test('put no data', async () => {
		const thunk = new TestAsyncThunk(updateProfileData);

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toStrictEqual([ValidateProfileError.NO_DATA]);
	});

	test('put server error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toStrictEqual([ValidateProfileError.SERVER]);
	});

	test('put user error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastName: '' }
			}
		});

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toStrictEqual([ValidateProfileError.IS_EMPTY]);
	});
});

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

describe('fetch profile data', () => {
	const data = {
		name: 'Ruslan',
		lastName: 'Sattarov',
		age: 22,
		currency: Currency.RUB,
		country: Country.Russia,
		city: 'Ufa',
		username: 'lllkeks'
	};

	test('validate ok', async () => {
		expect(validateProfileData(data)).toStrictEqual([]);
	});

	test('validate error', async () => {
		data.lastName = '';
		expect(validateProfileData(data)).toStrictEqual([ValidateProfileError.IS_EMPTY]);
	});
});

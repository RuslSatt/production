import { Profile, ValidateProfileError } from 'entities/Profile';

const validate = (name: string, lastName: string, username: string) => {
	if (!name?.length) return false;
	if (!lastName?.length) return false;
	if (!username?.length) return false;

	return true;
};

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidateProfileError[] = [];
	if (!profile) {
		errors.push(ValidateProfileError.NO_DATA);
		return errors;
	}

	const { name = '', lastName = '', username = '' } = profile;

	const result = validate(name, lastName, username);

	if (!result) errors.push(ValidateProfileError.IS_EMPTY);

	return errors;
};

import { ProfileSchema } from 'entities/Profile';
import { updateProfileData } from 'features/EditProfile';
import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const state = {
	isLoading: false,
	error: undefined,
	data: undefined,
	form: undefined,
	readonly: true,
	validateErrors: []
};

describe('profileSlice test', () => {
	test('set readonly', () => {
		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
			...state,
			readonly: false
		});
	});

	test('update form', () => {
		expect(profileReducer(state as ProfileSchema, profileActions.updateForm({ name: 'Ruslan' }))).toEqual({
			...state,
			form: {
				name: 'Ruslan'
			}
		});
	});

	test('cancel edit form', () => {
		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			...state
		});
	});

	test('fetch profile pending', () => {
		expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
			...state,
			error: undefined,
			isLoading: true
		});
	});

	test('fetch profile fulfilled', () => {
		expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled)).toEqual({
			...state,
			isLoading: false
		});
	});

	test('update profile pending', () => {
		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			...state,
			validateErrors: [],
			isLoading: true
		});
	});

	test('update profile fulfilled', () => {
		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled)).toEqual({
			...state,
			isLoading: false,
			readonly: true
		});
	});
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { getProfile } from '../../selectors/getProfile/getProfile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (profileId, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;

		const data = getProfile(getState());

		const errors = validateProfileData(data);

		if (errors?.length) return rejectWithValue(errors);

		try {
			const response = await extra.api.put(`/profile/${profileId}`, data);

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue([ValidateProfileError.SERVER]);
		}
	}
);

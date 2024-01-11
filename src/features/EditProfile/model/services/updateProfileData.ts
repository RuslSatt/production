import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../../../entities/Profile/model/types/profile';
import { getProfile } from '../selectors/getProfile/getProfile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;

		const data = getProfile(getState());

		try {
			const response = await extra.api.put('/profile', data);

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue('error get profile data');
		}
	}
);

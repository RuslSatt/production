import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
	readonly: true
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<Profile>) => {
			state.data = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

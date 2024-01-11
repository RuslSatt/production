import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../../../../entities/Profile/model/types/profile';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';

const initialState: ProfileSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
	form: undefined,
	readonly: true
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		updateForm: (state, action: PayloadAction<Profile>) => {
			state.form = { ...state.form, ...action.payload };
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.form = state.data;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.data = action.payload;
				state.form = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.data = action.payload;
				state.form = action.payload;
				state.isLoading = false;
				state.readonly = true;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	}
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

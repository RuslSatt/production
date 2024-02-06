import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentSchema } from '../types/addComment';

const initialState: addCommentSchema = {
	text: ''
};

export const addCommentSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {
		setText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;

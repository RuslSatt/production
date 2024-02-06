import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentSchema } from '../types/addComment';

const initialState: addCommentSchema = {
	text: ''
};

export const addCommentSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {
		setComment(state, action) {
			state.text = action.payload;
		}
	},
	extraReducers: (builder) => {
		// builder
		// 	.addCase(fetchArticleById.pending, (state) => {
		// 		state.error = undefined;
		// 		state.isLoading = true;
		// 	})
		// 	.addCase(fetchArticleById.fulfilled, (state, action) => {
		// 		state.isLoading = false;
		// 		state.data = action.payload;
		// 	})
		// 	.addCase(fetchArticleById.rejected, (state, action) => {
		// 		state.error = action.payload;
		// 		state.isLoading = false;
		// 	});
	}
});

// Action creators are generated for each case reducer function
export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;

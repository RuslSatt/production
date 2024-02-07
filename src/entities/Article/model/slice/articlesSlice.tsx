import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticlesSchema } from '../types/article';
import { fetchArticles } from '../services/fetchArticles';

const initialState: ArticlesSchema = {
	isLoading: false,
	data: undefined
};

export const articlesSlice = createSlice({
	name: 'articlesSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	}
});

// Action creators are generated for each case reducer function
export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;

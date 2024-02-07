import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../types/article';

export const fetchArticles = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
	'articleDetails/fetchArticles',
	async (_, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;

		try {
			const response = await extra.api.get<IArticle[]>('/articles');

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue('error get articles');
		}
	}
);

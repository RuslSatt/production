import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
	'articleDetails/fetchArticleById',
	async (id, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;

		try {
			const response = await extra.api.get<IArticle>(`/articles/${id}`);

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue('error get profile data');
		}
	}
);

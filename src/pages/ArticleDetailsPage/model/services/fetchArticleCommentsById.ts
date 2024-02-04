import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchArticleCommentsById = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
	'articleDetailsComments/fetchArticleDetailsComments',
	async (articleId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi;

		try {
			if (!articleId) {
				return rejectWithValue('id not found');
			}

			const response = await extra.api.get<IComment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user'
				}
			});

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue('error get profile data');
		}
	}
);

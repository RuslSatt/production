import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article';
import { getNewCommentText } from '../selectors/getNewComment';

export const addNewComment = createAsyncThunk<IComment, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkApi) => {
		const { rejectWithValue, extra, getState } = thunkApi;

		const user = getUserAuthData(getState());
		const text = getNewCommentText(getState());
		const article = getArticleDetails(getState());

		if (!user || !text || !article) return rejectWithValue('no comment data');

		const data = {
			text,
			articleId: article?.id,
			userId: user?.id
		};

		try {
			const response = await extra.api.post('/comments', data);

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			return rejectWithValue('error add comment');
		}
	}
);

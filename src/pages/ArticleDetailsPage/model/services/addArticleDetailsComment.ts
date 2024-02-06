import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article';
import { articleDetailsCommentsActions } from '../slice/articleDetailsComments';

export const addArticleDetailsComment = createAsyncThunk<IComment, string, ThunkConfig<string>>(
	'articleDetailsPage/addArticleDetailsComment',
	async (text, thunkApi) => {
		const { rejectWithValue, extra, getState, dispatch } = thunkApi;

		const user = getUserAuthData(getState());
		const article = getArticleDetails(getState());

		if (!user || !text || !article) return rejectWithValue('no comment data');

		const data = {
			text,
			articleId: article?.id,
			userId: user?.id
		};

		try {
			const response = await extra.api.post<IComment>('/comments', data);

			const comment = response.data;

			if (!comment) throw new Error();

			dispatch(articleDetailsCommentsActions.addComment({ ...comment, user }));

			return comment;
		} catch (e) {
			return rejectWithValue('error add comment');
		}
	}
);

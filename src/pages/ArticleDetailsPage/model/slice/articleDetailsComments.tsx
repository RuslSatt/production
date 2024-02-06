import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsComments';
import { fetchArticleCommentsById } from '../services/fetchArticleCommentsById';

const commentsAdapter = createEntityAdapter<IComment>({
	selectId: (comment) => comment.id
});

export const getArticleDetailsComments = commentsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsComments',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {
		addComment(state, action: PayloadAction<IComment>) {
			commentsAdapter.setOne(state, action.payload);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleCommentsById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<IComment[]>) => {
				state.isLoading = false;
				commentsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleCommentsById.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	}
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

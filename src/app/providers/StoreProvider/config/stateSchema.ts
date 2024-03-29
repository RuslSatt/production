import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema, ArticlesSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { addCommentSchema } from 'features/AddComment';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
	user: UserSchema;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articles?: ArticlesSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
	addComment?: addCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export type ThunkNavigate = (to: To, options?: NavigateOptions) => void;

export interface ThunkExtra {
	api: AxiosInstance;
	navigate?: ThunkNavigate;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtra;
	state: StateSchema;
}

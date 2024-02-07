import { StateSchema } from 'app/providers/StoreProvider';

export const getArticles = (state: StateSchema) => state.articles?.data;
export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesError = (state: StateSchema) => state.articles?.error;

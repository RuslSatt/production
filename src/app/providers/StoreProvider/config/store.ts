import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';

export const createStore = (initialState?: StateSchema) =>
	configureStore<StateSchema>({
		reducer: {},
		preloadedState: initialState
	});

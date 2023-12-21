import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import type { StateSchema } from './stateSchema';

export const createStore = (initialState?: StateSchema) =>
	configureStore<StateSchema>({
		reducer: { counter: counterReducer },
		preloadedState: initialState
	});

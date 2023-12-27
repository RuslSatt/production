import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/User/model/slice/userSlice';
import type { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		preloadedState: initialState
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

import { DeepPartial, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/User/model/slice/userSlice';
import type { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (initialState?: StateSchema, asyncReducers?: DeepPartial<ReducersMapObject>) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
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

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

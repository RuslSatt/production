import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/User/model/slice/userSlice';
import type { StateSchema } from './stateSchema';

export const createStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		preloadedState: initialState
	});
};

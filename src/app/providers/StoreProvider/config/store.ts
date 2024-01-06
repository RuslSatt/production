import { CombinedState, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { $api } from 'shared/api/api';
import type { StateSchema, ThunkExtra, ThunkNavigate } from './stateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (
	initialState?: StateSchema,
	asyncReducers?: DeepPartial<ReducersMapObject>,
	navigate?: ThunkNavigate
) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtra = {
		api: $api,
		navigate
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg
				}
			})
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

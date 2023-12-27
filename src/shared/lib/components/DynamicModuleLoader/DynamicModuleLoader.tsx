import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreManager, StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';
import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
	[key in StateSchemaKey]?: Reducer;
};

type ReducersListEntries = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
	children?: React.ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const { children, reducers, removeAfterUnmount = true } = props;

	const store = useStore() as ReduxStoreManager;
	const dispatch = useDispatch();

	useEffect(() => {
		const arrayReducers = Object.entries(reducers);

		arrayReducers.forEach(([name, reducer]: ReducersListEntries) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				arrayReducers.forEach(([name]: ReducersListEntries) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};

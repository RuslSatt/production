import React from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

export interface StoreProviderProps {
	children?: React.ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;

	const store = createStore(initialState as StateSchema, asyncReducers as DeepPartial<ReducersMapObject>);

	return <Provider store={store}>{children}</Provider>;
};

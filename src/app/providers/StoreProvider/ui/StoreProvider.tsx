import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

export interface StoreProviderProps {
	children?: React.ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;

	const navigate = useNavigate(); // Use in the async thunks

	const store = createStore(initialState as StateSchema, asyncReducers as DeepPartial<ReducersMapObject>, navigate);

	return <Provider store={store}>{children}</Provider>;
};

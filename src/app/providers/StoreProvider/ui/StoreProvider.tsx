import React from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

export interface StoreProviderProps {
	children?: React.ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState } = props;

	const store = createStore(initialState as StateSchema);

	return <Provider store={store}>{children}</Provider>;
};

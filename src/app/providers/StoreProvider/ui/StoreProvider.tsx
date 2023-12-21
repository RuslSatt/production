import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

export interface StoreProviderProps {
	children?: React.ReactNode;
	initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState } = props;

	const store = createStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};

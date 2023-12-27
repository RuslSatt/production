import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import React from 'react';

type PartialStateSchema = DeepPartial<StateSchema>;
type PartialAsyncReducers = DeepPartial<ReducersMapObject<StateSchema>>;

const defaultAsyncReducers: PartialAsyncReducers = {
	loginForm: loginReducer
};

export const StoreDecorator = (state: PartialStateSchema, asyncReducers?: PartialAsyncReducers) => (Story: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<Story />
	</StoreProvider>
);

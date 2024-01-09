import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditProfile';
import React from 'react';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

type PartialStateSchema = DeepPartial<StateSchema>;
type PartialAsyncReducers = DeepPartial<ReducersMapObject<StateSchema>>;

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer
};

export const StoreDecorator = (state: PartialStateSchema, asyncReducers?: PartialAsyncReducers) => (Story: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<Story />
	</StoreProvider>
);

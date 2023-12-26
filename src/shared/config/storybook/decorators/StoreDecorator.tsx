import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import React from 'react';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
	<StoreProvider initialState={state}>
		<Story />
	</StoreProvider>
);

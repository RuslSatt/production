import { ChakraBaseProvider } from '@chakra-ui/react';
import { StoryFn } from '@storybook/react';
import React from 'react';

export const ChakraUiDecorator = (Story: StoryFn) => (
	<ChakraBaseProvider>
		<Story />
	</ChakraBaseProvider>
);

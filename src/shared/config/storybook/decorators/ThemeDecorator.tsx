import { StoryFn } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (theme: Themes) => (Story: StoryFn) => (
	<div style={{ minHeight: '100%' }} className={classNames('app', [theme])}>
		<Story />
	</div>
);

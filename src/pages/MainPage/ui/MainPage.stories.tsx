import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
	args: {}
};

Light.decorators = [RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)];

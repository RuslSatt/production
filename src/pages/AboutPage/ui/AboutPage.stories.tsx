import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
	args: {}
};

Light.decorators = [RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)];

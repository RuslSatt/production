import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
	title: 'shared/ui/Loader',
	component: Loader,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
	args: {}
};

Light.decorators = [RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)];

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { SwitchTheme } from './SwitchTheme';

const meta: Meta<typeof SwitchTheme> = {
	title: 'widget/ui/SwitchTheme',
	component: SwitchTheme,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof SwitchTheme>;

export const Light: Story = {
	args: {}
};

Light.decorators = [RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)];

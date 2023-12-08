import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { ButtonLink } from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
	title: 'shared/ui/ButtonLink',
	component: ButtonLink,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Light: Story = {
	args: {
		children: 'Главная страница'
	}
};

Light.decorators = [RouterDecorator];

export const Dark: Story = {
	args: {
		children: 'Главная страница'
	}
};

Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)];

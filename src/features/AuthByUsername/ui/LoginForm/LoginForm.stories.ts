import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'features/Login/LoginForm',
	component: LoginForm,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

const store = StoreDecorator({
	loginForm: {
		username: 'admin',
		password: '123'
	}
});

export const Light: Story = {
	args: {}
};

Light.decorators = [store];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Themes.DARK), store];

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { NavBar } from './Navbar';

const meta: Meta<typeof NavBar> = {
	title: 'widget/ui/Navbar',
	component: NavBar,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

const store = StoreDecorator({});

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
	args: {}
};

Light.decorators = [store, RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Themes.DARK), store, RouterDecorator];

export const Auth: Story = {
	args: {}
};

Auth.decorators = [
	ThemeDecorator(Themes.DARK),
	StoreDecorator({
		user: {
			authData: {
				id: '1',
				username: 'admin'
			}
		}
	}),
	RouterDecorator
];

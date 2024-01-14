import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const store = StoreDecorator({
	profile: {
		data: {
			name: 'Ruslan',
			lastName: 'Sattarov',
			username: 'Russel',
			age: 25,
			city: 'Ufa'
		},
		readonly: true
	}
});

// Необходимо исключить запросы к серверу в среде storybook

export const Normal: Story = {
	args: {}
};

Normal.decorators = [store, RouterDecorator];

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Themes.DARK), store, RouterDecorator];

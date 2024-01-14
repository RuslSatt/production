import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Form: Story = {
	args: {
		data: {
			name: 'Ruslan',
			lastName: 'Sattarov',
			username: 'Russel',
			age: 25,
			city: 'Ufa'
		}
	}
};

Form.decorators = [];

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/ui/Button',
	component: Button,
	parameters: {},

	tags: ['autodocs'],

	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		// primary: true,
		label: 'Button'
	}
};

export const Secondary: Story = {
	args: {
		label: 'Button'
	}
};

export const Large: Story = {
	args: {
		// size: 'large',
		label: 'Button'
	}
};

export const Small: Story = {
	args: {
		// size: 'small',
		label: 'Button'
	}
};

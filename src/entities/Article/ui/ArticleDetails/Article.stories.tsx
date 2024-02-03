import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
	title: 'entities/ArticleCard',
	component: ArticleDetails,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Form: Story = {
	args: {}
};

Form.decorators = [];

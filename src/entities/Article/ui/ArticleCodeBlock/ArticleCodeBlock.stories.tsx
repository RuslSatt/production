import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlock } from './ArticleCodeBlock';

const meta: Meta<typeof ArticleCodeBlock> = {
	title: 'entities/ArticleCodeBlock',
	component: ArticleCodeBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlock>;

export const Form: Story = {
	args: {}
};

Form.decorators = [];

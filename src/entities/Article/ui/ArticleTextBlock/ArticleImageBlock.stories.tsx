import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlock } from './ArticleTextBlock';

const meta: Meta<typeof ArticleTextBlock> = {
	title: 'entities/ArticleTextBlock',
	component: ArticleTextBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlock>;

export const Form: Story = {
	args: {}
};

Form.decorators = [];

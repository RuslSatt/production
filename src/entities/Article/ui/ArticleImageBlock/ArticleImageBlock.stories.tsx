import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlock } from './ArticleImageBlock';

const meta: Meta<typeof ArticleImageBlock> = {
	title: 'entities/ArticleImageBlock',
	component: ArticleImageBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlock>;

export const Form: Story = {
	args: {}
};

Form.decorators = [];

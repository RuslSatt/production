import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import '../../src/app/styles/index.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [ThemeDecorator('dark')]
};

export default preview;

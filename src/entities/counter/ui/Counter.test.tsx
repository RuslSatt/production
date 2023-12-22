import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/test/componentRender';
import { Counter } from './Counter';

const user = userEvent.setup();

describe('counter entities', () => {
	test('increment', async () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 0 } }
		});

		const increment = screen.getByTestId('increment-btn');

		await user.click(increment);

		expect(screen.getByTestId('value')).toHaveTextContent('1');
	});

	test('decrement', async () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 1 } }
		});

		const decrement = screen.getByTestId('decrement-btn');

		await user.click(decrement);

		expect(screen.getByTestId('value')).toHaveTextContent('0');
	});
});

import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Test render Sidebar', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test switch Sidebar', () => {
		componentRender(<Sidebar />);

		const sidebar = screen.getByTestId('sidebar');
		const button = screen.getByTestId('toggle');

		fireEvent.click(button);

		expect(sidebar).toHaveClass('collapsed');
	});
});

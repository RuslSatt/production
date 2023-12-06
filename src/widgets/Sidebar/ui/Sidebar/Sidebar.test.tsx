import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderTranslation } from 'shared/lib/test/renderTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Test render Sidebar', () => {
		render(renderTranslation(<Sidebar />));
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test switch Sidebar', () => {
		render(renderTranslation(<Sidebar />));

		const sidebar = screen.getByTestId('sidebar');
		const button = screen.getByTestId('toggle');

		fireEvent.click(button);

		expect(sidebar).toHaveClass('collapsed');
	});
});

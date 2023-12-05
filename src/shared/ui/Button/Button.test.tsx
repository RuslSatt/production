import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Test render button', () => {
	test('Test render button', () => {
		render(<Button>Нажми меня</Button>);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});

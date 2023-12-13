import { render } from '@testing-library/react';
import { AppRouter } from 'app/providers/AppRouter';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nTest';

export interface componentRenderOptions {
	route?: string;
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
	const { route = '/' } = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18n}>
				<AppRouter />
				{component}
			</I18nextProvider>
		</MemoryRouter>
	);
};

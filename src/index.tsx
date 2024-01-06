import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);

import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/AppRouter';
import { useTheme } from 'app/providers/ThemeProvider';

import '../shared/config/i18n/i18n';

function App() {
	const { theme } = useTheme();

	return (
		<Suspense fallback='loading...'>
			<div className={classNames('app', [theme])}>
				<NavBar />
				<div className='wrapper'>
					<Sidebar />
					<div className='page'>
						<AppRouter />
					</div>
				</div>
			</div>
		</Suspense>
	);
}

export default App;

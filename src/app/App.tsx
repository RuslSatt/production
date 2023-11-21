import React from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/AppRouter';
import { NavBar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<NavBar />
			<div className='wrapper'>
				<Sidebar />
				<div className='page'>
					<AppRouter />
				</div>
			</div>
		</div>
	);
};

export default App;

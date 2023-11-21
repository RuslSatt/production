import React from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/AppRouter';
import { NavBar } from 'widgets/Navbar/ui/Navbar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<NavBar />
			<AppRouter />
		</div>
	);
};

export default App;

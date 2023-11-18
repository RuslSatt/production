import React from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/AppRouter';
import { NavBar } from 'widgets/Navbar/ui/Navbar';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<NavBar />
			<AppRouter />

			<button onClick={toggleTheme}>Сменить тему</button>
		</div>
	);
};

export default App;

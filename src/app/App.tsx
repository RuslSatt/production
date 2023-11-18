import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/AppRouter';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={`/`}>Link to main page</Link>
			<Link to={`/about`}>Link to about page</Link>
			<AppRouter />
		</div>
	);
};

export default App;

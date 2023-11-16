import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={`/`}>Link to main page</Link>
			<Link to={`/about`}>Link to about page</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;

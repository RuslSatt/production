import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import useTheme from './theme/hooks';
import { classNames } from './helpers/classNames/classNames';

const MainPageLazy = lazy(() => import('./pages/MainPage/MainPage'));
const AboutPageLazy = lazy(() => import('./pages/AboutPage/AboutPage'));

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={`/`}>Link to main page</Link>
			<Link to={`/about`}>Link to about page</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageLazy />} />
					<Route path='/about' element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;

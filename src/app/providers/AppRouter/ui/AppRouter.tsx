import React from 'react';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/RouterConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routerConfig).map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};

export { AppRouter };

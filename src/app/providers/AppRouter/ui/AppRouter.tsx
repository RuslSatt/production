import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
	<Suspense fallback={<PageLoader />}>
		<Routes>
			{Object.values(routerConfig).map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	</Suspense>
);
